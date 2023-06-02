import { db, projects, type tProject } from "../db";

export const runtime = "edge";

export const getAllProjects = async () => {
  "use server";
  return (await db.select().from(projects)) as tProject[];
};
