"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "animate.css";
import { useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import SteamHomePage from "./SteamHomePage";

import ComponentA from "./about/aboutonly";

import ComponentS from "./skills/skillcode";
import ComponentB from "./Homepageblogs/page";
import ComponentP from "./HomepageProjects/page";
import ComponentC from "./contact/code";

import css from "./css3.webp";
import react from "./react.webp";
import html from "./html5.webp";
import mern from "./mern.webp";
import next from "./next.webp";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import SlideM from "./about/slideshowmbl";
// import SvgHomePage from "./SvgHomePage";
const SvgHomePage = dynamic(() => import("./SvgHomePage"));
const Slideshowlg = dynamic(() => import("./about/slideshowlg"));
const ResponsiveShow = dynamic(() => import("./about/responsiveshow"));
const Home = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const ReactRotatingText = require("react-rotating-text");
  const button = {
    fontSize: "58px",
    color: "rgba(249, 43, 208, 0.696)",
    position: "relative",
    top: "16px",
  };
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <>
      <Grid
        container
        padding={2}
        flex
        sx={{
          margin: "auto",
          alignItems: "center", // Center vertically
          minHeight: "100vh",
          // Set minimum height of the container to the viewport height
        }}
      >
        <Grid
          item
          lg={12}
          sm={12}
          sx={{ marginTop: "60px" }}
          container
          className="flex"
        >
          <div className="Home itemabout">
            <div className="_CSS" id="ContainerHome">
              <div className="Home_Circle ">
                <Image
                  src={css}
                  style={{ width: "100%", height: "auto" }}
                  alt="css"
                  width={100}
                  height={100}
                  loading="lazy"
                />
                {/* <img
                  src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1693672583/624-6241203_css-icon-png-cascading-style-sheets_jeglsu.webp"
                  style={{ width: "100%", height: "auto" }}
                  alt="css"
                  loading="lazy"
                /> */}
                <SteamHomePage />
              </div>
            </div>
            <div
              className="_JAVASCRIPT"
              style={{
                marginTop: "250px",
                marginBottom: "200px",
                marginLeft: "50px",
              }}
              id="ContainerHome"
            >
              <div className="Home_Circle">
                <Image
                  src={mern}
                  style={{ width: "90%", height: "auto" }}
                  alt="javascript.png"
                  loading="lazy"
                  width={100}
                  height={100}
                />
                <SteamHomePage />
              </div>
            </div>
            <div
              className="_HTML"
              style={{
                marginTop: "350px",
                marginLeft: "-400px",
              }}
              id="ContainerHome"
            >
              <div className="Home_Circle">
                <Image
                  src={html}
                  style={{ width: "100%", height: "auto" }}
                  alt="html"
                  width={100}
                  height={100}
                  loading="lazy"
                />
                <SteamHomePage />
              </div>
            </div>
            <div>
              <div
                className="_REACT"
                style={{
                  marginTop: "200px",
                  marginRight: "50px",
                }}
                id="ContainerHome"
              >
                <div className="Home_Circle">
                  <Image
                    src={react}
                    style={{ width: "100%", height: "auto" }}
                    alt="react"
                    loading="lazy"
                    width={100}
                    height={100}
                  />
                  <SteamHomePage />
                </div>
              </div>

              <div
                className="_NEXTJS"
                id="ContainerHome"
                style={{
                  marginTop: "400px",
                  marginLeft: "50px",
                }}
              >
                <div className="Home_Circle">
                  <Image
                    src={next}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={100}
                    height={100}
                    alt="nextjs"
                    loading="lazy"
                  />
                  <SteamHomePage />
                </div>
              </div>

              <div>
                <div className="HomeDiv">
                  <h1>
                    <div className="animate__animated animate__bounce Animateiv0">
                      Hi there 👋 <br />
                    </div>
                    <div className="animate__animated animate__backInLeft Animateiv1">
                      <span>
                        {" "}
                        <p>I am,</p>SuFiaN MusTaFa
                      </span>
                    </div>
                    <div className="animate__animated animate__backInLeft Animateiv2">
                      Web Developer
                    </div>
                  </h1>
                  <div className="animate__animated animate__backInLeft Animateiv3">
                    <p
                      style={{
                        fontSize: "32px",
                        lineHeight: "1.2",
                        margin: "0 0 12px",
                      }}
                    >
                      I am <span>27 years old</span> , residing in the province
                      of <span>KPK</span> , <span>Pakistan</span>, with a strong
                      passion for <span>coding,</span> and currently a{" "}
                      <span>student</span> in my last semester of{" "}
                      <span> MCS (Computer Science)</span>.
                    </p>
                  </div>

                  <p className="animate__animated animate__backInLeft Animateiv4">
                    I am an experienced web developer with a passion for
                    creating <span> high-quality</span> ,{" "}
                    <span>user-friendly</span>, and{" "}
                    <span>responsive websites</span>. I am always improving my
                    skills to stay at the forefront of the industry. I have
                    hands-on experience in <span>backend development</span> as
                    well.
                  </p>
                  <div className="HomeInnerDiv animate__animated animate__backInLeft Animateiv5">
                    <p>
                      <span
                        style={{
                          color: "white",
                          textShadow: "1px 1px black",
                        }}
                      >
                        Some of the web technologies i mostly used are:
                      </span>{" "}
                    </p>
                    <div className="animate__animated animate__backInLeft Animateiv6">
                      <div>
                        <p>
                          <ReactRotatingText
                            items={[
                              "HTML",
                              "CSS",
                              "React",
                              " React Bootstrap",

                              " React MaterialUI  ",
                              " NextJS ",
                              " Sanity IO",
                              " AOS (animate on scroll) ",
                              " FramerMotion",
                              " Animate.css",

                              " NodeJS",
                              " MogoDB",
                              " ExpressJS",
                            ]}
                          />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="animate__animated animate__lightSpeedInRight  Animateiv7">
                    {showComponent ? (
                      <b className="glow-text star">Now scroll down</b>
                    ) : (
                      <>
                        <p
                          style={{
                            display: "inline-block",
                            position: "relative",
                            fontSize: "28px",
                            fontWeight: "bold",
                          }}
                        >
                          Looking to discover my background, work and technical
                          abilities <span>?</span>
                        </p>
                      </>
                    )}
                    <br />
                    <span
                      style={{
                        display: "inline-block",
                        marginBottom: "20px",
                      }}
                    >
                      {showComponent ? "Or Click to hide" : "Click to Explore "}
                    </span>{" "}
                    <b style={{ fontSize: "27px" }}>👉</b>
                    {/* <DoubleArrowIcon /> */}
                    <motion.button
                      animate={{
                        y: [-10, 10],
                      }}
                      transition={{
                        ease: "linear",
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{
                        cursor: "pointer",
                        background: "none",
                        backgroundColor: "none",
                        borderColor: "transparent",
                      }}
                      onClick={handleClick}
                      className="cursorp"
                    >
                      <MouseOutlinedIcon
                        onClick={handleClick}
                        className="cursorp"
                        style={button}
                      />
                    </motion.button>
                    <div
                      className="Homeresume animate__animated animate__backInRight"
                      style={{
                        display: showComponent ? "inline-block" : "none",
                        marginBottom: "20px",
                        marginRight: "50px",
                      }}
                    >
                      <span>Or download My </span> <PictureAsPdfIcon />
                      <span>Resume</span>
                      <Link
                        target="blank"
                        href="https://drive.google.com/file/d/1F3btm-Hr-TsAFp_73El6phulcrwhlUUT/view?usp=drive_link" // Use the imported Resume as the href // Replace with the actual path to your PDF file                        download="sufi.pdf" // Specify the desired downloaded file name
                        download="sufi.pdf" // Specify the desired downloaded file name
                      >
                        <motion.button
                          animate={{
                            y: [-9, 9],
                          }}
                          transition={{
                            ease: "linear",
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          style={{
                            cursor: "pointer",
                            background: "none",
                            backgroundColor: "none",
                            borderColor: "transparent",
                          }}
                          className="cursorp"
                        >
                          <FileDownloadOutlinedIcon
                            style={button}
                            className="cursorp"
                          />
                        </motion.button>
                      </Link>
                    </div>
                    <div
                      className="Homeresume animate__animated animate__backInRight"
                      style={{
                        display: showComponent ? "inline-block" : "none",
                      }}
                    >
                      <span>Or Email ME </span>
                      &nbsp;
                      <a
                        href="mailto:sufianmustafa0900@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <motion.button
                          animate={{
                            y: [-9, 9],
                          }}
                          transition={{
                            ease: "linear",
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          style={{
                            cursor: "pointer",
                            background: "none",
                            backgroundColor: "none",
                            borderColor: "transparent",
                          }}
                          className="cursorp"
                        >
                          <EmailOutlinedIcon
                            style={button}
                            className="cursorp"
                          />
                        </motion.button>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <SvgHomePage />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      {showComponent && (
        <>
          <ComponentA />
          <ComponentS />
          <ComponentP />
          <ComponentB />
          <ResponsiveShow />
          {isMatch ? (
            <>
              <SlideM />
            </>
          ) : (
            <>
              <Slideshowlg />
            </>
          )}
          <ComponentC />
        </>
      )}
    </>
  );
};

export default Home;
