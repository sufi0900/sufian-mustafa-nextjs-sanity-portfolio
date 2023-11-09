/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { client } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanityImageUrl";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";

import { CopyToClipboard } from "react-copy-to-clipboard";
import Head from "next/head";
import Script from "next/script";
export const revalidate = false;
export const dynamic = "force-dynamic";
async function getData(slug) {
  const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

// export async function generateMetadata({ params }) {
//   const data = await getData(params.slug);
//   return {
//     title: `${data.title}`,
//     description: data.description,
//     author: "Sufian Mustafa",
//   };

// }

export default async function BlogCardDetail({ params }) {
  const data = await getData(params.slug);
  const PortableTextComponent = {
    types: {
      image: ({ value }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <div>
          <img
            src={urlFor(value).url()}
            alt="Image"
            className="rounded-lg"
            width={800}
            height={800}
          />
        </div>
      ),
      code: ({ value }) => (
        <div>
          <CodeBlock
            text={value.code}
            language="jsx" // specify the code language here
            showLineNumbers // if you want to display line numbers
            theme={dracula} // use any code highlighting theme
          />
        </div>
      ),
    },
  };
  const canonicalUrl = `https://sufianmustafa.com/post/${params.slug}`;

  // Set title, description, and other SEO metadata
  const title = `${data.title}`;
  const description = data.description;

  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
      className="bgwhite"
      lg={12}
      md={12}
      sm={12}
      xl={12}
      xs={12}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Script
        title={title}
        description={description}
        canonical={canonicalUrl}
      />
      <Grid
        className="bgwhite"
        spacing={1}
        padding={4}
        item
        style={{ marginTop: "70px", maxWidth: "800px", overflow: "hidden" }}
      >
        <div className="bgwhite">
          <h1 style={{ textAlign: "justify" }}>{data.title}</h1>
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
              secondary={"9 min read.1 day ago"}
              title="sufian"
              style={{ width: "30%" }}
              className="ListItemTextSkill"
              data-aos="zoom-in"
            />
          </ListItem>

          <br />
          <div>
            <img
              src={urlFor(data.postimg).url()}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <PortableText
            value={data.content}
            components={PortableTextComponent}
          />

          {/* <p>
            Welcome to our step-by-step guide on creating a responsive navbar
            using React and Next.js, enriched with the elegance of Material-UI.
            A well-designed navbar is an essential part of any web application,
            providing users with easy access to different sections of your
            website. In this blog post, we will walk you through the process of
            building a responsive navbar that works seamlessly on both desktop
            and mobile devices.
          </p>
          <h1>Code Example</h1>
          <CodeBlock
            text={code}
            language="javascript" // Specify the code language
            showLineNumbers // Optional, enable line numbers
            wrapLines // Optional, wrap long lines
            theme={dracula}
          /> */}
        </div>
      </Grid>{" "}
    </Grid>
  );
}
