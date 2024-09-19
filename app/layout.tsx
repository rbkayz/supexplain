import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PeriskopeToast from "./_components/toast";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const supafont = localFont({
  src: "./_fonts/CustomFont-Book.woff2",
  variable: "--font-supafont",
  display: "swap",
});

const SUPEXPLANER_META_TAGS = {
  title: `SupExplain`,
  description: `SupExplain is an AI Postgres Explainer that helps you visualize your queries and optimize performance with AI`,
  og_image: `https://${process.env.VERCEL_BRANCH_URL}/og.png`,
  theme_color: `#15803D`,
};

export const metadata: Metadata = {
  title: SUPEXPLANER_META_TAGS.title,
  description: SUPEXPLANER_META_TAGS.description,
  openGraph: {
    title: `${SUPEXPLANER_META_TAGS.title}`,
    description: `${SUPEXPLANER_META_TAGS.description}`,
    url: "https://" + process.env.VERCEL_BRANCH_URL,
    siteName: SUPEXPLANER_META_TAGS.title,
    images: [
      {
        url: `${SUPEXPLANER_META_TAGS.og_image}`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SUPEXPLANER_META_TAGS.title}`,
    description: `${SUPEXPLANER_META_TAGS.description}`,
    creator: "@rbkayz",
    images: [`${SUPEXPLANER_META_TAGS.og_image}`],
  },
};

export const viewport: Viewport = {
  themeColor: SUPEXPLANER_META_TAGS.theme_color,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${supafont.variable} flex flex-col w-full h-full items-center justify-between font-supa`}
      >
        <PeriskopeToast />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
