import { getAllProjects } from "@/server/dbHelpers/projects";
import { type Project } from "@/server/schemas/projects";
import { slugify } from "@/utils/string-slug";
import { type Metadata } from "next/types";
import LinkButton from "@/components/ui/link-button";
import ProjectListItem from "@/components/views/projects/projectListItem";

export const revalidate = 86400;

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
            <LinkButton
              key={project.id}
              href={`projects/${slugify(String(project.title))}`}
            >
              <ProjectListItem
                title={project.title}
                desc_short={project.desc_short}
              />
            </LinkButton>
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
