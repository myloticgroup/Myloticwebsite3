import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://myloticgroup.com"),
  title: {
    default: "Mylotic Group | Enterprise Technology, AI Engineering & Specialized Talent",
    template: "%s | Mylotic Group",
  },
  description:
    "Mylotic Group delivers production AI architectures, distributed software engineering, cloud modernization, and specialized technical talent pods for forward-thinking enterprises.",
  keywords: [
    "Enterprise AI",
    "Applied Machine Learning",
    "Software Engineering",
    "Cloud Transformation",
    "Technical Staffing",
    "Managed IT Services",
    "Mylotic Group",
    "Technology Consulting",
  ],
  authors: [{ name: "Mylotic Group" }],
  creator: "Mylotic Group",
  publisher: "Mylotic Group Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myloticgroup.com",
    siteName: "Mylotic Group",
    title: "Mylotic Group | Enterprise Technology, AI Engineering & Specialized Talent",
    description:
      "Architecting resilient systems, deploying production AI, and scaling specialized engineering capability for forward-thinking enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mylotic Group | Enterprise Technology & AI Engineering",
    description:
      "Enterprise AI architectures, distributed cloud engineering, and specialized technical talent pods.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen selection:bg-slate-900 selection:text-white">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
