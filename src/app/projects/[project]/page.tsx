import { notFound } from "next/navigation";

import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/server/dbHelpers/projects";
import LinkButton from "@/components/ui/link-button";

export const runtime = "edge";
export const revalidate = 60 * 60 * 24; // 24 hours

export const generateStaticParams = async () => {
  const projectsData = await getAllProjectSlugs();

  return projectsData.map((project) => {
    return {
      slug: project.slug,
    };
  });
};

export async function generateMetadata({ params }: Props) {
  const projectsData = await getProjectBySlug(params.project);

  if (projectsData !== undefined) {
    return {
      title: projectsData.title,
      description: projectsData !== undefined ? projectsData.desc_short : "",
    };
  }
}

type Props = {
  params: { project: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProjectsPage = async (props: Props) => {
  const projectsData = await getProjectBySlug(props.params.project);
  if (projectsData === undefined) notFound();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-gray-300">
      <h1 className="mx-auto text-xl lg:text-2xl">Project</h1>
      {projectsData !== undefined ? (
        <div className="text-300 flex max-w-md flex-wrap gap-4">
          <div className="flex min-h-[7rem] min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl bg-brandMain px-6 py-4 font-semibold shadow-sm shadow-gray-900">
            <h2>{projectsData.title}</h2>
            <p className="text-center font-light">{projectsData.desc_long}</p>
          </div>
        </div>
      ) : (
        <>No project was found, please try again later.</>
      )}
      <LinkButton
        name="Go back"
        href={"/"}
        className="flex h-12 min-w-[10rem] items-center justify-center rounded-xl bg-brandMain font-semibold shadow-sm shadow-gray-900 hover:cursor-pointer"
      />
    </div>
  );
};
export default ProjectsPage;
