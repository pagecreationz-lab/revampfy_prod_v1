import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import { FloatingContact } from "@/components/FloatingContact";
import { CookieConsent } from "@/components/CookieConsent";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeModeScript } from "@/components/ThemeModeScript";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revampfy | Refurbished Electronics",
  description:
    "Enterprise-grade refurbished laptops, desktops, and accessories with warranty and fast delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeClass = "theme-dark";

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <body className={themeClass} suppressHydrationWarning>
        <ThemeModeScript defaultMode="dark" />
        {children}
        <SiteFooter />
        <CookieConsent />
        <FloatingContact />
      </body>
    </html>
  );
}
