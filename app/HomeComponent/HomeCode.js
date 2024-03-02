/* eslint-disable react/no-unescaped-entities */
// "use client";
import React from "react";

import CodeIcon from "@mui/icons-material/Code";
import Rotate from "./HomeCOdeText";
import SteamHomePage from "./SteamHomePage";

import css from "./css3.webp";
import react from "./react.webp";
import html from "./html5.webp";
import mern from "./mern.webp";
import next from "./next.webp";

import Image from "next/image";

import SvgHomePage from "./SvgHomePage";
import Avatar from "@mui/material/Avatar";
import sufi from "./sufi.webp";
import pk from "./pk2.png";
// const SvgHomePage = dynamic(() => import("./SvgHomePage"));
import UserLikes3 from "../blogs2/page";
const Home = () => {
  // const ReactRotatingText = require("react-rotating-text");

  return (
    <div suppressHydrationWarning>
      <div className="_CSS" id="ContainerHome">
        <div className="Home_Circle ">
          <Image
            src={css}
            style={{ width: "100%", height: "auto" }}
            alt="css"
            width={100}
            height={100}
            loading="lazy"
          />

          <SteamHomePage />
        </div>
      </div>
      <div
        className="_JAVASCRIPT"
        style={{
          marginTop: "250px",
          marginBottom: "200px",
          marginLeft: "30px",
        }}
        id="ContainerHome"
      >
        <div className="Home_Circle">
          <Image
            src={mern}
            style={{ width: "90%", height: "auto" }}
            alt="javascript.png"
            loading="lazy"
            width={100}
            height={100}
          />
          <SteamHomePage />
        </div>
      </div>
      <div
        className="_HTML"
        style={{
          marginTop: "350px",
          marginLeft: "-400px",
        }}
        id="ContainerHome"
      >
        <div className="Home_Circle">
          <Image
            src={html}
            style={{ width: "100%", height: "auto" }}
            alt="html"
            width={100}
            height={100}
            loading="lazy"
          />
          <SteamHomePage />
        </div>
      </div>
      <div>
        <div
          className="_REACT"
          style={{
            marginTop: "200px",
            marginRight: "50px",
          }}
          id="ContainerHome"
        >
          <div className="Home_Circle">
            <Image
              src={react}
              style={{ width: "100%", height: "auto" }}
              alt="react"
              loading="lazy"
              width={100}
              height={100}
            />
            <SteamHomePage />
          </div>
        </div>
        <div
          className="_NEXTJS"
          id="ContainerHome"
          style={{
            marginTop: "100px",
            marginLeft: "10px",
          }}
        >
          <div className="Home_Circle">
            <Image
              src={next}
              style={{
                width: "100%",
                height: "auto",
              }}
              width={100}
              height={100}
              alt="nextjs"
              loading="lazy"
            />
            <SteamHomePage />
          </div>
        </div>
        <div>
          <div className="HomeDiv">
            <h1>
              <div
                className="animate__animated animate__bounce Animateiv0"
                style={{ whiteSpace: "nowrap" }}
              >
                Hi there 👋{" "}
                <div className="animate__animated animate__backInLeft Animateiv1">
                  <p>
                    I am, &nbsp;
                    <span style={{ fontSize: "34px" }}>
                      SuFiaN MusTaFa{" "}
                      <Avatar
                        style={{ display: "inline-block" }}
                        className="Tabmate__backInRight"
                      >
                        <Image
                          src={sufi}
                          style={{ width: "100%", height: "auto" }}
                          alt="sufi"
                          width={100}
                          height={100}
                          loading="lazy"
                        />
                      </Avatar>
                    </span>
                  </p>{" "}
                </div>
                <div className="animate__animated animate__backInLeft Animateiv2">
                  Full Stack Web Developer{" "}
                  <span>
                    <CodeIcon style={{ fontSize: "34px" }} />
                  </span>
                </div>
              </div>
            </h1>
            <div className="animate__animated animate__backInLeft Animateiv3">
              <p
                style={{
                  fontSize: "32px",
                  lineHeight: "1.2",
                  // margin: "0 0 12px",
                }}
              >
                Age: <span>27 </span> , residing in the province of{" "}
                <span>KPK</span> ,{" "}
                <span>
                  Pakistan{" "}
                  <Avatar
                    style={{ display: "inline-block" }}
                    className="Tabmate__backInRight"
                  >
                    <Image
                      src={pk}
                      style={{ width: "100%", height: "auto" }}
                      alt="sufi"
                      width={100}
                      height={100}
                      loading="lazy"
                    />
                  </Avatar>{" "}
                </span>
                , with a strong passion for <span>coding,</span>
                {/* and currently a <span>student</span> in
                my last semester of <span> MCS (Computer Science)</span>. */}
              </p>
            </div>
            <p className="animate__animated animate__backInLeft Animateiv4">
              {/* I am an experienced web developer with a passion for creating{" "}
              <span> high-quality</span> , <span>user-friendly</span>, and{" "}
              <span>responsive websites</span>. I have hands-on experience in{" "}
              <span>backend development</span> as well. */}
              I craft stunning static websites,{" "}
              <span> but that's just the beginning 😉</span>
              My superpower?{" "}
              <p style={{ fontWeight: "bold" }}>
                Transforming them into dynamic marvels 😍
              </p>{" "}
              with CMS magic <span>(Node.js, Sanity, Prisma )</span>. Think
              interactive, engaging, and SEO-friendly 🤝
            </p>
            <div className="HomeInnerDiv animate__animated animate__backInLeft Animateiv5">
              <p>
                <span
                  style={{
                    color: "white",
                    textShadow: "1px 1px black",
                  }}
                >
                  Some of the web technologies i mostly used are:{" "}
                  <div
                    // style={{ display: "flex", justifyContent: "space-between" }}
                    className="Likebtn animate__animated animate__backInLeft Animateiv6"
                  >
                    <p style={{ width: "40%" }}>
                      <Rotate />{" "}
                    </p>
                    <br />
                    <div className="likebtnmiddle"></div>

                    <div className="Likebtn2 animate__animated animate__backInRight Animateiv6">
                      {" "}
                      <UserLikes3 />
                    </div>
                  </div>
                </span>{" "}
              </p>
            </div>
            <div className="flex"></div>
          </div>{" "}
        </div>
      </div>
      <div className="svghome">
        <SvgHomePage />
      </div>
    </div>
  );
};

export default Home;
