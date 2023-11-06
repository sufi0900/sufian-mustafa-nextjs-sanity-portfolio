"use client";
import React from "react";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const SvgHomePage = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      pathOffset: 1,
    },
    visible: {
      opacity: 0.5,
      pathLength: 1,
      pathOffset: 0,
    },
  };

  return (
    <Grid>
      <div
        className="svglines"
        style={{
          marginBottom: "200px",
          zIndex: "-1",
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="500"
          preserveAspectRatio="none"
          viewBox="0 0 1440 450"
          className="svgHome"
        >
          <g mask='url("#SvgjsMask1048")' fill="transparent">
            <motion.path
              d="M -892.3997132804116,348 C -796.4,295.2 -604.4,80.4 -412.39971328041156,84 C -220.4,87.6 -124.4,333 67.60028671958844,366 C 259.6,399 355.6,244.2 547.6002867195884,249 C 739.6,253.8 849.12,415.8 1027.6002867195884,390 C 1206.08,364.2 1357.52,174 1440,120"
              stroke="rgba(255, 0, 165, 1)"
              // stroke-width="10"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 4,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="motionPath"
              style={{ strokeWidth: "5px" }}
            ></motion.path>
          </g>
          <defs>
            <mask id="SvgjsMask1048">
              <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
          </defs>

          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="560"
            preserveAspectRatio="none"
            viewBox="0 0 1440 560"
          >
            <g mask='url("#SvgjsMask1116")' fill="none">
              <motion.path
                d="M -893.0622468898484,190 C -797.06,239.6 -605.06,440.4 -413.0622468898485,438 C -221.06,435.6 -125.06,189.4 66.9377531101515,178 C 258.94,166.6 354.94,394.2 546.9377531101516,381 C 738.94,367.8 848.33,113 1026.9377531101516,112 C 1205.55,111 1357.39,323.2 1440,376"
                stroke="rgb(78, 78, 246)"
                // stroke-width="5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="motionPath"
                style={{ strokeWidth: "5px" }}
              ></motion.path>
            </g>
            <defs>
              <mask id="SvgjsMask1116">
                <rect width="1440" height="560" fill="#ffffff"></rect>
              </mask>
            </defs>
          </motion.svg>
        </motion.svg>
      </div>
    </Grid>
  );
};

export default SvgHomePage;
