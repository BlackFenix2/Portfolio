import { createClient } from "@/lib/prismicio";
import { ProjectListPage, LinkedProject } from "@/lib/prismicio/types";
import ProjectsView from "./ProjectsView";

export default async function Page() {
  const client = createClient();

  const page = await client.getSingle<ProjectListPage>("projects", {
    fetchLinks: [
      "project-page.title",
      "project-page.image",
      "project-page.description",
      "project-page.url",
      "project-page.source",
    ],
  });

  return (
    <ProjectsView
      title={page.data.title}
      projectList={page.data.project_list as { project: LinkedProject }[]}
    />
  );
}
