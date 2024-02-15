/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/navigation";

import { Typography, Grid } from "@mui/material";

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
          className="blogpagecard ts1"
          onClick={() => router.push("/blogs/insights")}
        >
          <CardContent>
            <Typography color="white" variant="h4">
              Insights & Discussions <OpenInNew />{" "}
            </Typography>
            <Typography variant="h6" color="white" component="div">
              Explore insightful discussions & topics on latest web development
              trends and technologies.
            </Typography>
          </CardContent>
        </Card>
        <br />
        <br />
        <Card
          className="blogpagecard ts1"
          onClick={() => router.push("/blogs/how-to")}
        >
          <CardContent>
            <Typography color="white" variant="h4">
              Practical Guides & Tutorials <OpenInNew />{" "}
            </Typography>
            <Typography variant="h6" color="white" component="div">
              Comprehensive tutorials on a variety of coding and design topics
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default page;
