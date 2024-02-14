/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";

import About from "./aboutonly";
import { useMediaQuery, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import SlideM from "./slideshowmbl";
// import Slideshowlg from "./slideshowlg";
// import ResponsiveShow from "./responsiveshow";
const Slideshowlg = dynamic(() => import("./slideshowlg"));
const ResponsiveShow = dynamic(() => import("./responsiveshow"));

const aboutcode = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <About />

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
    </>
  );
};

export default aboutcode;
