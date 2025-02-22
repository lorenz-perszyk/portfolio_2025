"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import { Label } from "./ui/label";

const FormSchema = z.object({
	name: z.string().nonempty({ message: "Name is required" }),
	email: z.string().email({ message: "Invalid email address" }),
	message: z.string().nonempty({ message: "Message is required" }),
	honeypot: z.string().optional(),
});

export const ContactForm: React.FC = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
			honeypot: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		if (values.honeypot) {
			console.log("Spam submission detected.");
			return;
		}

		const serviceID = "service_s1sxlht";
		const templateID = "template_jevin0h";
		const publicKey = "3oARknsZwjbRs3XQb";

		try {
			const result = await emailjs.send(
				serviceID,
				templateID,
				values,
				publicKey
			);
			console.log(result.text);
			form.reset();
			setIsSubmitted(true);
		} catch (error) {
			if (error instanceof Error) {
				console.error("Email failed to send: ", error.message);
				alert("Failed to send message. Please try again later.");
			} else {
				console.error("An unknown error occurred.");
				alert("Failed to send message. Please try again later.");
			}
		}
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-8"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className="relative">
										<Input {...field} type="text" placeholder="Name" required />
										<Label
											htmlFor="name"
											className="absolute left-3 top-[50%] -translate-y-[50%]"
										>
											Name
										</Label>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className="relative">
										<Input
											{...field}
											type="email"
											placeholder="Email"
											required
										/>
										<Label
											htmlFor="email"
											className="absolute left-3 top-[50%] -translate-y-[50%]"
										>
											Email
										</Label>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className="relative">
										<Textarea
											{...field}
											placeholder="Message"
											className="min-h-40"
											required
										/>
										<Label
											htmlFor="email"
											className="absolute left-3 top-5"
										>
											Message
										</Label>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="honeypot"
						render={({ field }) => (
							<FormItem className="hidden">
								<FormControl>
									<Input
										{...field}
										type="text"
										placeholder="Leave this field empty"
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="bg-[#FE004A] hover:bg-[#D6003E] text-white h-12 w-full"
						disabled={form.formState.isSubmitting}
					>
						{form.formState.isSubmitting && (
							<Loader2 className="animate-spin h-5 w-5 mr-3 text-white" />
						)}
						Send Message
					</Button>
				</form>
			</Form>
			{isSubmitted && (
				<p className="font-medium text-green-600">
					🎉&nbsp;&nbsp;Message sent successfully!
				</p>
			)}
		</>
	);
};
