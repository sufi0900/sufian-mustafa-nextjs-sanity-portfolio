import Head from "next/head";
import React from "react";
import Script from "next/script";
import { NextSeo } from "next-seo";
import Aboutcode from "./aboutcode";

export const metadata = {
  title: "About Me - Sufian Mustafa",
  description:
    "Sufian Mustafa is a web developer with a passion for creating user-friendly and visually appealing websites. He is proficient in using front-end technologies such as HTML, CSS, and JavaScript, with a particular focus on ReactJS & NextJS. He is also proficient in using back-end technologies such as Node.js, PHP, and MongoDB",
  author: "Sufian Mustafa",
};

const page = () => {
  function sufianmustafawebdeveloperaboutme() {
    return {
      __html: `    {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Sufian Mustafa",
        "jobTitle": "Web Developer",
        "description": "I am Sufian Mustafa, a web developer with a passion for creating user-friendly and visually appealing websites. With a focus on front-end technologies such as HTML, CSS, and JavaScript, particularly NextJS ReactJS, I have the skills and experience to create high-quality websites. Additionally, I am proficient in backend technologies like Node.js, PHP, and MongoDB. Stay at the forefront of the industry with a web developer who is constantly learning and using modern technologies. ",
        "url": "https://sufianmustafa.com/about",
        "sameAs": [
          "https://www.linkedin.com/in/sufianmustafa",
          "https://www.linkedin.com/in/sufian-mustafa-7a7845226/"
        ],
        "image": [
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693673198/0948d54e-68a2-451c-ba15-ac683b0c0780_kclx5w.webp",
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672394/697ced9a-3edd-47e1-8cce-8f0ae2ec53ea_psear3.webp",
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672407/sufi3_curvlx.webp",
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672395/sufi5_nrizsx.webp",
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1692819142/Images/sufi3_dnokbh.jpg",
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693673965/AirBrush_20170128130335_t6dhwx.webp",
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672394/sufi6_depmpo.webp"
      ]
      }
  `,
    };
  }
  return (
    <div>
      <br></br>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Me - Sufian Mustafa</title>
        <meta
          name="description"
          content="I am Sufian Mustafa, a passionate web developer specializing in user-friendly and visually appealing websites. With expertise in front-end technologies like HTML, CSS, and JavaScript, particularly focusing on ReactJS, I create high-quality websites for various industries."
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
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
        />
        <meta property="og:url" content="https://sufianmustafa.com/about" />
        <link rel="canonical" href="https://sufianmustafa.com/about" />
        <NextSeo
          title="About Me - Sufian Mustafa"
          description=" Learn more about Sufian Mustafa, a passionate web developer with expertise in creating stunning web applications and websites"
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/about"
          openGraph={{
            title: "About Me - Sufian Mustafa",
            description:
              "Get to know Sufian Mustafa, a web developer known for creating user-friendly and visually appealing websites. Discover his skills, experience, and passion for web development.",
            type: "webpage",
            url: "https://sufianmustafa.com/about",
            images: [
              {
                url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1697724760/Screenshot_248_tpjuk3.png",
                width: 800,
                height: 800,
                alt: "About Me - Sufian Mustafa",
              },
            ],
          }}
        />
      </Head>
      <Script
        id="AboutMe-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdeveloperaboutme()}
        key="AboutMe-jsonld"
      />

      <div style={{ marginTop: "55px" }}>
        <Aboutcode />
      </div>
    </div>
  );
};

export default page;
