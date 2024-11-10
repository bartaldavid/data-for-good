import Header from "@/components/Header";
import { notFound } from "next/navigation";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { LOCALES } from "@/constants";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Validate that the incoming `locale` parameter is valid

  const locale = (await params).locale;
  if (!routing.locales.includes(locale as any) && locale !== "favicon.ico")
    notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
        </NextIntlClientProvider>
        <main className="mb-20">{children}</main>
      </body>
    </html>
  );
}
