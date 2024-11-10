import CollectionItem from "@/components/CollectionItem";
import CollectionPage from "@/components/CollectionPage";
import { getProjects } from "@/lib/contentful/setup";
import { ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
  parent: ResolvingMetadata
) {
  const { locale } = await params;
  const title = locale === "hu" ? "Projektek" : "Projects";
  const parentTitle = (await parent).title?.absolute || "";
  return { title: `${title} | ${parentTitle}` };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const projects = await getProjects(locale);

  return (
    <CollectionPage titleId="projects">
      {projects.items.map((project) => (
        <CollectionItem
          title={project.fields.title}
          date={project.fields.date}
          key={project.fields.slug}
          href={`/projects/${project.fields.slug}`}
        />
      ))}
    </CollectionPage>
  );
}
