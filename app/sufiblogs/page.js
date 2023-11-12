/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { client } from "../lib/sanity";
import { urlFor } from "../lib/sanityImageUrl";

import {
  Grid,
  Card,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
export const revalidate = false;
export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == "blog"]`;
  const data = await client.fetch(query);
  return data;
}
export default async function AllPosts() {
  const data = await getData();
  function truncateText(text, maxLength) {
    const words = text.split(" ");
    const truncatedWords = words.slice(0, maxLength);
    return truncatedWords.join(" ");
  }
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
          />
        </ListItem>
        <p style={{ textAlign: "center" }}>
          Bio <br />
          Hi I am Sufian Mustafa a passionate Web developer who is continually
          exploring and mastering new frontend technologies. I share my learning
          journey through insightful posts to assist fellow developers. Always
          eager to stay up-to-date in web development, I love learning new
          things and sharing what I know to help fellow developers. Contributing
          to the developer community is something I find really fulfilling! Feel
          free to reach out and follow along as I continue to explore the latest
          in web development. Your engagement is valued, and I look forward to
          connecting with you!
        </p>
        {data.map((blog) => (
          <Card
            key={blog._id}
            className="blog-card alt SkillList bgwhite blogsufi"
          >
            <div className="meta bgwhite">
              <div
                className="photo"
                style={{
                  backgroundImage: `url(${urlFor(blog.blogimg).url()})`,
                }}
              />
              {/* <ul className="details">
                <li className="author">
                  <a href="#">Sufian Mustafa</a>
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
              </ul> */}
            </div>
            <div className="description bgwhite">
              <h1> {truncateText(blog.title, 5)}</h1>
              <p>{truncateText(blog.overview, 10)}</p>

              <p className="read-more">
                <Link href={`/sufiblogs/${blog.slug.current}`}>Read More</Link>
              </p>
            </div>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
