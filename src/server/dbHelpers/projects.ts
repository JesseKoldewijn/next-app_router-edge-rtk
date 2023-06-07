import { db } from "../db";
import { projects, type tProject } from "../schemas/projects";

export const runtime = "edge";

export const getAllProjects = async () => {
  return (await db.select().from(projects)) as tProject[];
};
