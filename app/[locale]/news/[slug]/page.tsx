import BlogPageLayout from "@/components/BlogPage";
import DocumentWithImages from "@/components/DocumentWithImages";
import { getNews } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const page = (await getNews(locale, slug))["items"][0];
  return (
    <BlogPageLayout
      title={page.fields.title}
      pubDate={page.fields.publishedAt}
      subtitle={
        page.fields.subtitle && documentToReactComponents(page.fields.subtitle)
      }
    >
      <DocumentWithImages document={page.fields.content} />
    </BlogPageLayout>
  );
}

export default NewsPage;
