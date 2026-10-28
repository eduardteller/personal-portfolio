import { enabledLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export function generateStaticParams() {
  return enabledLocales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);

  return {
    title: "Eduard Teller",
    description: t.meta.description,
    keywords: [
      "web",
      "developer",
      "mobile",
      "fullstack",
      "react",
      "nextjs",
      "typescript",
      "tailwindcss",
      "nodejs",
      "express",
      "mongodb",
      "graphql",
      "prisma",
      "react native",
      "expo",
      "frontend",
      "backend",
    ],
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
