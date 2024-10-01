import { text, pgTable, uuid } from "drizzle-orm/pg-core";

export const userSchema = pgTable("user", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  cognitoEmail: text("cognitoEmail").notNull().unique(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  company: text("company"),
  contactEmail: text("contactEmail"),
  cellPhone: text("cellPhone"),
});

export type SelectUser = typeof userSchema.$inferSelect;
export type InsertUser = typeof userSchema.$inferInsert;