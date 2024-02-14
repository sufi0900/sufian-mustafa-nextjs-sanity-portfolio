"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useRouter } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../lib/sanityImageUrl";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";

export const revalidate = false;
export const dynamic = "force-dynamic";

export default function BlogCardDetail({ data }) {
  const router = useRouter();

  const PortableTextComponent = {
    types: {
      image: ({ value }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <div>
          <img
            src={urlFor(value).url()}
            alt="Image"
            className="rounded-lg"
            width={100}
            height={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ),
      code: ({ value }) => (
        <>
          <Grid style={{ cursor: "auto", overflow: "auto" }}>
            <br />
            <CopyBlock
              text={value.code}
              theme={dracula}
              language="jsx" // specify the code language here
              showLineNumbers // if you want to display line numbers
              // use any code highlighting theme
            />
          </Grid>
          <br />
        </>
      ),
    },
  };

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
      <Grid
        className="bgwhite"
        spacing={1}
        padding={4}
        item
        style={{ marginTop: "70px", maxWidth: "800px", overflow: "hidden" }}
      >
        <div className="bgwhite">
          <h1 data-aos="zoom-in" style={{ textAlign: "justify" }}>
            {data.title}
          </h1>

          <ListItem
            className="SkillList"
            onClick={() => router.push("/blogs/how-to")}
          >
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
              primary={"Sufian Mustafa"}
              secondary={new Date(data._createdAt).toISOString().split("T")[0]}
              title="sufian"
              style={{ width: "30%" }}
              className="ListItemTextSkill"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </ListItem>

          <br />
          <div>
            {" "}
            <img
              src={urlFor(data.blogimg).url()}
              alt="Img"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <PortableText
            value={data.content}
            components={PortableTextComponent}
          />
        </div>
      </Grid>{" "}
    </Grid>
  );
}
