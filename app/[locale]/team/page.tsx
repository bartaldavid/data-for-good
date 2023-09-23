import CollectionPage from "@/components/CollectionPage";
import ProfilePicture from "@/components/ProfilePicture";
import { getResearchers } from "@/lib/contentful/setup";
import { useLocale, useTranslations } from "next-intl";
import LinkWithRef from "next-intl/link";

async function TeamPage() {
  const locale = useLocale();
  const researchers = await getResearchers(locale);
  return (
    <CollectionPage titleId="team">
      {researchers.items.map((researcher) => (
        <LinkWithRef
          className="bg-white rounded-lg p-4 shadow-sm w-full md:w-1/3 hover:shadow-md flex gap-2 items-center "
          href={`/team/${researcher.fields.slug}`}
          key={researcher.fields.slug}
        >
          <ProfilePicture
            imageId={researcher.fields.profilePicture.sys.id}
            name={researcher.fields.name}
            size={70}
          />
          <h2 className="text-xl font-semibold mb-2">
            {researcher.fields.name}
          </h2>
        </LinkWithRef>
      ))}
    </CollectionPage>
  );
}

export default TeamPage;
