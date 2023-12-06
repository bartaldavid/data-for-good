import { getSiteDetails } from "@/lib/contentful/setup";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Logo from "@/public/logo/08-crop.svg";
import { Link } from "@/i18n";
import { getTranslations } from "next-intl/server";

export default async function Index({
  params,
}: {
  params: { locale: string };
}) {
  const data = await getSiteDetails(params.locale);
  const t = await getTranslations("Index");

  return (
    <>
      <article className="max-w-prose mx-auto text-center mt-14 flex items-center flex-col gap-5">
        <Image src={Logo} alt="logo" priority height={120} />
        <div className="prose [text-wrap:balance]">
          {data.fields.shortDescription &&
            documentToReactComponents(data.fields.shortDescription)}
        </div>
        <Link href="/team" className="text-blue-500 hover:text-blue-600">
          {t("goToLongerDescription")}
        </Link>
      </article>
    </>
  );
}
