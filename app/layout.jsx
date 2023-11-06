import "./font.css";
import Navbar from "./Navbar";
import "./myglobal.css";
import "./aos.css";
import { NextSeo } from "next-seo";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Analytics } from "@vercel/analytics/react";
import "./body.dark-mode.css";

import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Sufian Mustafa - Web Developer",
  description:
    "Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more.",
  author: "Sufian Mustafa",
  icons: {
    icon: "https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1693675157/sufi_gt9fke.webp",
  },
  other: {
    "og:image":
      "https://res.cloudinary.com/dtvtphhsc/image/upload/ar_1.9,c_scale,h_630,w_1200/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png",
  },
};

export default function RootLayout({ children }) {
  function sufianmustafa() {
    return {
      __html: `   {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "url": "https://sufianmustafa.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://sufianmustafa.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sufian Mustafa",
          "logo": {
            "@type": "ImageObject",
            "url": "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672396/logo_1_lk0neo.webp",
            "width": 600,
            "height": 60
          }
        }
      }
  `,
    };
  }
  <link
    rel="stylesheet"
    href="https://res.cloudinary.com/dtvtphhsc/raw/upload/v1698003638/body_wn3ivd.css" // Replace with the actual path to your dark mode stylesheet
  ></link>;
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Head>
          <meta charset="utf-8" />
          <link
            rel="icon"
            href="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1693675157/sufi_gt9fke.webp"
            sizes="any"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Sufian Mustafa - Web Developer Portfolio</title>
          <meta
            name="description"
            content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development. I have a wide range of experience in web development, with a
      focus on front-end technologies such as HTML, CSS, and
      JavaScript with a particular focus on ReactJS NextJS"
          />

          <meta name="author" content="Sufian Mustafa" />
          <meta
            property="og:title"
            content="Sufian Mustafa - Web Developer Portfolio"
          />
          <meta
            property="og:description"
            content="Explore the work of Sufian Mustafa, a web developer with a passion for creating stunning web applications."
          />
          <meta property="og:url" content="https://sufianmustafa.com/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://sufianmustafa.com/" />

          <link rel="canonical" href="https://sufianmustafa.com/" />
          <NextSeo
            title="Sufian Mustafa - Web Developer"
            description="Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more."
            author="Sufian Mustafa"
            openGraph={{
              title: "Sufian Mustafa - Web Developer",
              description:
                "Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more.",
              type: "webpage",
              url: "https://sufianmustafa.com/",
              images: [
                {
                  url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png",
                  width: 800,
                  height: 800,
                  alt: "Product Image",
                },
              ],
            }}
          />
        </Head>
        <Script
          id="webpage-ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={sufianmustafa()}
          key="root-jsonld"
        />

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <link
            rel="icon"
            href="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1693675157/sufi_gt9fke.webp"
            sizes="any"
          />
          <main className="custom-cursor">{children}</main>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
