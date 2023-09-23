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
    <main className="flex justify-center bg-gray-100 h-screen">
      <article className="max-w-prose p-6 bg-white shadow-md rounded-lg h-fit mt-10 min-w-[30rem]">
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
    </main>
  );
}

export default BlogPageLayout;
