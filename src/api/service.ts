import { db } from "@/db"
import { employee } from "@/db/schema"
import { eq } from "drizzle-orm"

export const XanaduService = {

  getEmployee(employeeId: number) {
    return db.query.employee.findFirst({
			where: eq(employee.id, employeeId),
		});
  }
}
