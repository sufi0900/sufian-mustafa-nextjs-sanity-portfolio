"use client";
import React, { useEffect } from "react";

import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import skills from "./skill.js";
import { Box } from "@mui/material";
import AOS from "aos";

export default function IndexPage() {
  useEffect(() => {
    AOS.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  ></link>;
  return (
    <div style={{ minHeight: "100vh" }}>
      <>
        <style type="text/css">
          {`   
  
  .progress-bar{  background-color:  rgba(78, 78, 246, 0.647); 
  border-radius:20px;
  font-size:17px;
  color:black; }
  .progress{
  background-color: rgba(247, 90, 216, 0.696);
  border-radius:20px;
  }
  
  
  }
  
  `}
        </style>
      </>
      <br />
      <br />
      <Grid
        container
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <br />
        <br />
        <Grid
          item
          lg={9}
          sm={12}
          style={{ width: "100%", marginTop: "70px" }}
          className="flex"
        >
          <br />

          <div style={{ width: "90%" }} className="item itemabout">
            <div className="about41" style={{ overflow: "hidden" }}>
              <h3
                data-aos="flip-left"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <span style={{ float: "left" }} className="HeadingArrow">
                  <ArrowBackIosNewOutlinedIcon />
                  <ArrowBackIosNewOutlinedIcon />
                </span>
                My Skills
                <span style={{ float: "right" }} className="HeadingArrow">
                  {" "}
                  <ArrowForwardIosOutlinedIcon />
                  <ArrowForwardIosOutlinedIcon />
                </span>
              </h3>
            </div>
            <div className="About3">
              <p
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                {" "}
                In my journey as a developer, I have gained proficiency in a
                variety of technologies and tools. Below, you will find an
                overview of my skills, each accompanied by a percentage that
                reflects my level of expertise.
              </p>
            </div>
            <Box>
              <List sx={{ width: "100%" }}>
                {skills.map((skill) => (
                  <Link
                    key={skill._id}
                    href={`/skills/${skill._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItem className="SkillList">
                      <ListItemAvatar>
                        <Avatar
                          style={{
                            background: "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "60px", // Adjust the width as needed
                            height: "60px", // Maintain a square aspect
                          }}
                          data-aos="zoom-in-down"
                        >
                          <img
                            className="i-swing"
                            src={skill.imageFile}
                            alt=""
                            style={{ width: "100%", height: "auto" }}
                          />
                        </Avatar>
                      </ListItemAvatar>

                      <div className="progress" style={{ width: "100%" }}>
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          style={{ width: `${skill.percentage}%` }}
                          data-aos="zoom-in-right"
                        >
                          <span className="progress-label-color">{`${skill.percentage}%`}</span>
                        </div>
                      </div>
                      <p> {"  "} </p>
                      <ListItemText
                        primary={skill.title}
                        style={{ width: "30%" }}
                        className="ListItemTextSkill"
                        data-aos="zoom-in"
                      />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>

            <div className="About3">
              <p
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                {" "}
                My skills are not static; I am committed to continuous learning
                and growth, which enables me to adapt to new challenges and
                technologies effectively. As I evolve, I look forward to
                elevating my expertise across all areas of development. <br />
                Feel free to reach out if you like to discuss my skills further
                or if you have specific questions about any technology mentioned
                above.
              </p>
            </div>
            <br />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
