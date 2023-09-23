import Header from "@/components/Header";
import { notFound } from "next/navigation";
import "../globals.css";

const locales = ["en", "hu"];

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={"en"}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
