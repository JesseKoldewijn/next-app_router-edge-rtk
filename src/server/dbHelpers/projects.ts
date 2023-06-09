import { slugify } from "@/utils/string-slug";
import { db } from "../db";
import { projects, type tProject } from "../schemas/projects";

export const runtime = "edge";

export const getAllProjects = async () => {
  return (await db.select().from(projects)) as tProject[];
};

export const getProjectBySlug = async (slug: string) => {
  const allProjects = await getAllProjects();
  const selectedProject = allProjects.find((obj) => {
    if (obj.title == null) return;
    if (slugify(obj.title) == slug) {
      return obj;
    }
  });

  return selectedProject;
};
