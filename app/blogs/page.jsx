/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/navigation";

import { Grid } from "@mui/material";

import { OpenInNew } from "@mui/icons-material";

const page = () => {
  const router = useRouter();
  return (
    <Grid
      container
      style={{ minHeight: "100vh", display: "flex", justifyContent: "center" }}
    >
      <Grid
        xs={12}
        padding={3}
        style={{ marginTop: "70px", overflow: "hidden", maxWidth: "800px" }}
      >
        <br />
        <Card
          className="blogpagecard"
          onClick={() => router.push("/blogs/insights")}
        >
          <CardContent>
            <h1>
              Insights & Discussions <OpenInNew />{" "}
            </h1>
            <p variant="subtitle1" color="text.secondary" component="div">
              Explore insightful discussions & topics on latest web development
              trends and technologies.
            </p>
          </CardContent>
        </Card>
        <br />
        <br />
        <Card
          className="blogpagecard"
          onClick={() => router.push("/blogs/how-to")}
        >
          <CardContent>
            <h1>
              Practical Guides & Tutorials <OpenInNew />{" "}
            </h1>
            <p variant="subtitle1" color="text.secondary" component="div">
              Comprehensive tutorials on a variety of coding and design topics
            </p>

            {/* <CardMedia
              component="img"
              sx={{ width: "270px", height: "270px", display: "inline" }}
              image="https://res.cloudinary.com/dtvtphhsc/image/upload/v1697725757/Screenshot_249_edsr2z.png"
              alt="Live from space album cover"
            /> */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default page;
