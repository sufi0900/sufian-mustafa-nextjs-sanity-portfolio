// ServiceSection.js
"use client";
import React, { useState } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import {
  Speed as SpeedIcon,
  SettingsApplications as SettingsApplicationsIcon,
  Search as SearchIcon,
  BugReport as BugReportIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";

const services = [
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "UI/UX Design",
    description:
      "Building user interfaces with modern frameworks like React JS and Next Js. Utilizing HTML, CSS, and JavaScript to create responsive and interactive web applications.",
  },
  {
    icon: <StorageIcon fontSize="large" />,
    title: "API Integration:",
    description:
      "Creating robust server-side logic and APIs using Node.js, Express, Prisma, Sanity.IO etc.",
  },
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Full Stack Development",
    description:
      "Combining both frontend and backend to deliver end-to-end solutions.",
  },

  {
    icon: <StorageIcon fontSize="large" />,
    title: "Database Management",
    description:
      "Designing and optimizing databases for efficient data storage and retrieval.",
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "Performance Optimization ",
    description:
      "Ensure your website loads quickly and delivers a smooth user experience, even with high traffic. I optimize code, databases, and servers for peak performance",
  },
  {
    icon: <SettingsApplicationsIcon fontSize="large" />,
    title: "Content Management System (CMS) Integration ",
    description:
      "Simplify content creation and management with user-friendly CMS solutions like Sanity.io. Empower your team to update content easily.",
  },
  {
    icon: <SearchIcon fontSize="large" />,
    title: "SEO Optimization",
    description:
      "Improve your website's visibility in search engine results and attract more organic traffic with strategic SEO techniques",
  },
  {
    icon: <BugReportIcon fontSize="large" />,
    title: "Testing and Debugging",
    description:
      "Conducting thorough testing and debugging to ensure code quality and reliability.",
  },
  {
    icon: <CloudUploadIcon fontSize="large" />,
    title: "DevOps and Deployment",
    description:
      "Implementing CI/CD pipelines, ensuring smooth deployments, and system monitoring. Deploying websites on platforms like Vercel.",
  },
];

const ServiceSection = () => {
  //   const paperStyle = {
  //     padding: "20px",
  //     textAlign: "center",
  //     height: "100%",
  //     color: "rgb(255, 0, 204)",
  //     textShadow: "1px 1px 1px black",
  //     background: "rgba(255, 255, 255, 0.2)",
  //     borderRadius: "16px",
  //     boxShadow:
  //       "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
  //     backdropFilter: "blur(5px)",
  //     WebkitBackdropFilter: "blur(5px)",
  //     border: "2px solid rgba(255, 255, 255, 0.3)",
  //     transition: "background-color 0.3s ease-in-out",
  //     cursor: "pointer",
  //     "&:hover": {
  //       background: "rgba(255, 255, 255, 0.3)",
  //     },
  //   };

  return (
    <Container>
      <div className="About3 ts" data-aos="zoom-in">
        {" "}
        <h1> Services</h1>
        <br />
      </div>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div style={{ padding: "10px" }} className="services">
              {/* <Paper > */}
              {service.icon}
              <Typography
                color="white"
                variant="h4"
                align="center"
                gutterBottom
              >
                {service.title}
              </Typography>
              <Typography variant="h6" color="white" align="center">
                {service.description}
              </Typography>
              {/* </Paper> */}
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceSection;
