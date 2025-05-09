import BlogPageLayout from "@/components/BlogPage";
import DocumentWithImages from "@/components/DocumentWithImages";
import { getTeachingPage } from "@/lib/contentful/setup";
import { useLocale } from "next-intl";
import { getLocale } from "next-intl/server";

async function SingleProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const locale = await getLocale();
  const { slug } = await params;
  const project = (await getTeachingPage(locale, slug))["items"][0];
  return (
    <BlogPageLayout
      title={project.fields.title}
      pubDate={project.fields.publishedAt}
    >
      <DocumentWithImages document={project.fields.content} />
    </BlogPageLayout>
  );
}

export default SingleProjectPage;
