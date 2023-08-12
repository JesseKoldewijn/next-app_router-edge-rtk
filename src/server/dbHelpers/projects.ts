import { desc, sql } from "drizzle-orm";

import { db } from "../db";
import { projects, type Project } from "../schemas/projects";

export const getAllProjects = async (maxCount?: number) => {
  return (await db
    .select()
    .from(projects)
    .orderBy(desc(projects.createdAt))
    .limit(Number(maxCount ?? 0))) as Project[];
};

export const getAllProjectNames = async (maxCount?: number) => {
  return await db
    .select({
      title: projects.title,
    })
    .from(projects)
    .orderBy(desc(projects.createdAt))
    .limit(Number(maxCount ?? 0));
};

export const getAllProjectSlugs = async (maxCount?: number) => {
  return await db
    .select({
      slug: projects.slug,
    })
    .from(projects)
    .orderBy(desc(projects.createdAt))
    .limit(Number(maxCount ?? 0));
};

export const getProjectBySlug = async (slug: string) => {
  const result = await db
    .select()
    .from(projects)
    .where(sql`${projects.slug} = ${slug}`);

  return result[0];
};
