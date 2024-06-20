import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

import "beercss";
import "material-dynamic-colors";
import Theme from "@/components/Theme";
import Modal from "@/components/Modal";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const robots = Roboto({weight:'400', subsets: ["latin"] });


export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "yellow" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata = {
  title: "adenlall - fullstack developer",
  description: "Hi, I'am adenlall. A Javascript/PHP Developer.",
  openGraph: {
    title: "adenlall - fullstack developer",
    description: "Hi, I'am adenlall. A Javascript/PHP Developer.",
    url: "https://janahbilal.vercel.app",
    siteName: "adenlall",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://janahbilal.vercel.app/screen.png",
        alt: "adenlall screenshot",
      },
    ],
    id: "adenlall",
  },
  icons: {
    icon: "https://janahbilal.vercel.app/logo.png",
    apple: "https://janahbilal.vercel.app/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "adenlall - fullstack developer",
    description: "Hi, I'am adenlall. A Javascript/PHP Developer.",
    creator: "@adenlall",
    images: {
      url: "https://janahbilal.vercel.app/screen.png",
      alt: "adenlall",
    },
  },
  alternates: {
    canonical: "https://janahbilal.vercel.app/",
    languages: {
      "en-US": "https://janahbilal.vercel.app/",
    },
    media: {
      "only screen and (max-width: 600px)": "https://nextjs.org/mobile",
    },
  },
  category: "entertaiment",
  archives: ["https://janahbilal.vercel.app"],
  assets: ["https://janahbilal.vercel.app/misc"],
  bookmarks: ["https://janahbilal.vercel.app/"],
  appleWebApp: {
    title: "adenlall",
    statusBarStyle: "black-translucent",
    startupImage: [
      "https://janahbilal.vercel.app/logo.png",
      {
        url: "https://janahbilal.vercel.app/logo.png",
        media: "(device-width: 194px) and (device-height: 194px)",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/beercss@3.5.6/dist/cdn/beer.min.css" rel="stylesheet" />
        <script type="module" src="https://cdn.jsdelivr.net/npm/beercss@3.5.6/dist/cdn/beer.min.js"></script>
        <script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.0/dist/cdn/material-dynamic-colors.min.js"></script>
      </head>
      <body className={"min-h-screen surface-container-low " + robots.className}>
        <Modal />
        <div className="flex flex-col items-center justify-between container m-auto pt-10">
          <nav className="w-full md:flex-row flex-col items-center justify-between flex">
            <h1 className="meduim"><Link href="/">janah bilal</Link></h1>
            <div className="flex sm:flex-row sm:gap-0 gap-2 flex-col justify-center items-center">
              <div>
                <Theme />
              </div>
              <div>
                <a target="_blank" href="https://www.linkedin.com/in/janahbilal/">
                  <button className="button m-0 border">linkedin</button>
                </a>
                <a target="_blank" href="https://github.com/adenlall">
                  <button className="button m-0">github</button>
                </a>
                <a target="_blank" href="https://github.com/adenlall">
                  <button className="button m-0 tertiary">porfolio</button>
                </a>
              </div>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
