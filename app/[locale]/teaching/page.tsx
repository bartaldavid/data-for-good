import CollectionItem from "@/components/CollectionItem";
import CollectionPage from "@/components/CollectionPage";
import { getTeachingPage } from "@/lib/contentful/setup";
import { ResolvingMetadata } from "next";
import { useLocale } from "next-intl";

export async function generateMetadata(
  { params }: { params: { locale: string } },
  parent: ResolvingMetadata
) {
  const title = params?.locale === "hu" ? "Oktatás" : "Teaching";
  const parentTitle = (await parent).title?.absolute || "";
  return { title: `${title} | ${parentTitle}` };
}

async function ProjectsPage() {
  const locale = useLocale();
  const teachingEntries = await getTeachingPage(locale);

  return (
    <CollectionPage titleId="teaching">
      {teachingEntries.items.map((teachingEntry) => (
        <CollectionItem
          title={teachingEntry.fields.title}
          date={teachingEntry.fields.publishedAt}
          key={teachingEntry.fields.slug}
          href={`/teaching/${teachingEntry.fields.slug}`}
        />
      ))}
    </CollectionPage>
  );
}

export default ProjectsPage;
