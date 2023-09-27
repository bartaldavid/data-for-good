import CollectionItem from "@/components/CollectionItem";
import CollectionPage from "@/components/CollectionPage";
import { getProjects } from "@/lib/contentful/setup";
import { ResolvingMetadata } from "next";
import { useLocale } from "next-intl";
import LinkWithRef from "next-intl/link";

export async function generateMetadata(
  { params }: { params: { locale: string } },
  parent: ResolvingMetadata
) {
  const title = params?.locale === "hu" ? "Projektek" : "Projects";
  const parentTitle = (await parent).title?.absolute || "";
  return { title: `${title} | ${parentTitle}` };
}

async function ProjectsPage() {
  const locale = useLocale();
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

export default ProjectsPage;
