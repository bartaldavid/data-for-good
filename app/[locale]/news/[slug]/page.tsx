import BlogPageLayout from "@/components/BlogPage";
import { getNews } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function NewsPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const page = (await getNews(locale, slug))["items"][0];
  return (
    <BlogPageLayout title={page.fields.title} pubDate={page.fields.pubDate}>
      {page.fields.content && documentToReactComponents(page.fields.content)}
    </BlogPageLayout>
  );
}

export default NewsPage;
