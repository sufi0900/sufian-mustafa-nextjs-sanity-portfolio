"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import Grid from "@mui/material/Grid";
import projects from "./project";
import Link from "next/link";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export default function ProjectAll() {
  const button = {
    fontSize: "38px",
    color: "rgba(15, 15, 251, 0.878)",
    position: "relative",
    top: "10px",
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <br />
      <br />

      <div style={{ marginTop: "20px" }}>
        <div className="flex">
          <div
            className="item itemabout projectdiv"
            style={{ textAlign: "justify" }}
          >
            <div
              data-aos="zoom-in"
              data-aos-delay="109"
              data-aos-duration="450"
              className="about41"
              style={{ marginTop: "5px" }}
            >
              <h3>My projects</h3>
            </div>
            <Grid container spacing={2} className="flex">
              <div className="About3 flex">
                <p
                  data-aos="zoom-in"
                  data-aos-delay="110"
                  data-aos-duration="450"
                  style={{ fontSize: "20px" }}
                >
                  I am actively working on several projects in development on my
                  local computer, which are currently in the final stages of
                  development. While they have not yet been deployed to
                  production, I have plans to carefully prepare and upload each
                  project in the near future. As they reach completion, I will
                  showcase them in the project sections.
                </p>
              </div>
              {projects.map((project) => (
                <ProjectCard
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  key={project._id}
                  {...project}
                />
              ))}
            </Grid>
            <div className="flex">
              <div
                className="Homeresume animadte__animated animate__backInRight About3 flex"
                style={{
                  marginBottom: "20px",
                }}
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="450"
              >
                <Link href="/projects" style={{ textDecoration: "none" }}>
                  <h2 className="button-85">
                    Explore More Projects &nbsp;
                    <ReadMoreIcon style={button} className="cursorp" />
                  </h2>{" "}
                </Link>
              </div>
            </div>
          </div>
          <br />

          <br />
        </div>
      </div>
    </div>
  );
}
