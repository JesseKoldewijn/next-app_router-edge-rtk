import { notFound } from "next/navigation";

import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/server/dbHelpers/projects";
import LinkButton from "@/components/ui/link-button";
import ProjectListItem from "@/components/views/projects/projectListItem";

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const projectsData = await getAllProjectSlugs();

  return projectsData.map((project) => {
    return {
      slug: project.slug,
    };
  });
};

type Props = {
  params: { project: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  const projectsData = await getProjectBySlug(params.project);

  return {
    title: projectsData ? projectsData.title : "Project not found",
    description: projectsData !== undefined ? projectsData.desc_short : "",
  };
}

const ProjectsPage = async ({ params }: Props) => {
  const projectsData = await getProjectBySlug(params.project);
  if (projectsData === undefined) notFound();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-gray-300">
      <h1 className="mx-auto text-xl lg:text-2xl">Project</h1>
      {projectsData !== undefined ? (
        <ProjectListItem
          title={projectsData.title}
          desc_long={projectsData.desc_long}
        />
      ) : (
        <>No project was found, please try again later.</>
      )}
      <LinkButton
        name="Go back"
        href={"/projects"}
        className="flex h-12 min-w-[10rem] items-center justify-center rounded-xl bg-brandMain font-semibold shadow-sm shadow-gray-900 hover:cursor-pointer"
      />
    </div>
  );
};
export default ProjectsPage;
