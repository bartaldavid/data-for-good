import Header from "@/components/Header";
import { notFound } from "next/navigation";
import "../globals.css";
import { hasLocale, NextIntlClientProvider, useMessages } from "next-intl";
import { routing } from "@/i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header />
          <main className="mb-20">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
