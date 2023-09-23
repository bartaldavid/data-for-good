import { type MessageKeys, useTranslations } from "next-intl";

function CollectionPage({
  children,
  titleId,
}: {
  titleId: MessageKeys<
    {
      home: string;
      news: string;
      projects: string;
      teaching: string;
      team: string;
      contact: string;
    },
    "home" | "news" | "projects" | "teaching" | "team" | "contact"
  >;
  children?: React.ReactNode;
}) {
  const t = useTranslations("Nav");
  return (
    <main>
      <div className="flex gap-4 flex-col items-center">
        <h1 className="text-4xl mt-10">{t(titleId)}</h1>
        {children}
      </div>
    </main>
  );
}

export default CollectionPage;
