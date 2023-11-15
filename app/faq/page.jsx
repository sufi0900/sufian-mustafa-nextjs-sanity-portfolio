import React from "react";
import Code from "./code";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
export const metadata = {
  title: "FAQ - Sufian Mustafa - Web Developer",
  description:
    "Frequently Asked Questions about Sufian Mustafa's web development services. Find answers to common queries about web development, technology stack, and more",
  author: "Sufian Mustafa",
};
const page = () => {
  function sufianmustafawebdeveloperfaq() {
    return {
      __html: `  {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "FAQ - Sufian Mustafa's Portfolio",
        "description": "Frequently Asked Questions about Sufian Mustafa's portfolio website",
        "url": "https://sufianmustafa.com/faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I contact Sufian Mustafa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact Sufian Mustafa through the contact form on the Contact page of this website."
            }
          },
          {
            "@type": "Question",
            "name": "Who are you and what do you do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I am sufian mustafa a web developer with a passion for creating high-quality, user-friendly, and responsive websites. I am also proficient in backend development, with experience in Node.js"
            }
          },
          {
            "@type": "Question",
            "name": "What technologies have you worked with throughout your web development journey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Throughout my web development journey, I have accumulated a diverse skill set encompassing a range of cutting-edge technologies. Here is a comprehensive list of the key technologies I have successfully utilized in various projects: Front-End Development: HTML5 CSS3 (including frameworks like Tailwind CSS, Bootstrap, and custom styling) JavaScript (ES6+) React.js Next.JS Back-End Development: Node.js Express.js php Database Management: MongoDB MySQL Version Control: Git Package Managers: npm Responsive Design: Media Queries Flexbox Grid Layout CSS Frameworks: Tailwind CSS Bootstrap (React-Bootstrap) React MUI Animation Control: AOS Framer Motion AnimateCSS State Management: Redux (React) API Integration: RESTful APIs Build Tools: Webpack Babel CMS: Sanity.IO "
            }
          },
          {
            "@type": "Question",
            "name": "Do you have formal education in your field?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, I have formal education in my field. I have a Bachelor's degree in Computer Science from the FG College Nowshera Linked to UOP with first division, and I also have a Master's degree in Computer Science from AWKUM university. In my undergraduate and graduate studies, I learned a wide range of computer science topics, including programming, data structures, algorithms, operating systems, and computer networks. I am confident that my formal education has prepared me well for a career in web development."
            }
          },
          {
            "@type": "Question",
            "name": "My Nick Name is Sufi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To discover my website on Google, enter the following keywords into the search bar:sufian mustafa, sufian web developer, sufian portfolio, sufian web developer, sufian website, sufian mustafa, sufian mustafa website."
            }
          },
          {
            "@type": "Question",
            "name": "Sufian Mustafa",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sufian Mustafa"
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
        <title>FAQ - Sufian Mustafa - Web Developer</title>
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
        <meta property="og:url" content="https://sufianmustafa.com/faq" />
        <link rel="canonical" href="https://sufianmustafa.com/faq" />
        <NextSeo
          title="FAQ - Sufian Mustafa"
          description="Explore Sufian Mustafa's web development skills and expertise. Learn about a wide range of technical proficiencies, including front-end and back-end development, database management, and user interface design."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/faq"
          openGraph={{
            title: "FAQ - Sufian Mustafa",
            description:
              "Frequently Asked Questions about Sufian Mustafa's web development services. Find answers to common queries about web development, technology stack, and more",
            type: "webpage",
            url: "https://sufianmustafa.com/faq",
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
        id="FAQ-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdeveloperfaq()}
        key="FAQ-jsonld"
      />
      <Code />
    </>
  );
};

export default page;
