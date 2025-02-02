"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { employee } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "./ui/badge";

export const EmployeeGrid: FC = (): JSX.Element => {
  const qc = useQueryClient();
  const { toast } = useToast();

	const { data: employees, isPending } = useQuery({
		queryKey: ["QUERY_EMPLOYEES"],
		queryFn: async () => {
      const response = await db.select().from(employee);
      if (!response) toast({title: "Error", description: "No data available"});
			return response;
		},
  });

	const handleDelete = async (id: number) => {
		await db.delete(employee).where(eq(employee.id, id));
		toast({title: "Success", description: "Employee was deleted"});
    qc.invalidateQueries({
      queryKey: ["QUERY_EMPLOYEES"],
    })
	};


	if (isPending) return <div>Loading...</div>
	if (!employees) return <div>Not Data available...</div>

	return (
		<div className="grid gap-4 w-[800px] mx-auto">
			{employees.map((employee) => (
				<div
					className="flex gap-6 p-3 items-center bg-slate-50 rounded-lg shadow-lg"
					key={employee.id}
				>
					<h3 className="font-semibold min-w-40">
						{employee.firstName} {employee.lastName}
					</h3>
					<div>
						Vegetarian:{" "}
						<Badge variant="outline"
							className={employee.vegetarian ? "bg-green-300" : "bg-red-300" }>
							{employee.vegetarian ? "yes" : " no"}
						</Badge>
					</div>
					<div className="flex gap-2 w-60 ml-auto">
						<Button variant="default" size="sm" className="w-full" asChild>
							<Link href={`/employees/${employee.id}`}>Menu Choice</Link>
						</Button>
						<Button
							variant="destructive"
							size="sm"
							className="w-full"
							onClick={() => handleDelete(employee.id)}
						>
							Delete
						</Button>
					</div>
				</div>
			))}
		</div>
	);
}
