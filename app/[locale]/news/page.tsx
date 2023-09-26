import CollectionItem from "@/components/CollectionItem";
import CollectionPage from "@/components/CollectionPage";
import { getNews } from "@/lib/contentful/setup";
import { ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata(
  { params }: { params: { locale: string } },
  parent: ResolvingMetadata
) {
  const title = params?.locale && params.locale === "hu" ? "Hírek" : "News";
  const parentTitle = (await parent).title?.absolute || "";
  return { title: `${title} | ${parentTitle}` };
}

async function NewsCollectionPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { items } = await getNews(locale);
  return (
    <CollectionPage titleId="news">
      {items.map((newsItem) => (
        <CollectionItem
          title={newsItem.fields.title}
          date={newsItem.fields.pubDate}
          href={`news/${newsItem.fields.slug}`}
          key={newsItem.fields.slug}
        />
      ))}
    </CollectionPage>
  );
}

export default NewsCollectionPage;
