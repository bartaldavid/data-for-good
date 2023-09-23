import FormattedDate from "./FormattedDate";

function BlogPageLayout({
  title,
  pubDate,
  children,
}: {
  title: string;
  pubDate?:
    | `${number}-${number}-${number}T${number}:${number}:${number}Z`
    | undefined;
  children?: React.ReactNode;
}) {
  const date = pubDate ? new Date(pubDate) : null;
  return (
    <article className="max-w-prose p-6 bg-white rounded-lg h-fit mt-10 mx-auto">
      <div>
        {date && (
          <div className="text-slate-600">
            <FormattedDate date={date} />
          </div>
        )}
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
        <hr />
      </div>
      <div className="prose mt-4">{children}</div>
    </article>
  );
}

export default BlogPageLayout;
