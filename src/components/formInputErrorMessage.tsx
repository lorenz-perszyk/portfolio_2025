import { FieldError } from "react-hook-form";

type ErrorMessageProps = {
	error?: FieldError;
};

export const FormInputErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
	return error ? (
		<span className="text-sm text-red-600">{error.message}</span>
	) : null;
};
