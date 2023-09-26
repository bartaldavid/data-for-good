import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Data for Good'
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={"en"}>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
