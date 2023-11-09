import React from "react";
import { client } from "../lib/sanity";
import BlogCard from "./BlogCard";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
export const revalidate = false;
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Blogs - Sufian Mustafa",
  description:
    "Explore Sufian Mustafa's portfolio website blogs articles on web development, technology, and more. Stay updated with insightful articles and tutorials on various topics..",
  author: "Sufian Mustafa",
};
async function getData() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query);
  return data;
}
export default async function AllBlogs() {
  function sufianmustafawebdeveloperblogs() {
    return {
      __html: `  {
        "@context": "http://schema.org",
        "@type": "Blog",
        "name": "Sufian Mustafa's Blog",
        "description": "Explore Sufian Mustafa's blog for insightful articles and updates on web development, technology, and more.",
        "url": "https://sufianmustafa.com/blogs",
        "author": {
          "@type": "Person",
          "name": "Sufian Mustafa"
        },
        "datePublished": "2023-09-01T00:00:00Z",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sufianmustafa.com/blogs"
        }
      }
  `,
    };
  }
  const data = await getData();
  return (
    <div style={{ minHeight: "100vh" }} suppressHydrationWarning>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blogs - Sufian Mustafa</title>
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
        <meta property="og:url" content="https://sufianmustafa.com/blogs" />
        <link rel="canonical" href="https://sufianmustafa.com/blogs" />
        <NextSeo
          title="Blogs - Sufian Mustafa"
          description="Explore Sufian Mustafa's blog for insightful articles and updates on web development, technology, and more."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/blogs"
          openGraph={{
            title: "Blogs - Sufian Mustafa",
            description:
              "Explore Sufian Mustafa's blog for insightful articles and updates on web development, technology, and more.",
            type: "Blog",
            url: "https://sufianmustafa.com/blogs",
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
        dangerouslySetInnerHTML={sufianmustafawebdeveloperblogs()}
        key="MyBlogs-jsonld"
      />
      <br></br>
      <br></br>
      <div className="about41" style={{ marginTop: "60px" }}>
        <h3>My Blogs</h3>
      </div>
      <div>
        <br></br>
        <br></br>
        <div className="flex">
          <div style={{ width: "75%" }}>
            <Grid container spacing={2} className="flex">
              {data.map((post) => (
                <BlogCard
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  key={post._id}
                  {...post}
                />
              ))}
              <br />
            </Grid>

            <br></br>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
