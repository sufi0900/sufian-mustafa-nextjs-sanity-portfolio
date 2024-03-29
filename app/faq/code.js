"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import { NextSeo } from "next-seo";
import Head from "next/head";

const FAQ = () => {
  const faqData = [
    {
      question: "Who are you and what do you do?",
      answer:
        "I am sufian mustafa a web developer with a passion for creating high-quality, user-friendly, and responsive websites. I am also proficient in backend development, with experience in Node.js",
    },
    {
      question: "What is your experience in the industry?",
      answer:
        "I have over 1 year of experience in the web development industry, working on a variety of projects from small businesses to large corporations.",
    },
    {
      question:
        "What technologies have you worked with throughout your web development journey",
      answer:
        "Throughout my web development journey, I have accumulated a diverse skill set encompassing a range of cutting-edge technologies. Here is a comprehensive list of the key technologies I have successfully utilized in various projects: Front-End Development: HTML5 CSS3 (including frameworks like Tailwind CSS, Bootstrap, and custom styling) JavaScript (ES6+) React.js Next.JS Back-End Development: Node.js Express.js php Database Management: MongoDB MySQL Version Control: Git Package Managers: npm Responsive Design: Media Queries Flexbox Grid Layout CSS Frameworks: Tailwind CSS Bootstrap (React-Bootstrap) React MUI Animation Control: AOS Framer Motion AnimateCSS State Management: Redux (React) API Integration: RESTful APIs Build Tools: Webpack Babel CMS: Sanity.IO ",
    },
    {
      question: "What technologies and tools do you specialize in?",
      answer:
        "Here are few technologies I’ve been recently working with HTML5, CSS3, JavaScript, ReactJS, NextJS, Sanity.IO, React MUi, Bootstrap, NodeJS, ExpressJS, MongoDb , ReactBootstrap, FramerMotion ETC.",
    },
    {
      question: "What is your approach to problem-solving?",
      answer:
        "I take pride in having a high-level mindset when it comes to problem-solving. I have learned web development solely from online resources, without any personal expert help. This journey has equipped me with a solid foundation in web development, and I am now a self-sufficient developer.  Sometimes, solving a single problem may consume my 2 to 3 days or even a week, but in the end, I always manage to solve it. The feeling of happiness and confidence I gain from overcoming challenges is priceless.",
    },
    {
      question: "What is your process for working with clients?",

      answer:
        "I am a very helpful person and I always go the extra mile to make sure my clients are happy. I never charge any extra or high rates, and I am always willing to negotiate to find a price that works for both of us. I am also very focused on user needs, and I make sure that every website I create is easy to use and meets the needs of the end user.",
    },
    {
      question: "Do you have formal education in your field?",
      answer:
        "Yes, I have formal education in my field. I have a Bachelor's degree in Computer Science from the FG College Nowshera Linked to UOP with first division, and I also have a Master's degree in Computer Science from AWKUM university. In my undergraduate and graduate studies, I learned a wide range of computer science topics, including programming, data structures, algorithms, operating systems, and computer networks. I am confident that my formal education has prepared me well for a career in web development.",
    },
    {
      question: "How do you stay updated with the latest industry trends?",
      answer:
        "As a dedicated web developer, I am constantly learning and utilizing modern technologies to stay at the forefront of the industry. I have a genuine passion for learning new web development technologies and techniques. I actively follow industry blogs, read twitter posts from the developer around the globe . By staying connected with the developer community and engaging with the latest trends, I ensure that I am always up-to-date with the rapidly evolving landscape of web development.",
    },
    {
      question: "What kind of clients or projects are you interested in?",
      answer:
        "I am interested in working with clients who have a passion for their projects and who are looking for a web developer who can help them achieve their goals. I am also interested in working on projects that are challenging and that will allow me to learn and grow as a web developer. I am particularly interested in working on portfolio projects that may be static or dynamic. I enjoy the challenge of creating websites that are both visually appealing and functionally sound.",
    },
    {
      question:
        "Can you provide more details about your personal interests and hobbies",
      answer:
        "In my free time, I enjoy engaging in a variety of leisure activities, including playing video games, watching cartoons and science fiction movies, and funny movies. I also have a keen interest in astronomy. I find taking walks in the rain to be relaxing and enjoyable, and I also enjoy spending time with my family and friends. I am also a nature lover and enjoy going to hills or cool places to enjoy its beauty. I also love animals and often volunteer at my local animal shelter",
    },
    {
      question: "what you do when tired of coding?",
      answer:
        "I find that playing Video Games helps me to clear my head and recharge my batteries so that I can come back to my coding work refreshed and ready to focus. ",
    },
    {
      question: "My Nick Name is Sufi",
      answer:
        "To discover my website on Google, enter the following keywords into the search bar: sufian mustafa, sufian web developer, sufian portfolio, sufian web developer, sufian website, sufian mustafa, sufian mustafa website,",
    },
    {
      question: "Sufian Mustafa",
      answer: "Sufian Mustafa ",
    },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FAQ - Sufian Mustafa - Web Developer</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Sufian Mustafa's web development services. Find answers to common queries about web development, technology stack, and more."
        />
        <link rel="canonical" href="https://sufianmustafa.com/faq" />
      </Helmet>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FAQ - Sufian Mustafa</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Sufian Mustafa's web development services. Find answers to common queries about web development, technology stack, and more."
        />
        <meta name="author" content="Sufian Mustafa" />
        <meta property="og:title" content="FAQ - Sufian Mustafa" />
        <meta
          property="og:description"
          content="Explore the frequently asked questions about Sufian Mustafa's web development services. Find answers to common queries about web development, technology stack, and more."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1697724760/Screenshot_248_tpjuk3.png"
        />
        <meta property="og:url" content="https://sufianmustafa.com/faq" />
        <link rel="canonical" href="https://sufianmustafa.com/faq" />
        <NextSeo
          title="FAQ - Sufian Mustafa"
          description="Frequently Asked Questions about Sufian Mustafa's web development services. Find answers to common queries about web development, technology stack, and more."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/faq"
          openGraph={{
            title: "FAQ - Sufian Mustafa",
            description:
              "Explore the frequently asked questions about Sufian Mustafa's web development services. Find answers to common queries about web development, technology stack, and more.",
            type: "webpage",
            url: "https://sufianmustafa.com/faq",
            images: [
              {
                url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1697724760/Screenshot_248_tpjuk3.png",
                width: 800,
                height: 800,
                alt: "FAQ - Sufian Mustafa",
              },
            ],
          }}
        />
      </Head>

      <br />
      <Grid
        container
        spacing={3}
        padding={2}
        justifyContent="center"
        style={{ marginTop: "60px" }}
      >
        {faqData.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <div
              data-aos="fade-up"
              className="glassEffect"
              style={{ padding: "10px" }}
            >
              <h3 className="custom-input-color">{item.question}</h3>
              <p className="custom-input-color">{item.answer}</p>
            </div>
          </Grid>
        ))}
        <br />
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default FAQ;
