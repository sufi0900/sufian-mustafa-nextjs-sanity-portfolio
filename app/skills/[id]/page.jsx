"use client";
import React from "react";

import skillsData from "../skill.js";
// import Spin from "spin";
import { useParams } from "next/navigation";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import "aos/dist/aos.css";

import "animate.css/animate.min.css";
import { Typography } from "@mui/material";

import { Helmet } from "react-helmet";

function SkillCardDetail() {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  // Find the skill object that matches the 'id' parameter
  const skill = skillsData.find((skill) => skill._id === id);

  if (!skill) {
    // Handle the case where the skill with the given 'id' doesn't exist
    return <div>Skill not found</div>;
  }

  // Return null or a loading indicator if skill hasn't loaded yet
  if (!skill) {
    return <div> loading..</div>;
  }
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  ></link>;
  const canonicalUrl = `https://sufianmustafa.com/#Skill/${skill._id}`;

  return (
    <div>
      <Helmet>
        <title>{skill.title} - Skill Sufian Mustafa</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Explore details about my skill: ${skill.title}. Learn about my expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more. ${skill.description}`}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div style={{ minHeight: "100vh" }}>
        <br />
        <br />
        <>
          <style type="text/css">
            {`   
  
  .progress-bar{  background-color:  rgba(78, 78, 246, 0.647); 
    font-size:17px;
  color:black; }
  .progress{
    background-color: rgba(247, 90, 216, 0.696);
  }
  
  
  }
  
  `}
          </style>
        </>
        <Grid
          container
          spacing={1}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <Grid item xs={11}>
            <div className="moreproject item itemabout">
              <div className="About3">
                <h1 data-aos="zoom-in" data-aos-delay="100">
                  {skill.title}
                </h1>
              </div>
              <br />
              <div className="flex">
                <div className="flex" data-aos="zoom-in" data-aos-delay="100">
                  <AnimatedProgressProvider
                    valueStart={1}
                    valueEnd={skill.percentage}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                  >
                    {(percentage) => {
                      const roundedPercentage = Math.round(percentage);
                      const containerSize = 330; // Set the desired container size
                      const imageSize = containerSize - 160; // Adjust the image size as needed

                      return (
                        <div
                          style={{
                            width: containerSize,
                            height: containerSize,
                          }}
                        >
                          <CircularProgressbarWithChildren
                            value={roundedPercentage}
                            styles={buildStyles({
                              textColor: "black",
                              pathColor: "rgba(78, 78, 246, 0.647)",
                              border: "1px solid black",
                              trailColor: "rgba(247, 90, 216, 0.696)",
                              pathTransition: "none",
                              width: containerSize, // Set the width
                              height: containerSize, // Set the height
                            })}
                          >
                            <img
                              style={{
                                width: imageSize,
                                height: imageSize,
                                borderRadius: "50%",
                              }}
                              src={skill.imageFile}
                              alt="sufi"
                            />
                            <div style={{ fontSize: 12, marginTop: 5 }}>
                              <Typography
                                sx={{ fontSize: "26px" }}
                                className="custom-input-color"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                              >
                                {`${roundedPercentage}%`}
                              </Typography>
                            </div>
                          </CircularProgressbarWithChildren>
                        </div>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>

              <br></br>

              <ListItem
                data-aos="zoom-in"
                data-aos-delay="100"
                style={{
                  width: "90%",
                  position: "relative",
                  left: "5%",

                  textAlign: "center",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    style={{
                      height: "60px",
                      width: "60px",
                      background: "none",
                    }}
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
                  >
                    <span className="progress-label-color">{`${skill.percentage}%`}</span>
                  </div>
                </div>
              </ListItem>

              <div className="QuillDescription">
                <div className="QuillDescription" style={{ width: "100%" }}>
                  <p data-aos="zoom-in" data-aos-delay="100">
                    {skill.description}
                  </p>
                  {skill.images.map((image, index) => (
                    <li key={index}>
                      <img src={image} alt={`image${index}`} />
                    </li>
                  ))}
                </div>
              </div>
              {/* <div className="About3 PrjectsDescription QuillDescription">
                <p>{skill.description}</p>
                {skill.images.map((image, index) => (
                  <li key={index}>
                    <img src={image} alt={`image${index}`} />
                  </li>
                ))}
              </div> */}
              {/* <div
                className="QuillDescription"
                style={{ right: "5%", position: "relative" }}
              >
                {" "}
                {skill.images.map((image, index) => (
                  <li key={index}>
                    <img src={image} alt={`image${index}`} />
                  </li>
                ))}
              </div> */}
              <br></br>
            </div>
          </Grid>
        </Grid>{" "}
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default SkillCardDetail;
