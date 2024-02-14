"use client";
import React from "react";

// const SvgHomePage = dynamic(() => import("./SvgHomePage"));

const Home = () => {
  const ReactRotatingText = require("react-rotating-text");

  return (
    <div suppressHydrationWarning style={{ display: "inline-block" }}>
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
