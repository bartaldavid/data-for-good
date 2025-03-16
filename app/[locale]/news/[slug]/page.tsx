import BlogPageLayout from "@/components/BlogPage";
import DocumentWithImages from "@/components/DocumentWithImages";
import { getNews } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getLocale } from "next-intl/server";

async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
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
