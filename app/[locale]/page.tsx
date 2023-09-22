import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getSiteDetails } from "@/lib/contentful/setup";
import { useLocale, useTranslations } from "next-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Locale } from "@/constants";

export default async function Index() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const data = await getSiteDetails(locale as Locale);

  return (
    <>
      <h1>{t("home")}</h1>
      <div>{documentToReactComponents(data.fields.shortDescription)}</div>
    </>
  );
}
