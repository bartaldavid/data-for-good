import { getSiteDetails } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useLocale, useTranslations } from "next-intl";

export default async function ContactPage() {
  const locale = useLocale();
  const siteData = await getSiteDetails(locale);

  return (
    <article className="max-w-prose bg-white mx-auto mt-10">
      <Title />
      {siteData.fields.contact && (
        <div className="prose">
          {documentToReactComponents(siteData.fields.contact)}
        </div>
      )}
    </article>
  );
}

function Title() {
  const t = useTranslations("Nav");
  return <h1 className="text-3xl font-semibold">{t("contact")}</h1>;
}
