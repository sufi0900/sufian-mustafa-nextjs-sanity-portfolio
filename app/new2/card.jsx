/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import {
  Grid,
  Card,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const page = () => {
  const text =
    "Welcome to our step-by-step guide on creating a responsive navbar using React and Next.js, enriched with the elegance of Material-UI. A well-designed navbar is an essential part of any web application, providing users with easy access to different sections of your website. In this blog post, we will walk you through the process of building a responsive navbar that works seamlessly on both desktop and mobile devices";
  const truncatedText = text.split(" ").slice(0, 20).join(" ") + "...";
  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
      className="bgwhite"
    >
      <Grid
        className="bgwhite"
        spacing={1}
        padding={4}
        item
        style={{ marginTop: "70px", maxWidth: "800px", overflow: "hidden" }}
      >
        <ListItem className="SkillList">
          <ListItemAvatar>
            <Avatar
              style={{
                width: "60px", // Adjust the width as needed
                height: "60px",
              }}
              alt="logo lg"
              src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.preserve_transparency.progressive.sprite/v1693672396/logo_1_lk0neo.webp"
              sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
              className="cursorp Tab8 animate__animated animate__backInLeft"
            />
          </ListItemAvatar>
          <ListItemText
            primary={"Sufian Mustafa"}
            secondary={""}
            title="sufian"
            className="ListItemTextSkill"
            data-aos="zoom-in"
          />
        </ListItem>
        <p style={{ textAlign: "center" }}>{truncatedText}</p>

        <Card className="blog-card alt SkillList bgwhite blogsufi">
          <div className="meta bgwhite">
            <div
              className="photo"
              style={{
                backgroundImage:
                  "url(https://res.cloudinary.com/dtvtphhsc/image/upload/v1699450367/TailwindCSS_zz2xtz.png)",
              }}
            />
            <ul className="details">
              <li className="author">
                <a href="#">Jane Doe</a>
              </li>
              <li className="date">July. 15, 2015</li>
              <li className="tags">
                <ul>
                  <li>
                    <a href="#">Learn</a>
                  </li>
                  <li>
                    <a href="#">Code</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description bgwhite">
            <h1>
              {" "}
              Creating a Responsive Navbar in React/Next.js with Material-UI
            </h1>
            <p>{truncatedText}</p>
            <p className="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default page;
