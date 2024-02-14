"use client";
import React from "react";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import { useParams } from "next/navigation";
import projectsData from "../project";
export default async function ProjectCardDetail() {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  // Find the blog object that matches the 'id' parameter
  const project = projectsData.find((project) => project._id === id);

  if (!project) {
    // Handle the case where the blog with the given 'id' doesn't exist
    return <div>project not found</div>;
  }

  return (
    <>
      <div>
        <>
          <br />
          <div className="About3" style={{ marginTop: "80px" }}>
            <h1 data-aos="zoom-in" data-aos-delay="100">
              {" "}
              <a href={project.link} className="link" target="site">
                Visit this site
              </a>{" "}
            </h1>{" "}
          </div>
          <Grid
            item
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                width: "97%",
              }}
              className="item itemabout projectone"
            >
              <div
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  display: "flex",
                  cursor: "pointer",
                }}
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <img
                  src={project.imageFile1}
                  alt="img not uploaded"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                  width={600}
                  height={600}
                />
              </div>
              <br />
              <div
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  display: "flex",
                }}
                className="ProjectTextSm"
              >
                <span
                  className="ProjectTopTextDiv itemabout item"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="500"
                >
                  <div className="About3">
                    {" "}
                    <h1 style={{ fontSize: "27px" }}> {project.title} </h1>
                  </div>

                  {project.toptext1}
                </span>
              </div>
            </div>

            <br />
            <br />
          </Grid>
          <br />
          <Grid
            item
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                width: "97%",
              }}
            >
              <div className="item itemabout projectone">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    zIndex: "1",
                  }}
                  className="ProjectTextSm2"
                >
                  <span
                    className="ProjectTopTextDiv item"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    data-aos-duration="500"
                  >
                    {project.toptext2}
                    <div className="About3">
                      {" "}
                      <h1 style={{ fontSize: "27px" }}>
                        {" "}
                        <a href={project.link} className="link" target="site">
                          Visit this site
                        </a>{" "}
                      </h1>
                    </div>
                  </span>
                </div>

                <br />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                  className="imagefile2"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <img
                    src={project.imageFile2}
                    alt="img not uploaded"
                    style={{
                      cursor: "pointer",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
          </Grid>
          <br />
          <br />
          <br />
          <Grid
            container
            spacing={1}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <br />
            <br />
            <br />

            <Grid item xs={11}>
              <div className="moreproject itemabout item">
                <div className="QuillDescription ">
                  <h1> More About this Project </h1>
                  <div
                    className="PrjectsDescription QuillDescription"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="500"
                  >
                    <p>{project.description} </p>
                    {project.images.map((image, index) => (
                      <li key={index}>
                        <img src={image} alt={`image${index}`} />
                      </li>
                    ))}
                  </div>
                </div>

                <br />

                <Divider />
                <br />
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="QuillDescription"
                    style={{ right: "5%", position: "relative" }}
                  >
                    <div>
                      <img
                        src={Project.imageFile2}
                        alt="img not uploaded"
                        style={imgStyle}
                      />
                    </div>
                  </div>
                </div> */}

                <br></br>
              </div>
              <br />
            </Grid>
          </Grid>{" "}
        </>
      </div>
    </>
  );
}
