import React, { useState } from "react";
import { motion } from "framer-motion";
// import UserLikes3 from "../blogs2/page";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "animate.css";
import { useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import SteamHomePage from "./SteamHomePage";

import ComponentA from "../about/aboutonly";
import ComponentS from "../skills/skillcode";
import ComponentB from "../Homepageblogs/page";
import ComponentP from "../HomepageProjects/page";
import ComponentC from "../contact/code";

import css from "./css3.webp";
import react from "./react.webp";
import html from "./html5.webp";
import mern from "./mern.webp";
import next from "./next.webp";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import SlideM from "../about/slideshowmbl";
import SvgHomePage from "./SvgHomePage";
// const SvgHomePage = dynamic(() => import("./SvgHomePage"));
const Slideshowlg = dynamic(() => import("../about/slideshowlg"));
const ResponsiveShow = dynamic(() => import("../about/responsiveshow"));
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
    <div suppressHydrationWarning>
      <ReactRotatingText
        items={[
          "HTML",
          "CSS",
          "React",
          " React Bootstrap",

          " React MaterialUI  ",
          "Tailwind CSS",
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
    </div>
  );
};

export default Home;
