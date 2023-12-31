import { getSiteDetails } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getTranslations } from "next-intl/server";

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("Nav");
  const siteData = await getSiteDetails(locale);

  return (
    <article className="max-w-prose bg-white mx-auto mt-10">
      <h1 className="text-3xl font-semibold">{t("contact")}</h1>
      {siteData.fields.contact && (
        <div className="prose">
          {documentToReactComponents(siteData.fields.contact)}
        </div>
      )}
    </article>
  );
}
