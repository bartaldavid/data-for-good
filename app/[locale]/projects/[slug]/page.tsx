import BlogPageLayout from "@/components/BlogPage";
import DocumentWithImages from "@/components/DocumentWithImages";
import { getProjects } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useLocale } from "next-intl";

async function SingleProjectPage({ params }: { params: { slug: string } }) {
  const locale = useLocale();
  const project = (await getProjects(locale, params.slug))["items"][0];
  return (
    <BlogPageLayout title={project.fields.title} pubDate={project.fields.date}>
      <DocumentWithImages document={project.fields.content} />
    </BlogPageLayout>
  );
}

export default SingleProjectPage;
