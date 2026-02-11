
import type { Metadata } from "next";
import { figtree } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Test Landing Page",
  description: "Developed by Isra Ben T. Degbe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased`}
      >
        <main className="flex flex-col gap-30 gap-20 py-12 md:py-16 lg:py-23 transition-all duration-300 ease-in-out ">
          {children}
        </main>
      </body>
    </html>
  );
}
