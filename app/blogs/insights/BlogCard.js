/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
// import { urlFor } from "@/app/lib/sanityImageUrl";
import { urlFor } from "../../lib/sanityImageUrl";

import MoreVertIcon from "@mui/icons-material/MoreVert";

// import { motion } from "framer-motion";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Card } from "@mui/material";
export const revalidate = false;
export const dynamic = "force-dynamic";
export default function RecipeReviewCard({ postimg, title, slug }) {
  return (
    <>
      <Grid
        item
        xl={4}
        lg={4}
        md={6}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Link
          href={`/blogs/insights/${slug.current}`}
          className="themecard custom-input-color"
          style={{ textDecoration: "none" }}
        >
          <Card
            className="BlogCard ProjectCard"
            style={{ margin: "auto", padding: "auto", borderRadius: "10px" }}
          >
            <CardHeader
              avatar={
                <Avatar
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  sx={{ bgcolor: red[500] }}
                  aria-label="recipe"
                >
                  S
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                <div className="blogcardh1" style={{ display: "inline-block" }}>
                  <h1
                    data-aos="zoom-in"
                    data-aos-delay="150"
                    style={{ fontSize: "22px", margin: 0 }}
                  >
                    Sufian Mustafa
                  </h1>
                </div>
              }
            />
            {/* <p> {date}</p> */}
            <div className="CardHeading custom-input-color">
              {" "}
              <h1
                data-aos="zoom-in"
                data-aos-delay="200"
                style={{ left: "0%", fontSize: "22px" }}
              >
                {" "}
                {title}{" "}
              </h1>
            </div>

            <img
              src={urlFor(postimg).url()}
              alt="blogImg"
              style={{
                height: "250px",
                width: "97%",
                borderRadius: "20px",
              }}
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="300"
            />

            <Link
              href={`/blogs/insights/${slug.current}`}
              className="themecard custom-input-color"
            >
              <p
                data-aos="zoom-in"
                data-aos-delay="250"
                data-aos-duration="300"
                className=" themecard"
              >
                Read More..
              </p>
            </Link>

            <Divider />
            <br></br>
          </Card>
        </Link>
      </Grid>
    </>
  );
}
