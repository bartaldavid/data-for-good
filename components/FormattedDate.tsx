import { useLocale } from "next-intl";

function FormattedDate({
  date,
  className,
}: {
  date: Date;
  className?: string;
}) {
  const locale = useLocale();
  return (
    <time dateTime={date.toISOString()} className={className}>
      {date.toLocaleDateString(locale, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </time>
  );
}

export default FormattedDate;
