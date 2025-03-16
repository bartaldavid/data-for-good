import CollectionItem from "@/components/CollectionItem";
import CollectionPage from "@/components/CollectionPage";
import { getProjects } from "@/lib/contentful/setup";
import { ResolvingMetadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata({}, parent: ResolvingMetadata) {
  const locale = await getLocale();
  const title = locale === "hu" ? "Projektek" : "Projects";
  const parentTitle = (await parent).title?.absolute || "";
  return { title: `${title} | ${parentTitle}` };
}

export default async function ProjectsPage() {
  const locale = await getLocale();
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
