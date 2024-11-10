import DocumentWithImages from "@/components/DocumentWithImages";
import ProfilePicture from "@/components/ProfilePicture";
import { getResearchers } from "@/lib/contentful/setup";

export default async function ResearcherPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const researcher = (await getResearchers(locale, slug))["items"][0];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mt-8">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <ProfilePicture
            imageId={researcher.fields.profilePicture?.sys.id}
            name={researcher.fields.name}
          />
        </div>
        <h1 className="text-3xl font-bold mt-4">{researcher.fields.name}</h1>
        <p className="text-gray-500 text-lg mt-2">
          {researcher.fields.shortDescription}
        </p>
        {/* <div className="mt-4">
          <a
            href={`https://twitter.com/${researcher.fields.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href={`https://github.com/${researcher.fields.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300 ml-4"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div> */}
        <div className="mt-8 max-w-prose">
          <DocumentWithImages document={researcher.fields.bio} />
        </div>
      </div>
    </div>
  );
}
