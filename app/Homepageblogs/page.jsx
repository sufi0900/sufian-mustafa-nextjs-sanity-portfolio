"use client";
import React from "react";
import BlogCard from "./BlogCard";
import Grid from "@mui/material/Grid";
import blogs from "./blog";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Link from "next/link";
import AnimatedDiv from "../about/AnimateDIv";
export default function AllBlogs() {
  const button = {
    fontSize: "38px",
    color: "rgba(15, 15, 251, 0.878)",
    position: "relative",
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <br></br>
      <br></br>

      <div>
        <br></br>
        <br></br>
        <div>
          <div className="flex">
            <div
              className="item itemabout projectdiv"
              style={{ textAlign: "justify" }}
            >
              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="450"
                className="about41"
                style={{ marginTop: "5px" }}
              >
                <h3>
                  {" "}
                  My Blogs
                  <span
                    style={{
                      float: "right",
                      marginTop: "5px",
                    }}
                    className="searchicon0"
                  >
                    {" "}
                  </span>
                </h3>
              </div>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {blogs.map((blog) => (
                  <BlogCard key={blog._id} {...blog} />
                ))}
              </Grid>
              <div className="flex">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  data-aos-duration="450"
                  className="Homeresume animadte__animated animate__backInRight About3 flex"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <Link href="/projects" style={{ textDecoration: "none" }}>
                    <h2 style={{ padding: "10px" }} className="button-85">
                      Explore More Blogs
                      <ReadMoreIcon
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        style={button}
                        className="cursorp"
                      />
                    </h2>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
