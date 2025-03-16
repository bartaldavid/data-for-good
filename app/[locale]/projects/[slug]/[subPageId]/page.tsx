import { notFound } from "next/navigation";

export default async function MapPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string; subPageId: string }>;
}) {
  const { slug, subPageId } = await params;
  if (
    subPageId !== "2018MEJ" ||
    !["eletvegi-ellatas", "end-of-lifecare"].includes(slug)
  ) {
    notFound();
  }
  return (
    <article className="w-full h-screen">
      <iframe
        src="https://dori08.shinyapps.io/hospice_mo_2_2_app/"
        className="h-full w-full"
        loading="lazy"
      ></iframe>
    </article>
  );
}
