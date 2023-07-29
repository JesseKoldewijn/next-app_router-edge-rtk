import { slugify } from "@/utils/string-slug";
import { db } from "../db";
import { type Technology, technologies } from "../schemas/technologies";
import { asc } from "drizzle-orm";

export const runtime = "edge";

export const getAllTechnologies = async () => {
  return (await db
    .select()
    .from(technologies)
    .orderBy(asc(technologies.createdAt))) as Technology[];
};

export const getTechnologyByName = async (slug: string) => {
  const allTechnologies = await getAllTechnologies();
  const selectedProject = allTechnologies.find((obj) => {
    if (obj.name == null) return;
    if (slugify(obj.name) == slug) {
      return obj;
    }
  });

  return selectedProject;
};
