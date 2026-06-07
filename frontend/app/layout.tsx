import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Rubik, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import MobileBottomNav from "@/components/layouts/MobileBottomNav";
import ChatContainer from "@/components/chat/ChatContainer";
import { BRAND_NAME, SITE_URL } from "@/constants/brand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Choose the weights you need
  style: ["normal", "italic"], // Optional: include italic variants
  display: "swap", // Prevents layout shift
  variable: "--font-poppins", // CSS variable for flexible usage
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BRAND_NAME,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Ella Man Real Estate — your trusted partner for luxury homes and premium properties in Addis Ababa, Ethiopia.",
  openGraph: {
    siteName: BRAND_NAME,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#581c87",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col overflow-x-hidden antialiased">
        <Header />
        <main className="min-h-screen mobile-main-pad">{children}</main>
        <Footer />
        <MobileBottomNav />
        <ChatContainer />
      </body>
    </html>
  );
}
