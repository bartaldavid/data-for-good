import { Link } from "@/i18n";
import FormattedDate from "./FormattedDate";

function CollectionItem({
  title,
  date,
  href,
}: {
  title: string;
  date:
    | `${number}-${number}-${number}T${number}:${number}:${number}Z`
    | undefined;
  href: string;
}) {
  return (
    <Link
      className="bg-white rounded-lg p-4 shadow-sm w-full md:w-1/3 hover:shadow-md"
      href={href}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {date && (
        <FormattedDate
          date={new Date(date)}
          className="text-sm font-light text-slate-600"
        />
      )}
    </Link>
  );
}

export default CollectionItem;
