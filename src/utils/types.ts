import { projectTable } from "@/server/db/schema/schema";

export type ProjectTable = typeof projectTable.$inferSelect;
