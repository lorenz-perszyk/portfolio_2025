import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { Employee } from "@/db/schema/employee";

interface UserContextType {
	user: Employee | null;
	login: (user: Employee | null) => void;
	logout: (callback?: () => void) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
   const [user, setUser] = useState<Employee | null>(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("selectedEmployee");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	const login = (user: Employee | null) => {
		setUser(user);
		if (user) {
			localStorage.setItem("selectedEmployee", JSON.stringify(user));
		} else {
			localStorage.removeItem("selectedEmployee");
		}
	};

	 const logout = (callback?: () => void) => {
			setUser(null);
			localStorage.removeItem("selectedEmployee");
			if (callback) {
				callback();
			}
		};

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
