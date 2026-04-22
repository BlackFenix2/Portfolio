import { createClient } from "@/lib/prismicio";
import type { ProjectPage } from "@/lib/prismicio/types";
import ProjectView from "./ProjectView";

const PROJECT_PAGE = "project-page";

export async function generateStaticParams() {
  const client = createClient();
  const documents = await client.getAllByType(PROJECT_PAGE);
  return documents.map((doc) => ({ uid: doc.uid }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID<ProjectPage>(PROJECT_PAGE, uid);

  // Sort feature icons by alt text
  if (page.data.features.length > 0) {
    page.data.features = page.data.features.sort((a, b) =>
      (a.icon.alt || "").localeCompare(b.icon.alt || ""),
    );
  }

  return <ProjectView page={page} />;
}
