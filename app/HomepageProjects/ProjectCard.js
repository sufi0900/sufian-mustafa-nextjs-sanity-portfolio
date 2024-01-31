"use client";
import React, { useRef, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Carousel } from "react-responsive-carousel";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  CardMedia,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
// import { urlFor } from "../lib/sanityImageUrl";
export const revalidate = false;
export const dynamic = "force-dynamic";

import Link from "next/link";
import { CalendarMonth } from "@mui/icons-material";

const Card2 = ({
  title,
  link,
  images = [],
  toptext1,
  startDate,
  technologies = [],
  endDate,
  readmore,
}) => {
  const settings = {
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 3000, // Adjust as needed to control the interval between slides
  };
  const marqueeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Stop scrolling
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Resume scrolling
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };
  const formattedStartDate = new Date(startDate).toLocaleDateString();
  const formattedEndDate = new Date(endDate).toLocaleDateString();
  return (
    <Grid
      item
      xl={12}
      lg={12}
      md={12}
      sm={12}
      xs={12}
      spacing={1}
      margin={2}
      sx={{
        display: "block",
      }}
    >
      <Card
        sx={{
          marginTop: "5px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="500"
        className="projectcardv1 item"
      >
        <Grid container className="flex">
          <Grid item xs={12} sm={12} lg={4} sx={{ alignItems: "stretch" }}>
            <Carousel {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <CardMedia
                    component="img"
                    src={image}
                    alt={`Project Image ${index}`}
                    sx={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </Carousel>
          </Grid>

          <Grid
            item
            sm={12}
            xs={12}
            lg={8}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ textAlign: "start", width: "70%" }}
                  className="themecard custom-input-color"
                >
                  {title &&
                    `${title.split(" ").slice(0, 10).join(" ")}${
                      title.split(" ").length > 10 ? " ..." : ""
                    }`}
                </Typography>
                <div style={{ float: "right" }}>
                  <Button
                    className="projectcardbtn"
                    variant="contained"
                    style={{ background: "rgb(253, 6, 204)" }}
                    startIcon={<OpenInNewIcon />}
                  >
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href={link}
                      className="projectcardbtn "
                      target="site"
                    >
                      {" "}
                      Live Preview
                    </a>
                  </Button>
                </div>
              </div>

              <List>
                <ListItem style={{ position: "relative", right: "15px" }}>
                  <ListItemText
                    primary={
                      <>
                        <p className="custom-input-color">
                          {toptext1 &&
                            `${toptext1.split(" ").slice(0, 18).join(" ")}${
                              toptext1.split(" ").length > 18 ? " ..." : ""
                            }`}
                        </p>
                        <br />
                        <Button
                          className="projectcardbtn"
                          variant="variant"
                          style={{ background: "blue", color: "white" }}
                          startIcon={<CalendarMonth />}
                        >
                          Project Duration:
                          <span
                            style={{
                              marginLeft: 3,
                              textShadow: "0.5px 0.5px 0.5px black",
                            }}
                          >
                            {startDate}
                          </span>
                        </Button>
                      </>
                    }
                    data-aos="zoom-in"
                    className="ListItemText"
                    style={{
                      color: "black",
                    }}
                  />
                </ListItem>
              </List>
            </CardContent>

            <CardActions
              sx={{
                marginTop: "auto",
                padding: "5px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ textAlign: "start", width: "100%" }}
                variant="h5"
                gutterBottom
                className="custom-input-color"
              >
                Technologies used in this project:
              </Typography>
              <marquee
                ref={marqueeRef}
                style={{ width: "40%" }}
                direction="left"
                behavior="scroll"
                scrollamount={isHovered ? "0" : "5"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {technologies.map((tech, index) => (
                  <Typography
                    key={index}
                    className="bgch custom-input-color"
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                    }}
                  >
                    {tech}
                  </Typography>
                ))}
              </marquee>
              <div style={{ float: "right", width: "60%" }}>
                <Link href={readmore}>
                  <div style={{ float: "right" }}>
                    <Button
                      className="projectcardbtn"
                      variant="contained"
                      style={{ background: "rgba(59, 59, 254, 0.974)" }}
                      startIcon={<ReadMoreIcon />}
                    >
                      Read More
                    </Button>
                  </div>
                </Link>
              </div>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Card2;
