/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";

// import { motion } from "framer-motion";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Card } from "@mui/material";

export default function RecipeReviewCard({ imageFile, title, _id }) {
  return (
    <>
      <Grid
        item
        lg={4}
        sm={6}
        xl={3}
        md={4}
        xs={12}
        padding={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Link
          href={`/Homepageblogs/${_id}`}
          className="themecard custom-input-color"
          style={{ textDecoration: "none" }}
        >
          <Card
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
            className="BlogCard ProjectCard "
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
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
                  <h1 style={{ fontSize: "22px", margin: 0 }}>
                    Sufian Mustafa
                  </h1>
                </div>
              }
            />
            {/* <p> {date}</p> */}
            <div className="CardHeading custom-input-color">
              {" "}
              <h1 style={{ left: "0%", fontSize: "22px" }}> {title} </h1>
            </div>

            <img
              src={imageFile}
              alt="blogImg"
              style={{
                height: "250px",
                width: "97%",
                borderRadius: "20px",
              }}
            />

            <Link
              href={`/Homepageblogs/${_id}`}
              className="themecard custom-input-color"
            >
              <p
                data-aos="zoom-in"
                data-aos-delay="240"
                data-aos-duration="400"
                className="themecard"
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
