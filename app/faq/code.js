"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const FAQ = () => {
  const Item = styled(Paper)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: theme.spacing(2),
  }));

  const faqData = [
    {
      question: "Who are you and what do you do?",
      answer:
        "I am a web developer with a passion for creating high-quality, user-friendly, and responsive websites. I am also proficient in backend development, with experience in Node.js",
    },
    {
      question: "What is your experience in the industry?",
      answer:
        "I have over 1 year of experience in the web development industry, working on a variety of projects from small businesses to large corporations.",
    },
    {
      question: "What technologies and tools do you specialize in?",
      answer:
        "Here are few technologies I’ve been recently working with HTML5, CSS3, JavaScript, ReactJS, NodeJS, ExpressJS MongoDb ReactMUIReact, ReactBootstrap, FramerMotion ETC.",
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
    // ... Add more questions and answers
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FAQ - Sufian Mustafa</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Sufian Mustafa's web development services. Find answers to common queries about web development, technology stack, and more."
        />
        <link rel="canonical" href="https://sufianmustafa.com/#faq" />
      </Helmet>
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
              className="item itemabout"
              style={{ padding: "10px" }}
            >
              <h3 className="custom-input-color">{item.question}</h3>
              <p className="custom-input-color">{item.answer}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FAQ;
