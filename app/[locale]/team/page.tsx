import CollectionPage from "@/components/CollectionPage";
import ProfilePicture from "@/components/ProfilePicture";
import { getResearchers, getSiteDetails } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useLocale, useTranslations } from "next-intl";
import LinkWithRef from "next-intl/link";

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
      {researchers.items.map((researcher) => (
        <LinkWithRef
          className="bg-white rounded-lg p-4 shadow-sm w-full md:w-1/3 hover:shadow-md flex gap-2 items-center "
          href={`/team/${researcher.fields.slug}`}
          key={researcher.fields.slug}
        >
          {researcher.fields.profilePicture && (
            <ProfilePicture
              imageId={researcher.fields.profilePicture.sys.id}
              name={researcher.fields.name}
              size={70}
            />
          )}
          <h2 className="text-xl font-semibold mb-2">
            {researcher.fields.name}
          </h2>
        </LinkWithRef>
      ))}
    </CollectionPage>
  );
}

export default TeamPage;
