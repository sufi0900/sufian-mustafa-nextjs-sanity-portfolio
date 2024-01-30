"use client";

import React from "react";

// import UserLikes3 from "../blogs2/page";
import Grid from "@mui/material/Grid";
import "animate.css";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import SlideM from "../about/slideshowmbl";
import SvgHomePage from "./SvgHomePage";
import CodeIcon from "@mui/icons-material/Code";
const Slideshowlg = dynamic(() => import("../about/slideshowlg"));
const ResponsiveShow = dynamic(() => import("../about/responsiveshow"));
const SecondComp2 = () => {
  return (
    <div suppressHydrationWarning>
      <Grid className="flex">
        <Grid
          item
          lg={11}
          sm={11}
          // sx={{ padding: "0 60px" }}
          container
          className="home34"
        >
          <div className="HomeDiv">
            <h1>
              <div
                className="animate__animated animate__bounce Animateiv0"
                style={{ whiteSpace: "nowrap" }}
              >
                Hi there 👋{" "}
                <div className="animate__animated animate__backInLeft Animateiv1">
                  <p style={{ display: "inline-block" }}>
                    I am,{" "}
                    <span style={{ fontSize: "34px" }}>SuFiaN MusTaFa</span>
                  </p>{" "}
                </div>
                <div className="animate__animated animate__backInLeft Animateiv2">
                  Web Developer{" "}
                  <span style={{ fontSize: "34px" }}>
                    <CodeIcon style={{ fontSize: "34px" }} />
                  </span>
                </div>
              </div>
            </h1>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SecondComp2;
