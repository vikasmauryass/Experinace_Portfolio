import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const title = "Vikas Maurya | Full Stack Developer (React, Next.js, Node.js, Laravel)";
const description =
  "Portfolio of Vikas Maurya, a Full Stack Developer with ~3 years of experience building scalable React, Next.js, Node.js and Laravel applications, REST APIs, and ERP/CRM platforms.";

export const metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: ["Vikas Maurya", "Full Stack Developer", "React.js Developer", "Next.js", "Node.js", "Laravel", "MERN stack", "REST API", "Portfolio", "India"],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: { title, description, url: site.url, siteName: site.name, type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#070b17" };

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: [site.github, site.linkedin],
    knowsAbout: ["React.js", "Next.js", "Node.js", "Laravel", "MongoDB", "MySQL", "REST APIs"],
    address: { "@type": "PostalAddress", addressCountry: "IN" },
  };
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
