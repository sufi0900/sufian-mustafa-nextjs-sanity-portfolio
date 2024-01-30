import React from "react";
import Home from "../page";
import About from "../about/page";
import Skill from "../skills/page";
import Projects from "../projects/page";
import Blogs from "../blogs/page";
import Contact from "../contact/page";
// import UserLikes from "../blogs2/page";
const page = () => {
  return (
    <>
      <Home />
      {/* <UserLikes /> */}
      <About />
      <Skill />
      <Projects />
      <Blogs />
      <Contact />
    </>
  );
};

export default page;
