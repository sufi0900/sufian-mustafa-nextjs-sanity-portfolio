"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import "animate.css";
import Grid from "@mui/material/Grid";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import SlideM from "../about/slideshowmbl";
import ComponentA from "../about/aboutonly";
import ComponentS from "../skills/skillcode";
import ComponentB from "../Homepageblogs/page";
import ComponentP from "../HomepageProjects/page";
import ComponentC from "../contact/code";
import ComponentT from "../Testimonial/Page";
const Slideshowlg = dynamic(() => import("../about/slideshowlg"));
const ResponsiveShow = dynamic(() => import("../about/responsiveshow"));

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
            <div className="showComp">
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
          </div>
        </Grid>
        <span className="flex" style={{ color: "white" }}>
          {showComponent ? "Click to hide" : "Click to Explore "}
        </span>{" "}
      </Grid>
      {showComponent && (
        <>
          <ComponentA />
          <ComponentS />
          <ComponentP />
          <ComponentB />
          {/* <ComponentT /> */}
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
