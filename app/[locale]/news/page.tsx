import CollectionItem from "@/components/CollectionItem";
import CollectionPage from "@/components/CollectionPage";
import { getNews } from "@/lib/contentful/setup";
import { ResolvingMetadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata({}, parent: ResolvingMetadata) {
  const locale = await getLocale();
  const title = locale === "hu" ? "Hírek" : "News";
  const parentTitle = (await parent).title?.absolute || "";
  return { title: `${title} | ${parentTitle}` };
}

async function NewsCollectionPage() {
  const locale = await getLocale();
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
