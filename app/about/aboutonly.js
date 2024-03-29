/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Services from "../services/page";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ComputerIcon from "@mui/icons-material/Computer";
import { School } from "@mui/icons-material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';

import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import { Container } from "@mui/material";
// import "./EducationTimeline.css"; // Import your custom CSS file
import ListA from "./ListABoutMe";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import AnimatedDiv from "./AnimateDIv";
import FileDownloadDoneOutlinedIcon from "@mui/icons-material/FileDownloadDoneOutlined";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import Images from "./Images";

import InfoIcon from "@mui/icons-material/Info";
import QuizIcon from "@mui/icons-material/Quiz";
import Grid from "@mui/material/Grid";
import ImageGallery from "./ImageGallery";
import ContactMail from "@mui/icons-material/ContactMail";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";

const About = () => {
  function sufianmustafawebdeveloper() {
    return {
      __html: `    {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Sufian Mustafa",
        "jobTitle": "Web Developer",
        "description": "I am Sufian Mustafa, a web developer with a passion for creating things that live on the internet.    I am Sufian Mustafa, a web developer with a passion for
        creating things that live on the internet. My interest in web
        development began during my Master's degree in Computer
        Science at AWKUM University (2022-2024). I have since learned a great deal
        about computer science, but my true passion lies in web
        development.  I am a web developer who is constantly learning and using
        modern technologies to stay at the forefront of the industry.
        I have been continuously working on web development for the
        past year, and I have experience with a variety of projects,
        including e-commerce websites, social media platforms,
        Portfolio websites ETC. I am confident that I have the skills
        and experience to create high-quality websites that meet the
        needs of any user.   I have a wide range of experience in web development, with a
        focus on front-end technologies such as HTML, CSS, and
        JavaScript with a particular focus on ReactJS. ReactJS is a
        JavaScript framework that is known for its ease of use and
        its ability to create user-friendly and visually appealing
        websites. and this website was also created using ReactJS. I
        love to use ReactJS with React MUI and React Bootstrap, as I
        believe these libraries provide a great foundation for
        building user-friendly and visually appealing websites.",
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

  const button = {
    fontSize: "38px",
    color: "rgba(15, 15, 251, 0.878)",
    position: "relative",
  };

  const Bluetick = {
    color: "rgb(255, 0, 242)",
  };
  const progress = {
    width: "100%",
    height: "25px",
    borderRadius: "40px",
    color: "red",
  };

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Me - Sufian Mustafa - web developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development. I have a wide range of experience in web development, with a
      focus on front-end technologies such as HTML, CSS, and
      JavaScript with a particular focus on ReactJS NextJSI am Sufian Mustafa, a web developer with a passion for creating things that live on the internet.    I am Sufian Mustafa, a web developer with a passion for
        creating things that live on the internet. My interest in web
        development began during my Master's degree in Computer
        Science at AWKUM University. I have since learned a great deal
        about computer science, but my true passion lies in web
        development.  I am a web developer who is constantly learning and using
        modern technologies to stay at the forefront of the industry.
        I have been continuously working on web development for the
        past year, and I have experience with a variety of projects,
        including e-commerce websites, social media platforms,
        Portfolio websites ETC. I am confident that I have the skills
        and experience to create high-quality websites that meet the
        needs of any user. I have a wide range of experience in web development, with a
        focus on front-end technologies such as HTML, CSS, and
        JavaScript with a particular focus on ReactJS. ReactJS is a
        JavaScript framework that is known for its ease of use and
        its ability to create user-friendly and visually appealing
        websites. and this website was also created using ReactJS. I
        love to use ReactJS with React MUI and React Bootstrap, as I
        believe these libraries provide a great foundation for
        building user-friendly and visually appealing websites."
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
        <meta property="og:url" content="https://sufianmustafa.com" />
        <link rel="canonical" href="https://sufianmustafa.com/" />
        <NextSeo
          title="About Me - Sufian Mustafa"
          description=" My interest in web
          development began during my Master's degree in Computer
          Science at AWKUM University. I have since learned a great deal
          about computer science, but my true passion lies in web
          development.  I am a web developer who is constantly learning and using
          modern technologies to stay at the forefront of the industry.
          I have been continuously working on web development for the
          past year, and I have experience with a variety of projects,
          including e-commerce websites, social media platforms,
          Portfolio websites ETC."
          author="Sufian Mustafa"
          openGraph={{
            title: "About Me - Sufian Mustafa",
            description:
              "I am confident that I have the skills and experience to create high-quality websites that meet the needs of any user. I have a wide range of experience in web development, with a focus on front-end technologies such as HTML, CSS, and JavaScript with a particular focus on ReactJS. ReactJS is a JavaScript framework that is known for its ease of use and its ability to create user-friendly and visually appealing websites. and this website was also created using ReactJS. I love to use ReactJS with React MUI and React Bootstrap, as I believe these libraries provide a great foundation for building user-friendly and visually appealing websites..",
            type: "webpage",
            url: "https://nextjsblog2-zeta.vercel.app/",
            images: [
              {
                url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693673198/0948d54e-68a2-451c-ba15-ac683b0c0780_kclx5w.webp",
                width: 800,
                height: 800,
                alt: "Product Image",
              },
            ],
          }}
        />
      </Head>
      <Script
        id="AboutMe-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdeveloper()}
        key="AboutMe-jsonld"
      />
      <>
        <style type="text/css">
          {`   
  
  .progress-bar{  background-color:  rgba(78, 78, 246, 0.647); 
  border-radius:20px;
  font-size:17px;
  color:black; }
  .progress{
  background-color: rgba(247, 90, 216, 0.696);
  border-radius:20px;
  }
  
  
  }
  
  `}
        </style>
      </>

      <Grid container spacing={2} padding={2} className="About">
        <Grid item lg={6} sm={12} className="About3">
          <div className="glassEffect">
            <div className="AboutLeftDiv para" style={{ overflow: "hidden" }}>
              <h1
                data-aos="flip-left"
                data-aos-delay="180"
                data-aos-duration="500"
              >
                About Me
              </h1>
              <AnimatedDiv
                className="animate__zoomIn"
                // data-aos="zoom-in"
                // data-aos-delay="180"
                // data-aos-duration="500"
              >
                <p
                  data-aos="zoom-in"
                  data-aos-delay="180"
                  data-aos-duration="500"
                >
                  <span>Who am i and how i got here</span> My love for web
                  development started while I was getting my Master's degree in
                  Computer Science at{" "}
                  <p
                    style={{
                      display: "inline",
                      color: "rgb(255, 0, 204)",
                      textShadow: " 0.5px 0.5px black",
                    }}
                  >
                    AWKUM University (2022)
                  </p>{" "}
                  . Even though I learned a lot of cool stuff about computers,{" "}
                  <p
                    style={{
                      display: "inline",
                      color: " rgb(255, 0, 204)",
                      textShadow: " 0.5px 0.5px black",
                    }}
                  >
                    {" "}
                    building websites became my main jam
                  </p>
                  . I enjoy the challenge of creating user-friendly and visually
                  appealing websites.
                </p>
              </AnimatedDiv>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <p>
                    <span>
                      Front-End Development Expertise: <br />
                    </span>{" "}
                    I'm a front-end magician, building beautiful websites with
                    the latest tools such as HTML, CSS, and JavaScript with a
                    particular focus on ReactJS and NextJS.. Think clear
                    structures, eye-catching styles, and smooth interactions. I
                    handle it all, from the basics to the fancy stuff, making
                    sure your website is both stunning , user-friendly and
                    responsive .
                    {/* I have a wide
                    range of experience in web development, with a focus on
                    front-end technologies   */}
                    &nbsp;
                    {/* {showAdvantages ? (
                      <div>
                        <p>
                          <span>ReactJS</span> is a JavaScript framework that is
                          known for its ease of use and its ability to create
                          user-friendly and visually appealing websites. and
                          this website was also created using ReactJS. I love to
                          use ReactJS with React MUI and React Bootstrap, as I
                          believe these libraries provide a great foundation for
                          building user-friendly and visually appealing
                          websites.
                        </p>
                        <p>
                          <span> Next.js</span>, on the other hand, is a
                          powerful framework built on top of React. It provides
                          server-side rendering, automatic code splitting, and
                          seamless routing, enhancing both the performance and
                          SEO-friendliness of web applications. With Next.js, I
                          can create fast and SEO-optimized websites that
                          deliver a top-notch user experience.
                        </p>
                        <p>
                          Whether it is building complex web applications or
                          optimizing websites for performance and search engine
                          visibility, my proficiency in ReactJS and Next.js
                          ensures that I can meet and exceed your web
                          development needs.
                        </p>
                      </div>
                    ) : null}
                    <button
                      style={{ borderRadius: "15px" }}
                      onClick={toggleAdvantages}
                    >
                      {showAdvantages ? "Read Less" : "Read More.."}
                    </button> */}
                  </p>
                </div>{" "}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <p>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        fontSize: "28px",
                      }}
                    >
                      Hold on tight!{" "}
                    </p>{" "}
                    <span> My Expertise in Back-End Development</span> &nbsp;
                    When it's time to breathe life into static sites, I work my
                    magic as the CMS whisperer. Using NodeJS, Sanity, and
                    Prisma, I sprinkle some dynamic dust on HTML, React, or
                    NextJS websites, turning them into living web wonders.
                    Whether you need a sleek static site or a dynamic,
                    data-driven platform, I've got the tools to make your web
                    presence stand out.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="230"
                  data-aos-duration="500"
                >
                  <p>
                    <span>Full-Stack Developer</span> &nbsp; And if you need
                    both front-end and back-end expertise, I'm your full-stack
                    hero! I can build your website from the ground up,
                    seamlessly blending design and functionality. Whether you
                    want a simple static site or a complex data-driven platform,
                    I have the skills and experience to bring your vision to
                    life. Plus, I keep SEO in mind, ensuring your website gets
                    found online.
                  </p>
                </div>
                <p
                  data-aos="zoom-in"
                  data-aos-delay="240"
                  data-aos-duration="510"
                >
                  <span>What can i do and what I am currently doing </span>For
                  the past 2 years, I've been immersed in the exciting world of
                  web development, tackling diverse projects and honing my
                  skills. Now, I'm ready to put my experience to work for you!
                  Whether you need a stunning front-end experience with
                  pixel-perfect design and smooth interactions, a robust
                  back-end infrastructure powered by NodeJS, Sanity, and Prisma,
                  or the seamless integration of both in a full-stack project,
                  I'm your go-to developer
                </p>
              </div>
              &nbsp;
              <h4>
                <div
                  className="AboutH4"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="700"
                >
                  Here are few technologies I’ve been recently working with:
                </div>
                <div className="AboutLeftDiv_List">
                  <ul>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="100"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      HTML5
                    </li>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="150"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      CSS3
                    </li>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="170"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      JavaScript
                    </li>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="200"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      ReactJS
                    </li>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="200"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      NextJS
                    </li>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="230"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      SanityIO
                    </li>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="230"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      Prisma
                    </li>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="260"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      MERN Stack
                    </li>

                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="330"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      React MUI
                    </li>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="360"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      React Bootstrap
                    </li>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="360"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      Tailwind CSS
                    </li>
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay="390"
                      data-aos-duration="500"
                    >
                      <FileDownloadDoneOutlinedIcon style={Bluetick} />
                      FramerMotion
                    </li>
                    <br />
                    <br />
                    <br />
                  </ul>
                </div>
              </h4>
            </div>
            <div>
              {" "}
              <List
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <ListItem>
                  <div className="progress" style={progress}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{ width: " 90% " }}
                    >
                      <span
                        className="progress-label-color"
                        style={{ fontWeight: "bold" }}
                      >
                        90%
                      </span>
                    </div>
                  </div>
                  <h2>FrontEnd</h2>
                </ListItem>

                <ListItem>
                  <div className="progress" style={progress}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{ width: "50%" }}
                    >
                      <span
                        className="progress-label-color"
                        style={{ fontWeight: "bold" }}
                      >
                        50%
                      </span>
                    </div>
                  </div>
                  <h2>BackEnd</h2>
                </ListItem>
              </List>
            </div>
          </div>
        </Grid>

        <Grid item lg={6} sm={12} padding={1} style={{ overflow: "hidden" }}>
          <div className="glassEffect">
            <div style={{ padding: "10px" }}>
              <div
                className="image-area animate__animated animate__backInLeft"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <div className="img-wrapper">
                  <a href={Images.image1.src}>
                    {" "}
                    <img
                      src={Images.image1.src}
                      alt={Images.image1.alt}
                      loading="lazy"
                    />
                  </a>
                  {/* </Suspense> */}
                  <h2>SuFiaN MusTaFa</h2>
                </div>
              </div>
            </div>
            <br></br>

            <Container maxWidth="sm">
              <Grid
                item
                lg={12}
                sm={12}
                data-aos="zoom-in-up"
                data-aos-delay="200"
                data-aos-duration="200"
              >
                <ImageGallery />

                <ListA />

                <br />
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  className="Homeresume animadte__animated animate__backInRight About3"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  <a
                    target="blank"
                    href="https://drive.google.com/file/d/1bLb2Ak9tpS88qSlVdGcRWcGdD6F79jXC/view" // Use the imported Resume as the href // Replace with the actual path to your PDF file                        download="sufi.pdf" // Specify the desired downloaded file name                    download="sufi.pdf" // Specify the desired downloaded file name
                    style={{ textDecoration: "none" }}
                  >
                    <h2 style={{ padding: "10px" }} className="button-85">
                      {" "}
                      Download My Resume <PictureAsPdfIcon />
                      <FileDownloadOutlinedIcon
                        style={button}
                        className="cursorp"
                      />
                    </h2>{" "}
                  </a>
                  &nbsp;
                </div>

                <br />
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  className="Homeresume animadte__animated animate__backInRight About3"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  <Link href="/aboutmysite" style={{ textDecoration: "none" }}>
                    <h2 style={{ padding: "10px" }} className="button-85">
                      About My Portfolio
                      <InfoIcon style={button} className="cursorp" />
                    </h2>{" "}
                  </Link>
                  &nbsp;
                </div>
                <br />
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  className="Homeresume animadte__animated animate__backInRight About3"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <h2 style={{ padding: "10px" }} className="button-85">
                      Contact Me
                      <ContactMail style={button} className="cursorp" />
                    </h2>{" "}
                  </Link>
                  &nbsp; &nbsp;
                </div>
                <br />
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  className="Homeresume animadte__animated animate__backInRight About3"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  <Link href="/faq" style={{ textDecoration: "none" }}>
                    <h2 style={{ padding: "10px" }} className="button-85">
                      FAQ
                      <QuizIcon style={button} className="cursorp" />
                    </h2>{" "}
                  </Link>
                  &nbsp;
                </div>
              </Grid>
            </Container>
          </div>
        </Grid>
        <Container>
          <br />
          <div className="About3 ts" data-aos="zoom-in">
            {" "}
            <h1> Education & Experience</h1>
          </div>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="white"
              >
                2020-2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <School />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography color="white" variant="h6" component="span">
                  Bachelor's Degree
                </Typography>
                <Typography color="white">
                  From ▶️ FG College Nowshera ( Linked to UOP) <br /> Marks ▶️
                  372/550 (67%){" "}
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="white"
              >
                2022-2024
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <ComputerIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" color="white" component="span">
                  Master's Degree
                </Typography>
                <Typography color="white">
                  From ▶️ Abdul Wali Khan University Mardan (AWKUM) <br /> GPA
                  ▶️ 3.2
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="white"
              >
                2022-2024
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary">
                  <VisibilityIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" color="white" component="span">
                  Front-End Developer
                </Typography>
                <Typography color="white">
                  Designed and developed responsive user interfaces for various
                  web applications, ensuring a seamless and user-friendly
                  experience. <br /> HTML5 | CSS3 | Tailwind CSS | React JS |
                  Next JS
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="white"
              >
                2022-2024
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="primary">
                  <StorageIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" color="white" component="span">
                  Back-End Developer
                </Typography>
                <Typography color="white">
                  Built RESTful APIs for various clients, ensuring data security
                  and scalability. <br />
                  Node JS | Express JS | Sanity.io | Prisma | MongoDB
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="white"
              >
                2022-2024
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary">
                  <CodeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" color="white" component="span">
                  Full-Stack Developer
                </Typography>
                <Typography color="white">
                  Leveraging full-stack expertise to build personal portfolio
                  website and other independent projects.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          <Services />
        </Container>
      </Grid>
      <br />
    </div>
  );
};

export default About;
