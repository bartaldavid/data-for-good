import Header from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import Link from "next/link";

function NotFound() {
  // const locale = useLocale();
  return (
    <main>
      <p>Something went wrong...</p>
      <Link href="/">Go back to home page</Link>
    </main>
  );
}

export default NotFound;
