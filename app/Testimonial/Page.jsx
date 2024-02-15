"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const testimonials = [
  {
    name: "John Doe",
    // position: "Web Developer",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat nisi nec turpis dapibus, vitae bibendum mauris fringilla.",
    image: "h", // Replace with the actual image URL
  },
  {
    name: "Jane Smith",
    // position: "Designer",
    testimonial:
      "Sed eu tortor sit amet quam lacinia feugiat. Quisque interdum tincidunt metus, at bibendum lacus tristique vel. In hac habitasse platea dictumst.",
    image: "", // Replace with the actual image URL
  },
  {
    name: "Jane Smith",
    // position: "Designer",
    testimonial:
      "Sed eu tortor sit amet quam lacinia feugiat. Quisque interdum tincidunt metus, at bibendum lacus tristique vel. In hac habitasse platea dictumst.",
    image: "", // Replace with the actual image URL
  },
  {
    name: "Jane Smith",
    // position: "Designer",
    testimonial:
      "Sed eu tortor sit amet quam lacinia feugiat. Quisque interdum tincidunt metus, at bibendum lacus tristique vel. In hac habitasse platea dictumst.",
    image: "", // Replace with the actual image URL
  },
];

const TestimonialCarousel = () => {
  const responsiveSettings = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container sx={{ padding: "10px" }}>
      <div className="ts ContactMeHeading">
        <h1>
          <span
            style={{
              float: "left",
            }}
            className="HeadingArrow"
          >
            <ArrowBackIosNewOutlinedIcon />
            <ArrowBackIosNewOutlinedIcon />
          </span>
          Testimonial
          <span
            style={{
              float: "right",
            }}
            className="HeadingArrow"
          >
            <ArrowForwardIosOutlinedIcon />
            <ArrowForwardIosOutlinedIcon />
          </span>
        </h1>
      </div>
      <Carousel
        infinite={true}
        swipeable
        autoPlay
        responsive={responsiveSettings}
      >
        {testimonials.map((testimonial, index) => (
          <div style={{ padding: "15px", marginTop: "10px" }} key={index}>
            <Card
              className="services"
              sx={{
                borderRadius: "15px",
                maxWidth: 300,
                textAlign: "center",
                color: "white",
              }}
            >
              <CardContent>
                <div className="flex">
                  <Avatar
                    src={testimonial.image}
                    alt={`${testimonial.name}'s Image`}
                    sx={{ width: 100, height: 100 }}
                  />
                </div>
                <Typography variant="h5" gutterBottom>
                  {testimonial.name}
                </Typography>

                <Typography paragraph>{testimonial.testimonial}</Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialCarousel;
