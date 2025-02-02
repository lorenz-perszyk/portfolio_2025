// import { z } from "zod";
// import { createInsertSchema } from "drizzle-zod"
// import { employee } from "@/db/schema";

// export const employee = createInsertSchema(employee, {
// 	firstName: z.string().min(1).max(255),
// 	lastName: z.string().min(1).max(255),
// 	vegetarian: z.boolean(),
// }).omit({ id: true, createdAt: true });

// export type EmployeeType = {
// 	id: number;
// 	firstName: string;
// 	lastName: string;
// 	vegetarian: boolean;
// };
