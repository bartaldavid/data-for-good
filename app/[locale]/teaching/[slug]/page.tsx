import BlogPageLayout from "@/components/BlogPage";
import DocumentWithImages from "@/components/DocumentWithImages";
import { getTeachingPage } from "@/lib/contentful/setup";
import { useLocale } from "next-intl";

async function SingleProjectPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const project = (await getTeachingPage(params.locale, params.slug))[
    "items"
  ][0];
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
