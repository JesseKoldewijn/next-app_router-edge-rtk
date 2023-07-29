import {
  mysqlTable,
  serial,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";
import { type InferModel } from "drizzle-orm";

export const projects = mysqlTable(
  "Project",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).default("").notNull(),
    slug: varchar("slug", { length: 256 }).default("").notNull(),
    desc_short: varchar("desc_short", { length: 256 }),
    desc_long: varchar("desc_long", { length: 1250 }),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  },
  (projects) => ({
    nameIndex: uniqueIndex("name_idx").on(projects.title),
  })
);

export type Project = InferModel<typeof projects>; // return type when queried
export type InsertProject = InferModel<typeof projects, "insert">; // insert type
