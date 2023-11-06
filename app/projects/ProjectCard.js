/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import Card from "@mui/material/Card";
import { urlFor } from "../lib/sanityImageUrl";
import CardActions from "@mui/material/CardActions";

import { motion } from "framer-motion";

import Grid from "@mui/material/Grid";
import Link from "next/link";

const project = {
  transition: "0.3s",
  borderRadius: "20px",
  overflow: "visible",
};

const ProjectCard = ({ title, projectimg1, slug }) => {
  return (
    <>
      <Grid
        item
        xl={3}
        lg={4}
        md={6}
        sm={12}
        xs={12}
        padding={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Link
          href={`/projects/${slug.current}`}
          className="themecard custom-input-color"
          style={{ textDecoration: "none" }}
        >
          <Card
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500"
            className="ProjectCard item"
            style={project}
          >
            <div
              className="ProjectCardInner"
              style={{
                position: "relative",
                bottom: "10px",
              }}
            >
              <motion.div
                className="Top_Circle"
                animate={{
                  y: [-10, 10],
                  background: [
                    "hsla(326, 100%, 50%, 1)",
                    "hsla(264, 100%, 50%, 1)",
                  ],
                }}
                transition={{
                  ease: "linear",
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>{" "}
              <h1
                style={{
                  left: "0%",
                  fontSize: "22px",
                  fontWeight: "bolder",
                  top: "12px",
                }}
                data-aos="zoom-in"
                data-aos-delay="130"
                data-aos-duration="350"
                className="projectcardtitle"
              >
                {title}
              </h1>
            </div>{" "}
            <img
              alt="img"
              src={urlFor(projectimg1).url()}
              style={{
                height: "270px",
                width: "97%",
                borderRadius: "10px",
              }}
              data-aos="zoom-in"
              data-aos-delay="160"
              data-aos-duration="350"
            />
            <Link
              href={`/projects/${slug.current}`}
              className="themecard custom-input-color"
            >
              <p
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="350"
                className="themecard"
              >
                Read More..
              </p>
            </Link>
            <motion.div
              className="Bottom_Circle"
              animate={{
                x: [10, -10],
                backgroundColor: [
                  "hsla(326, 100%, 50%, 1))",
                  "hsla(264, 100%, 50%, 1)",
                ],
              }}
              transition={{
                ease: "linear",
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>
          </Card>
        </Link>
      </Grid>
    </>
  );
};
export default ProjectCard;
