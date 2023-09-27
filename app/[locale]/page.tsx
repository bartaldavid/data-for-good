import { getSiteDetails } from "@/lib/contentful/setup";
import { useLocale, useTranslations } from "next-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Locale } from "@/constants";
import Image from "next/image";
import Logo from "@/public/logo/08.svg";
export default async function Index({
  params,
}: {
  params: { locale: string };
}) {
  const data = await getSiteDetails(params.locale);

  return (
    <>
      <article className="max-w-prose mx-auto text-center mt-14">
        <Image src={Logo} alt="logo" />
        {data.fields.shortDescription &&
          documentToReactComponents(data.fields.shortDescription)}
      </article>
    </>
  );
}
