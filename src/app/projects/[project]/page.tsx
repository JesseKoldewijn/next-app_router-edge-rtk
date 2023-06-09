import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/server/dbHelpers/projects";
import { type tProject } from "@/server/schemas/projects";
import { type Metadata } from "next";

export const runtime = "edge";

type Props = {
  params: { project: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectsData: tProject | undefined = await getProjectBySlug(
    params.project
  );

  return {
    title:
      projectsData !== undefined ? projectsData.title : "Project not found",
    description: projectsData !== undefined ? projectsData.desc_short : "",
  };
}

const ProjectsPage = async (props: Props) => {
  const projectsData: tProject | undefined = await getProjectBySlug(
    props.params.project
  );

  if (projectsData == undefined) {
    notFound();
    return false;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-gray-200">
      <h1 className="mx-auto text-xl text-gray-200 lg:text-2xl">Project</h1>
      {projectsData ? (
        <div className="text-300 flex max-w-md flex-wrap gap-4">
          <div className="flex min-h-[7rem] min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl bg-purple-800 px-6 py-3 font-semibold shadow-sm shadow-gray-900">
            <h2 className="mt-2">{projectsData.title}</h2>
            <p className="text-center font-light">{projectsData.desc_long}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Link href={"/"}>Go back</Link>
    </div>
  );
};
export default ProjectsPage;
