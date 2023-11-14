import React from "react";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
import Skillcode from "./skillcode";
export const metadata = {
  title: "My Skills - Sufian Mustafa",
  description:
    "Explore Sufian Mustafa's proficiency in various technologies/skills and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, NextJS, MERN Stack and more.",
  author: "Sufian Mustafa",
};
const page = () => {
  function sufianmustafawebdeveloperskills() {
    return {
      __html: ` {
        "@context": "http://schema.org",
        "@type": "ItemList",
        "name": "Web Development Skills",
        "url": "https://sufianmustafa.com/skills",

        "description": "Explore Sufian Mustafa's web development skills",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
               "@type": "WebPage",
              "name": "HTML5",
              "url": "https://sufianmustafa.com/skills/HTML5"

            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
               "@type": "WebPage",
              "name": "CSS3",
              "url": "https://sufianmustafa.com/skills/CSS3"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
               "@type": "WebPage",
              "name": "JavaScript",
              "url": "https://sufianmustafa.com/skills/JavaScript"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
               "@type": "WebPage",
              "name": "ReactJS",
              "url": "https://sufianmustafa.com/skills/React.JS"

            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
               "@type": "WebPage",
              "name": "React MUI",
              "url": "https://sufianmustafa.com/skills/React-MUI"

            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
               "@type": "WebPage",
              "name": "React Bootstrap",
              "url": "https://sufianmustafa.com/skills/React-Bootstrap"
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
               "@type": "WebPage",
              "name": "Tailwind CSS",
              "url": "https://sufianmustafa.com/skills/Tailwind-CSS"
            }
          },
          {
            "@type": "ListItem",
            "position": 8,
            "item": {
               "@type": "WebPage",
              "name": "NODEJS ExpressJS",
              "url": "https://sufianmustafa.com/skills/NODEJS-ExpressJS"
            }
          },
          {
            "@type": "ListItem",
            "position": 9,
            "item": {
               "@type": "WebPage",
              "name": "Next.JS",
              "url": "https://sufianmustafa.com/skills/NextJS"
            }
          },
          {
            "@type": "ListItem",
            "position": 10,
            "item": {
               "@type": "WebPage",
              "name": "MongoDB",
              "url": "https://sufianmustafa.com/skills/MongoDB"
            }
          },
          {
            "@type": "ListItem",
            "position": 11,
            "item": {
               "@type": "WebPage",
              "name": "php xamp",
              "url": "https://sufianmustafa.com/skills/php-xamp"
            }
          },
          {
            "@type": "ListItem",
            "position": 13,
            "item": {
               "@type": "WebPage",
              "name": "SEO (search engine optimization)",
              "url": "https://sufianmustafa.com/skills/SEO"
            }
          }
         

        ]

      }
  `,
    };
  }
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Skills - Sufian Mustafa</title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development. I have a wide range of experience in web development, with a
      focus on front-end technologies such as HTML, CSS, and
      JavaScript with a particular focus on ReactJS NextJS"
        />
        <meta name="author" content="Sufian Mustafa" />
        <meta
          property="og:title"
          content="My Skills - Sufian Mustafa - Web Developer"
        />
        <meta
          property="og:description"
          content="Explore the work of Sufian Mustafa, a web developer with a passion for creating stunning web applications."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
        />
        <meta property="og:url" content="https://sufianmustafa.com/skills" />
        <link rel="canonical" href="https://sufianmustafa.com/skills" />
        <NextSeo
          title="Skills - Sufian Mustafa - Web Developer"
          description="Explore Sufian Mustafa's web development skills and expertise. Learn about a wide range of technical proficiencies, including front-end and back-end development, database management, and user interface design."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/skills"
          openGraph={{
            title: "Skills - Sufian Mustafa",
            description:
              "Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, NextJS, MERN Stack and more.",
            type: "webpage",
            url: "https://sufianmustafa.com/skills",
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
        id="MySkills-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdeveloperskills()}
        key="MySkills-jsonld"
      />
      <Skillcode />
    </>
  );
};

export default page;
