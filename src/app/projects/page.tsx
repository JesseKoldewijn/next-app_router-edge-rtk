import { getAllProjects } from "@/server/dbHelpers/projects";
import { type Project } from "@/server/schemas/projects";
import { slugify } from "@/utils/string-slug";
import { type Metadata } from "next/types";
import Link from "next/link";
import LinkButton from "@/components/ui/link-button";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "On this page you'll find a description of multiple projects that I've build over the past two to three years.",
};

const ProjectsPage = async () => {
  const projectsData: Project[] = await getAllProjects();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-gray-300">
      <h1 className="mx-auto text-xl lg:text-2xl">Projects</h1>
      {projectsData.length > 0 ? (
        <div className="text-300 flex max-w-md flex-wrap gap-4">
          {projectsData.flatMap((project: Project) => (
            <Link
              key={project.id}
              href={`projects/${slugify(String(project.title))}`}
              className="flex min-h-[7rem] min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl bg-brandMain px-6 py-4 font-semibold shadow-sm shadow-gray-900 hover:shadow-xl"
            >
              <h2>{project.title}</h2>
              <p className="text-center">{project.desc_short}</p>
            </Link>
          ))}
        </div>
      ) : (
        <>No projects were found, please try again later.</>
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
