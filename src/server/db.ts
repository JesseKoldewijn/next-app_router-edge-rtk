import { mysqlTable, uniqueIndex, varchar } from "drizzle-orm/mysql-core";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { type InferModel } from "drizzle-orm";

const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});

export const db = drizzle(connection);

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
export type tInsetProject = InferModel<typeof projects, "insert">; // insert type
