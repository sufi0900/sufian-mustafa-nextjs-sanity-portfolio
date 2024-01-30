/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImageUrl";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
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

export const metadata = {
  title: "Blogs - Sufian Mustafa",
  description:
    "Explore a collection of short and insightful web development tutorials by Sufian Mustafa. Level up your coding skills from beginner to advanced. Learn how to create, implement, and more with our easy-to-follow guides with practical tips and tricks.",
  author: "Sufian Mustafa",
};
async function getData() {
  const query = `*[_type == "blog"]`;
  const data = await client.fetch(query);
  return data;
}
export default async function AllPosts() {
  function webdeveloperblogs() {
    return {
      __html: `  {
        "@context": "http://schema.org",
        "@type": "Blog",
        "name": "Sufian Mustafa's Blog",
        "description": "Sufian Mustafa's developer tutorials cover a wide range of topics, from beginner to advanced. Get the most out of your web development skills with our short, informative tutorials. Learn how to create, implement, and more with our easy-to-follow guides",
        "url": "https://sufianmustafa.com/blogs/how-to",
        "author": {
          "@type": "Person",
          "name": "Sufian Mustafa"
        },
        "datePublished": "2023-09-01T00:00:00Z",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sufianmustafa.com/blogs/how-to"
        }
      }
  `,
    };
  }
  const data = await getData();
  function truncateText(text, maxLength) {
    const words = text.split(" ");
    const truncatedWords = words.slice(0, maxLength);
    const truncatedText = truncatedWords.join(" ");

    if (words.length > maxLength) {
      return truncatedText + " ...";
    } else {
      return truncatedText;
    }
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
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Web Developer - Blogs </title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development. I have a wide range of experience in web development, with a
      focus on front-end technologies such as HTML, CSS, and
      JavaScript with a particular focus on ReactJS NextJS"
        />
        <meta name="author" content="Sufian Mustafa" />
        <meta property="og:title" content="Blogs - Sufian Mustafa" />
        <meta
          property="og:description"
          content="Explore Sufian Mustafa's blog for insightful articles and updates on web development, technology, and more.."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
        />
        <meta
          property="og:url"
          content="https://sufianmustafa.com/blogs/how-to"
        />
        <link rel="canonical" href="https://sufianmustafa.com/blogs/how-to" />
        <NextSeo
          title="Blogs - Sufian Mustafa"
          description="Explore Sufian Mustafa's blog for insightful articles and updates on web development, technology, and more."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/blogs/how-to"
          openGraph={{
            title: "Blogs - Sufian Mustafa",
            description:
              "Explore Sufian Mustafa's blog for insightful articles and updates on web development, technology, and more.",
            type: "Blog",
            url: "https://sufianmustafa.com/blogs/how-to",
            images: [
              {
                url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1697725757/Screenshot_249_edsr2z.png",
                width: 800,
                height: 800,
                alt: "web developer Image",
              },
            ],
          }}
        />
      </Head>
      <Script
        id="MyBlogs-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={webdeveloperblogs()}
        key="MyBlogs-jsonld"
      />
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
              className="cursorp  animate__animated animate__backInLeft"
            />
          </ListItemAvatar>
          <ListItemText
            data-aos="zoom-in"
            primary={"Sufian Mustafa"}
            secondary={""}
            title="sufian"
            className="ListItemTextSkill"
          />
        </ListItem>
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          style={{ textAlign: "center" }}
        >
          {" "}
          Bio <br />
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="150"
          style={{ textAlign: "justify" }}
        >
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
          <Link
            style={{ textDecoration: "none" }}
            href={`/blogs/how-to/${blog.slug.current}`}
            key={blog._id}
          >
            <Card className="blog-card alt SkillList bgwhite blogsufi">
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
                <h1 data-aos="zoom-in" data-aos-delay="150">
                  {" "}
                  {truncateText(blog.title, 6)}
                </h1>
                <p data-aos="zoom-in" data-aos-delay="170">
                  {truncateText(blog.overview, 12)}
                </p>

                <p data-aos="zoom-in" className="read-more">
                  <Link href={`/blogs/how-to/${blog.slug.current}`}>
                    Read More
                  </Link>
                </p>
              </div>
            </Card>
          </Link>
        ))}
        <br />
        <br />
        <br />
      </Grid>
    </Grid>
  );
}
