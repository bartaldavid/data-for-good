import { notFound } from "next/navigation";

export default function MapPage({
  params,
}: {
  params: { locale: string; slug: string; subPageId: string };
}) {
  if (
    params.subPageId !== "2018MEJ" &&
    !["eletvegi-ellatas", "end-of-lifecare"].includes(params.slug)
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
