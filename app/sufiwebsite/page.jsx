import React from "react";
import Home from "../HomeCode";
import Script from "next/script";
import { NextSeo } from "next-seo";
import Head from "next/head";
export const metadata = {
  title: "Sufi - Web Developer",
  description:
    "Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my portfolio showcasing expertise in ReactJs, Nextjs, HTML5, CSS, and more. Download my resume or portfolio and get in touch for your web development needs. My nick name is sufi. sufian website",
  author: "Sufian Mustafa",
  keywords:
    "sufi, sufi website, sufi web developer, sufian, sufian web developer, sufi, sufian",
  icons: {
    icon: "https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1693675157/sufi_gt9fke.webp",
  },
  other: {
    "og:image":
      "https://res.cloudinary.com/dtvtphhsc/image/upload/ar_1.9,c_scale,h_630,w_1200/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png",
  },
};
const page = () => {
  function sufianmustafa() {
    return {
      __html: `    {
        "@context": "http://schema.org",
        "@type": "Website",
        "name": "Sufian Mustafa",
        "jobTitle": "Web Developer",
        "description": "I am Sufian Mustafa, a web developer with a passion for creating things that live on the internet.    I am Sufian Mustafa, a web developer with a passion for
        creating things that live on the internet. I have a wide range of experience in web development, with a
        focus on front-end technologies such as HTML, CSS, and
        JavaScript with a particular focus on ReactJS & NextJS. For Backend i use Sanity.io , NodeJS, php, MongoDB ",
        "url": "https://sufianmustafa.com/sufiwebsite",
        "sameAs": [
          "https://dev.to/sufian"
        ],
        "image": [
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693673965/AirBrush_20170128130335_t6dhwx.webp",
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672394/sufi6_depmpo.webp"
      ]
      }
  `,
    };
  }
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1693675157/sufi_gt9fke.webp"
          sizes="any"
        />
        <meta
          name="keywords"
          content="sufian, programmer, sufian website, sufi website, sufi web developer,web developer, web development services, developer website, website developer, site developer, it web developer, web site designers, web developer websites, a web developer, i am web developer, web programmers, the web developer, web developer skills, about web developer, backend development, create website, build website, i am looking for a web developer, website making, web developer near me, react developers, html website, online blog, developer for website, looking for web developer, web development projects, react web development, web technologies, responsive website, web making, web coding, react website, web development services near me, my web,"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sufi - Website </title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development. I have a wide range of experience in web development, with a
      focus on front-end technologies such as HTML, CSS, and
      JavaScript with a particular focus on ReactJS NextJS"
        />

        <meta name="author" content="Sufian Mustafa" />
        <meta property="og:title" content="Sufi - website" />
        <meta
          property="og:description"
          content="Explore the work of Sufian Mustafa, a web developer with a passion for creating stunning web applications."
        />
        <meta
          name="google-site-verification"
          content="k0JxDLTBR6jAV0eTVc6UxwWSEuoyBpz1c4k0zI7mKL4"
        />
        <meta
          property="og:url"
          content="https://sufianmustafa.com/sufiwebsite/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://sufianmustafa.com/sufiwebsite"
        />

        <link rel="canonical" href="https://sufianmustafa.com/sufiwebsite/" />
        <NextSeo
          title="Sufian Mustafa - Web Developer"
          description="Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more."
          author="Sufian Mustafa"
          openGraph={{
            title: "Sufian Mustafa - Web Developer",
            description:
              "Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more.",
            type: "webpage",
            url: "https://sufianmustafa.com/sufiwebsite",
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
      <Home />
    </>
  );
};

export default page;
