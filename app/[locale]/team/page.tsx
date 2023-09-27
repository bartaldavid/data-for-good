import CollectionPage from "@/components/CollectionPage";
import ProfilePicture from "@/components/ProfilePicture";
import ResearcherCard from "@/components/ResearcherCard";
import { getResearchers, getSiteDetails } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ResolvingMetadata } from "next";
import { useLocale } from "next-intl";
import LinkWithRef from "next-intl/link";

export async function generateMetadata(
  { params }: { params: { locale: string } },
  parent: ResolvingMetadata
) {
  const title = params?.locale === "hu" ? "Rólunk" : "Team";
  const parentTitle = (await parent).title?.absolute || "";
  return { title: `${title} | ${parentTitle}` };
}

async function TeamPage() {
  const locale = useLocale();
  const researchers = await getResearchers(locale);
  const {
    fields: { longDescription },
  } = await getSiteDetails(locale);
  return (
    <CollectionPage titleId="team">
      <div className="prose max-w-prose">
        {longDescription && documentToReactComponents(longDescription)}
      </div>
      <h1 className="text-2xl">Kutatók</h1>
      <div className="flex flex-row flex-wrap gap-2 max-w-2xl">
        {researchers.items.map((researcher) => (
          <ResearcherCard
            href={`/team/${researcher.fields.slug}`}
            name={researcher.fields.name}
            imageId={researcher.fields.profilePicture?.sys.id}
            key={researcher.fields.slug}
          />
        ))}
      </div>
    </CollectionPage>
  );
}

export default TeamPage;
