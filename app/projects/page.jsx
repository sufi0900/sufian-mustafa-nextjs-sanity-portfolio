/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProjectCard from "./ProjectCard";
import Grid from "@mui/material/Grid";
import { client } from "../lib/sanity";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
export const metadata = {
  title: "Projects - Sufian Mustafa",
  description:
    "Explore Sufian Mustafa's portfolio projects. Get insights into the technologies and skills used in each project, and discover the innovative solutions developed.",
  author: "Sufian Mustafa",
};
async function getData() {
  const query = `*[_type == "project"]`;
  const data = await client.fetch(query);
  return data;
}
export default async function ProjectAll() {
  function sufianmustafawebdeveloperprojects() {
    return {
      __html: `   {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "Sufian Mustafa's Projects",
        "description": "Explore Sufian Mustafa's portfolio of projects showcasing web development expertise.",
        "url": "https://sufianmustafa.com/projects",
        "author": {
          "@type": "Person",
          "name": "Sufian Mustafa"
        },
        "datePublished": "2023-09-01T00:00:00Z",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sufianmustafa.com/projects"
        }
      }
  `,
    };
  }
  const data = await getData();
  return (
    <div style={{ minHeight: "100vh" }}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Projects - Sufian Mustafa</title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development. I have a wide range of experience in web development, with a
      focus on front-end technologies such as HTML, CSS, and
      JavaScript with a particular focus on ReactJS NextJS"
        />
        <meta name="author" content="Sufian Mustafa" />
        <meta property="og:title" content="Projects - Sufian Mustafa" />
        <meta
          property="og:description"
          content="Explore Sufian Mustafa's blog for insightful articles and updates on web development, technology, and more.."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
        />
        <meta property="og:url" content="https://sufianmustafa.com/projects" />
        <link rel="canonical" href="https://sufianmustafa.com/projects" />
        <NextSeo
          title="Projects - Sufian Mustafa"
          description="Explore Sufian Mustafa's portfolio projects. Get insights into the technologies and skills used in each project, and discover the innovative solutions developed."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/projects"
          openGraph={{
            title: "Projects - Sufian Mustafa",
            description:
              "Explore Sufian Mustafa's portfolio projects. Get insights into the technologies and skills used in each project, and discover the innovative solutions developed.",
            type: "WebPage",
            url: "https://sufianmustafa.com/projects",
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
        id="MyProjects-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdeveloperprojects()}
        key="MyProjects-jsonld"
      />
      <br />
      <br />
      <div className="about41" style={{ marginTop: "60px" }}>
        <h3>My projects</h3>
      </div>

      <div style={{ marginTop: "20px" }}>
        <div>
          <Grid container spacing={2} className="flex">
            <div className="About3" style={{ width: "90%" }}>
              <p>
                I am actively working on several projects in development on my
                local computer, which are currently in the final stages of
                development. While they have not yet been deployed to
                production, I have plans to carefully prepare and upload each
                project in the near future. As they reach completion, I will
                showcase them in the project sections.
              </p>
              <br />
            </div>
            {data.map((project) => (
              <ProjectCard
                data-aos="zoom-in"
                data-aos-delay="100"
                key={project._id}
                {...project}
              />
            ))}
            <br />
            <p style={{ fontSize: "20px" }}>
              More proJects coming soon IN SHAA ALLAH...{" "}
              <img
                src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1694015121/Screenshot_190_oaffgj.png"
                alt="img"
                style={{
                  width: "80%",
                  height: "auto",
                  border: "2px solid white",
                  borderRadius: "10px",
                }}
              />
            </p>
          </Grid>
          <br />

          <br />
        </div>
      </div>
    </div>
  );
}
