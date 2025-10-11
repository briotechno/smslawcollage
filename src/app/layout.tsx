import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMS Law College - Premier Legal Education in Mehasana",
  description: "SMS Law College offers comprehensive legal education with B.A.LL.B, B.B.A.LL.B, and LL.M programs. Join our legacy of legal excellence in Mehasana.",
  keywords: "law college, legal education, B.A.LL.B, B.B.A.LL.B, LL.M, Mehasana, legal studies, law school",
  authors: [{ name: "SMS Law College" }],
  creator: "SMS Law College",
  publisher: "SMS Law College",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://smslawcollege.edu"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SMS Law College - Premier Legal Education in Mehasana",
    description: "SMS Law College offers comprehensive legal education with B.A.LL.B, B.B.A.LL.B, and LL.M programs. Join our legacy of legal excellence in Mehasana.",
    url: "https://smslawcollege.edu",
    siteName: "SMS Law College",
    images: [
      {
        url: "/assets/Slider1.jpg",
        width: 1200,
        height: 630,
        alt: "SMS Law College Campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMS Law College - Premier Legal Education in Mehsana",
    description: "SMS Law College offers comprehensive legal education with B.A.LL.B, B.B.A.LL.B, and LL.M programs. Join our legacy of legal excellence in Mehasana.",
    images: ["/assets/Slider1.jpg"],
  },
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
