import React from "react";
import Code from "./code";
import Comment from "../blogs2/page";
export const metadata = {
  title: "Contact Me - Sufian Mustafa",
  description:
    "Get in touch with Sufian Mustafa, a web developer based in Pakistan. Contact him via email at sufianmustafa0900@gmail.com or explore his social media profiles for professional connections.",
  author: "Sufian Mustafa",
};
const page = () => {
  return (
    <>
      <Code />
      <Comment />
    </>
  );
};

export default page;
