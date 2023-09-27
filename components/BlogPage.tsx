import React from "react";
import FormattedDate from "./FormattedDate";

function BlogPageLayout({
  title,
  pubDate,
  children,
  subtitle,
}: {
  title: string;
  pubDate?:
    | `${number}-${number}-${number}T${number}:${number}:${number}Z`
    | undefined;
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
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
        {subtitle && (
          <div className="text-slate-500 text-sm my-2">{subtitle}</div>
        )}
        <hr />
      </div>
      <div className="prose mt-4">{children}</div>
    </article>
  );
}

export default BlogPageLayout;
