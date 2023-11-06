/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import ListA from "./ListABoutMe";
import { useMediaQuery, useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import AnimatedDiv from "./AnimateDIv";
import FileDownloadDoneOutlinedIcon from "@mui/icons-material/FileDownloadDoneOutlined";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import Images from "./Images";
import Container from "@mui/material/Container";
import InfoIcon from "@mui/icons-material/Info";
import QuizIcon from "@mui/icons-material/Quiz";
import Grid from "@mui/material/Grid";
import ImageGallery from "./ImageGallery";
import ContactMail from "@mui/icons-material/ContactMail";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
import SlideM from "./slideshowmbl";
import dynamic from "next/dynamic";
// import ComponentA from "./responsiveshow";
// import ComponentB from "./slideshowlg";
const ComponentA = dynamic(() => import("./responsiveshow"));
const ComponentB = dynamic(() => import("./slideshowlg"));
const About = () => {
  const [showAdvantages, setShowAdvantages] = useState(false);

  const toggleAdvantages = () => {
    setShowAdvantages(!showAdvantages);
  };
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
        Science at AWKUM University. I have since learned a great deal
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
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const button = {
    fontSize: "38px",
    color: "rgba(15, 15, 251, 0.878)",
    position: "relative",
  };
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  ></link>;
  <link
    href="https://unpkg.com/aos@2.3.1/dist/aos.css"
    rel="stylesheet"
  ></link>;

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
        <title>About Me - Sufian Mustafa</title>
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
          <div className="item itemabout">
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
                  <span>Who am i and how i got here</span> I am Sufian Mustafa,
                  a web developer with a passion for creating things that live
                  on the internet. My interest in web development began during
                  my Masters degree in Computer Science at AWKUM University. I
                  have since learned a great deal about computer science, but my
                  true passion lies in web development. I enjoy the challenge of
                  creating user-friendly and visually appealing websites.
                </p>
              </AnimatedDiv>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <p>
                  <span>What am I currently doing </span> I am a web developer
                  who is constantly learning and using modern technologies to
                  stay at the forefront of the industry. I have been
                  continuously working on web development for the past year, and
                  I have experience with a variety of projects, including
                  e-commerce websites, social media platforms, Portfolio
                  websites ETC. I am confident that I have the skills and
                  experience to create high-quality websites that meet the needs
                  of any user .
                </p>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <p>
                    <span>
                      Front-End Development Expertise: <br />
                    </span>{" "}
                    <span> With a Focus on ReactJS & NextJS</span> <br />I have
                    a wide range of experience in web development, with a focus
                    on front-end technologies such as HTML, CSS, and JavaScript
                    with a particular focus on ReactJS and NextJS. &nbsp;
                    {showAdvantages ? (
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
                    </button>
                  </p>
                </div>{" "}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <p>
                    <span>My Expertise in Back-End Development</span>I am also
                    proficient in using backend technologies such as Node.js,
                    php and MongoDB. I have a strong understanding of the entire
                    web development process
                  </p>
                </div>
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
          <div className="item itemabout">
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
                      // placeholder={<Spin />}
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
                    href="https://drive.google.com/file/d/1F3btm-Hr-TsAFp_73El6phulcrwhlUUT/view?usp=drive_link" // Use the imported Resume as the href // Replace with the actual path to your PDF file                        download="sufi.pdf" // Specify the desired downloaded file name                    download="sufi.pdf" // Specify the desired downloaded file name
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
                  {" "}
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <h2 style={{ padding: "10px" }} className="button-85">
                      Contact Me
                      <ContactMail style={button} className="cursorp" />
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
      </Grid>

      {/* <ComponentA />
      {isMatch ? (
        <>
          <SlideM />{" "}
        </>
      ) : (
        <>
          <ComponentB />

          <br />
        </>
      )} */}
    </div>
  );
};

export default About;
