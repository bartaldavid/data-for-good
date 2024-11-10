import CollectionPage from "@/components/CollectionPage";
import ResearcherCard from "@/components/ResearcherCard";
import { getResearchers, getSiteDetails } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
  parent: ResolvingMetadata
) {
  const { locale } = await params;

  const title = locale === "hu" ? "Rólunk" : "Team";
  const parentTitle = (await parent).title?.absolute || "";
  return { title: `${title} | ${parentTitle}` };
}

async function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const researchers = await getResearchers(locale);
  const {
    fields: { longDescription },
  } = await getSiteDetails(locale);
  return (
    <CollectionPage titleId="team">
      <div className="prose max-w-prose">
        {longDescription && documentToReactComponents(longDescription)}
      </div>
      <h1 className="text-2xl mt-6 font-medium">Kutatók</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-prose">
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
