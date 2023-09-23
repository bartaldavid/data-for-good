import CollectionPage from "@/components/CollectionPage";
import { getProjects } from "@/lib/contentful/setup";
import { useLocale } from "next-intl";
import LinkWithRef from "next-intl/link";

async function ProjectsPage() {
  const locale = useLocale();
  const projects = await getProjects(locale);

  return (
    <CollectionPage titleId="projects">
      {projects.items.map((project) => (
        <LinkWithRef
          className="bg-white rounded-lg p-4 shadow-sm w-full md:w-1/3 hover:shadow-md"
          href={`/projects/${project.fields.slug}`}
          key={project.fields.slug}
        >
          <h2 className="text-xl font-semibold mb-2">{project.fields.title}</h2>
        </LinkWithRef>
      ))}
    </CollectionPage>
  );
}

export default ProjectsPage;
