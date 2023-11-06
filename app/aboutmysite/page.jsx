import React from "react";
import Code from "./code";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
export const metadata = {
  title: "My Portfolio - Sufian Mustafa",
  description:
    "Explore Sufian Mustafa's portfolio, a dynamic MERN stack website showcasing web development excellence. Discover React's component-based architecture, animated user experiences, responsive design with React MUI and Bootstrap, a personalized admin dashboard, and backend powered by Node.js, Express.js, and MongoDB. Explore performance optimization using mongoose-paginate and memory-cache, and find out about pivotal resources that shaped Sufian's journey into web development.",
  author: "Sufian Mustafa",
};
const page = () => {
  function sufianmustafawebdevelopersite() {
    return {
      __html: ` {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "About My Portfolio Website",
        "description": "Explore Sufian Mustafa's portfolio, a dynamic MERN stack website showcasing web development excellence. Discover React's component-based architecture, animated user experiences, responsive design with React MUI and Bootstrap, a personalized admin dashboard, and backend powered by Node.js, Express.js, and MongoDB. Explore performance optimization using mongoose-paginate and memory-cache, and find out about pivotal resources that shaped Sufian's journey into web development.",
        "url": "https://sufianmustafa.com/aboutmysite",
        "author": {
          "@type": "Person",
          "name": "Sufian Mustafa"
        },
        "about": {
          "@type": "CreativeWork",
          "name": "Sufian Mustafa's Portfolio Website",
          "description": "This portfolio website showcases my web development projects and skills. It was built using React for the front-end, Node.js with Express.js for the backend, and MongoDB for the database. Webpack was used for building, and assets are hosted on Cloudinary.",
          "url": "https://sufianmustafa.com"
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
        <title>My Portfolio - Sufian Mustafa</title>
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
          content="Explore the work of Sufian Mustafa, a web developer with a passion for creating stunning web applications."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
        />
        <meta
          property="og:url"
          content="https://sufianmustafa.com/aboutmysite"
        />
        <link rel="canonical" href="https://sufianmustafa.com/aboutmysite" />
        <NextSeo
          title="My Portfolio - Sufian Mustafa"
          description="Explore Sufian Mustafa\'s web development skills and expertise. Learn about a wide range of technical proficiencies, including front-end and back-end development, database management, and user interface design."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/aboutmysite"
          openGraph={{
            title: "My Portfolio - Sufian Mustafa",
            description:
              "This portfolio website showcases my web development projects and skills. It was built using React for the front-end, Node.js with Express.js for the backend, and MongoDB for the database. Webpack was used for building, and assets are hosted on Cloudinary.",
            type: "webpage",
            url: "https://sufianmustafa.com/aboutmysite",
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
        id="MySite-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdevelopersite()}
        key="MySite-jsonld"
      />
      <Code />
    </>
  );
};

export default page;
