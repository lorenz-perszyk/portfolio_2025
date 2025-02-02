"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEmployee } from "@/db/queries/insert";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { FormInputErrorMessage } from "./formInputErrorMessage";

const schema = z.object({
	firstName: z.string().min(1, { message: "First Name is required" }),
	lastName: z.string().min(1, { message: "Last Name is required" }),
	email: z.string().email({ message: "Invalid email" }),
	vegetarian: z.boolean(),
});

type FormFields = z.infer<typeof schema>;

export const EmployeeForm: React.FC = () => {
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		try {
			if (!data) return;
			console.log(data);
			const employee = await insertEmployee(data);
			toast({
				title: "Success",
				description: `${employee[0].firstName} ${employee[0].lastName} was added`,
			});
			reset();
		} catch (error) {
			console.error("Error creating animal:", error);
		}
	};

	return (
		<div className="bg-zinc-300 p-8 rounded shadow-md w-96">
			<h2 className="font-semibold text-lg mb-4">Add Employee</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Input
						type="text"
						placeholder="First Name"
						{...register("firstName")}
					/>
					<FormInputErrorMessage error={errors.firstName} />
				</div>
				<div className="flex flex-col gap-2">
					<Input
						type="text"
						placeholder="Last Name"
						{...register("lastName")}
					/>
					<FormInputErrorMessage error={errors.lastName} />
				</div>
				<div className="flex flex-col gap-2">
					<Input type="email" placeholder="Email" {...register("email")} />
					<FormInputErrorMessage error={errors.email} />
				</div>
				<div className="flex flex-col gap-2">
					<Controller
						control={control}
						name="vegetarian"
						defaultValue={false}
						render={({ field: { value, onChange } }) => (
							<Switch
								id="vegetarian"
								onCheckedChange={onChange}
								checked={value}
							/>
						)}
					/>
					<Label htmlFor="vegetarian">Vegetarian</Label>
				</div>
				<FormInputErrorMessage error={errors.vegetarian} />
				<Button
					className="mt-8"
					variant="default"
					size="lg"
					type="submit"
					disabled={isSubmitting}
				>
					Add
				</Button>
			</form>
		</div>
	);
};
