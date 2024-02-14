import React from "react";
import Code from "./code";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
export const metadata = {
  title: "Footer - Sufian Mustafa",
  description:
    "Explore the footer section of Sufian Mustafa's portfolio website. Find links to social media profiles, additional resources, and more.",
  author: "Sufian Mustafa",
};
const page = () => {
  function sufianmustafawebdeveloperfooter() {
    return {
      __html: `  {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "Footer - Sufian Mustafa",
        "description": "Explore the footer section of Sufian Mustafa's portfolio website. Find links to social media profiles, additional resources, and more.",
        "url": "https://sufianmustafa.com/footer",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sufianmustafa.com/footer"
        }
      }
  `,
    };
  }
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Footer - Sufian Mustafa</title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development. I have a wide range of experience in web development, with a
      focus on front-end technologies such as HTML, CSS, and
      JavaScript with a particular focus on ReactJS NextJS"
        />
        <meta name="author" content="Sufian Mustafa" />
        <meta property="og:title" content="My Portfolio - Sufian Mustafa" />
        <meta
          property="og:description"
          content="Frequently Asked Questions about Sufian Mustafa's portfolio website."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
        />
        <meta property="og:url" content="https://sufianmustafa.com/footer" />
        <link rel="canonical" href="https://sufianmustafa.com/footer" />
        <NextSeo
          title="Footer - Sufian Mustafa"
          description="Explore Sufian Mustafa's web development skills and expertise. Learn about a wide range of technical proficiencies, including front-end and back-end development, database management, and user interface design."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/footer"
          openGraph={{
            title: "Footer - Sufian Mustafa",
            description:
              "Explore the footer section of Sufian Mustafa's portfolio website. Find links to social media profiles, additional resources, and more.",
            type: "webpage",
            url: "https://sufianmustafa.com/footer",
            images: [
              {
                url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1697724712/Screenshot_247_iwn2h5.png",
                width: 800,
                height: 800,
                alt: "web developer Image",
              },
            ],
          }}
        />
      </Head>
      <Script
        id="Footer-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdeveloperfooter()}
        key="Footer-jsonld"
      />
      <Code />
    </>
  );
};

export default page;
