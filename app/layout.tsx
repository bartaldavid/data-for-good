import { Metadata } from "next";
import SVGFavicon from "./favicon.svg";
import PNGFavicon from "./favicon.png";

export const metadata: Metadata = {
  title: "Data for Good",
  icons: [
    { url: SVGFavicon.src, rel: "icon" },
    { url: PNGFavicon.src, rel: "icon" },
  ],
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={"hu"}>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
