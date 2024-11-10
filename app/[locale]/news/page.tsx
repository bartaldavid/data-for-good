import CollectionItem from "@/components/CollectionItem";
import CollectionPage from "@/components/CollectionPage";
import { getNews } from "@/lib/contentful/setup";
import { ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
  parent: ResolvingMetadata
) {
  const locale = (await params).locale;

  const title = locale === "hu" ? "Hírek" : "News";
  const parentTitle = (await parent).title?.absolute || "";
  return { title: `${title} | ${parentTitle}` };
}

async function NewsCollectionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { items } = await getNews(locale);
  return (
    <CollectionPage titleId="news">
      {items.map((newsItem) => (
        <CollectionItem
          title={newsItem.fields.title}
          date={newsItem.fields.publishedAt}
          href={`news/${newsItem.fields.slug}`}
          key={newsItem.fields.slug}
        />
      ))}
    </CollectionPage>
  );
}

export default NewsCollectionPage;
