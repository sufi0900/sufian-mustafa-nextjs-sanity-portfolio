"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "animate.css";
import Grid from "@mui/material/Grid";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import SlideM from "../about/slideshowmbl";
import ComponentA from "../about/aboutonly";
import ComponentS from "../skills/skillcode";
import ComponentB from "../Homepageblogs/page";
import ComponentP from "../HomepageProjects/page";
import ComponentC from "../contact/code";
const Slideshowlg = dynamic(() => import("../about/slideshowlg"));
const ResponsiveShow = dynamic(() => import("../about/responsiveshow"));
import Link from "next/link";

const FirstComp = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const button = {
    fontSize: "58px",
    color: "white",
    position: "relative",
    top: "16px",
  };
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div suppressHydrationWarning>
      <Grid container className="flex">
        <Grid item lg={12} sm={12} container className="flex">
          <div
            style={{ marginBottom: "50px" }}
            className=" flex animate__animated animate__lightSpeedInRight  Animateiv7"
          >
            {/* {showComponent ? (
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
                    abilities
                    <span>?</span>
                  </p>
                </>
              )} */}
            <div className="showComp">
              <span
                className="flex "
                style={
                  {
                    // display: "inline-block",
                    // marginBottom: "20px",
                  }
                }
              >
                {showComponent ? "Or Click to hide" : "Click to Explore "}
              </span>{" "}
              {/* <b className="flex" style={{ fontSize: "27px" }}>
                👉
              </b> */}
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
                  // marginBottom: "30px",
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
            </div>
            {/* <div
                className="Homeresume animate__animated animate__backInRight"
                style={{
                  display: showComponent ? "inline-block" : "none",
                  marginBottom: "20px",
                  // marginRight: "50px",
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
                    <EmailOutlinedIcon style={button} className="cursorp" />
                  </motion.button>
                </a>
              </div> */}
          </div>

          {/* </div> */}
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
    </div>
  );
};

export default FirstComp;
