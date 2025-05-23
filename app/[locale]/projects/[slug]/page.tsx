import BlogPageLayout from "@/components/BlogPage";
import DocumentWithImages from "@/components/DocumentWithImages";
import { getProjects } from "@/lib/contentful/setup";
import { useLocale } from "next-intl";
import { getLocale } from "next-intl/server";

async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getLocale();
  const { slug } = await params;
  const project = (await getProjects(locale, slug))["items"][0];
  return (
    <BlogPageLayout title={project.fields.title} pubDate={project.fields.date}>
      <DocumentWithImages document={project.fields.content} />
    </BlogPageLayout>
  );
}

export default SingleProjectPage;
