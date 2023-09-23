import { getSiteDetails } from "@/lib/contentful/setup";
import { useLocale, useTranslations } from "next-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Locale } from "@/constants";

export default async function Index({
  params,
}: {
  params: { locale: string };
}) {
  const data = await getSiteDetails(params.locale);

  return (
    <>
      <article className="max-w-prose mx-auto text-center mt-14">
        <h1 className="text-5xl font-bold mb-4">Data for Good</h1>
        {documentToReactComponents(data.fields.shortDescription)}
      </article>
    </>
  );
}
