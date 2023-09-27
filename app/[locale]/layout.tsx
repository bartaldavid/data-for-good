import Header from "@/components/Header";
import { notFound } from "next/navigation";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

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

  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
        </NextIntlClientProvider>
        <main className="mb-20">{children}</main>
      </body>
    </html>
  );
}
