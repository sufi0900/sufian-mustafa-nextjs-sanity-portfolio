"use client";
import React from "react";

// const SvgHomePage = dynamic(() => import("./SvgHomePage"));

const Home = () => {
  const ReactRotatingText = require("react-rotating-text");

  return (
    <div
      suppressHydrationWarning
      style={{ color: "rgb(255, 0, 204)", display: "inline-block" }}
    >
      <ReactRotatingText
        style={{ color: "rgb(255, 0, 204)" }}
        items={[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          " React Bootstrap",

          " React MaterialUI  ",
          "Tailwind CSS",
          " NextJS ",
          " Sanity IO",
          "Prisma",
          " AOS (animate on scroll) ",
          " FramerMotion",

          " NodeJS",
          " MogoDB",
          " ExpressJS",
        ]}
      />
    </div>
  );
};

export default Home;
