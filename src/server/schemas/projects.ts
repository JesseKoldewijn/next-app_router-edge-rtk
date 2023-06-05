import { mysqlTable, uniqueIndex, varchar } from "drizzle-orm/mysql-core";
import { type InferModel } from "drizzle-orm";

export const projects = mysqlTable(
  "Project",
  {
    id: varchar("id", { length: 256 }).primaryKey(),
    title: varchar("title", { length: 256 }),
    desc_short: varchar("desc_short", { length: 256 }),
    desc_long: varchar("desc_long", { length: 256 }),
  },
  (projects) => ({
    nameIndex: uniqueIndex("name_idx").on(projects.title),
  })
);

export type tProject = InferModel<typeof projects>; // return type when queried
export type tInsertProject = InferModel<typeof projects, "insert">; // insert type
