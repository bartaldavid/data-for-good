import CollectionItem from "@/components/CollectionItem";
import CollectionPage from "@/components/CollectionPage";
import { getNews } from "@/lib/contentful/setup";

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
