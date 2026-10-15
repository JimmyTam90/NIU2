import "./globals.css";
import Tracking from "@/components/Tracking";
import { products } from "@/lib/products";
import { SITE, canonical, pub } from "@/lib/site-config";

// Social preview uses the primary featured product image (never the logo): the KQi 300X photo from NIU's CDN.
const OG_IMAGE = "https://shop.niu.com/cdn/shop/files/K300-X.jpg?v=1768810569&width=1200";

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: canonical("/") },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: pub("/favicon.ico") }, { url: pub("/favicon.png"), type: "image/png" }],
    shortcut: pub("/favicon.ico"),
    apple: pub("/apple-touch-icon.png"),
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: canonical("/"),
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 1200, alt: products[0].image.alt }],
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description, images: [OG_IMAGE] },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#111111" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href={SITE.merchantOrigin} />
        <link rel="preconnect" href={SITE.merchantOrigin} crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Tracking />
      </body>
    </html>
  );
}
