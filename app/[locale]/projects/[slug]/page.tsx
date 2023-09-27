import BlogPageLayout from "@/components/BlogPage";
import { getProjects } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useLocale } from "next-intl";

async function SingleProjectPage({ params }: { params: { slug: string } }) {
  const locale = useLocale();
  const project = (await getProjects(locale, params.slug))["items"][0];
  return (
    <BlogPageLayout title={project.fields.title} pubDate={project.fields.date}>
      {project.fields.content &&
        documentToReactComponents(project.fields.content)}
    </BlogPageLayout>
  );
}

export default SingleProjectPage;
