import {
  mysqlTable,
  serial,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";
import { type InferModel } from "drizzle-orm";

export const technologies = mysqlTable(
  "Technologies",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).default("").notNull(),
    slug: varchar("slug", { length: 256 }).default("").notNull(),
    link: varchar("link", { length: 256 }).default("").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  },
  (technologies) => ({
    nameIndex: uniqueIndex("name_idx").on(technologies.name),
  })
);

export type Technology = InferModel<typeof technologies>; // return type when queried
export type InsertTechnology = InferModel<typeof technologies, "insert">; // insert type

export type TechnologyName = {
  name: string;
}[];

export type TechnologyNames = TechnologyName[];
