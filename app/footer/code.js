/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Grid, Container } from "@mui/material";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
import { Tooltip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  AddReaction,
  ArrowUpwardSharp,
  GitHub,
  Info,
  LinkedIn,
  LocationCity,
  Mail,
  MailOutline,
  ManageAccounts,
  Phone,
  QuestionAnswer,
  Timeline,
  WhatsApp,
} from "@mui/icons-material";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

// import { useCustomOptimistic } from "./useOptimistic";
// import ActionIcon from "./ActionIcon";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import Link from "next/link";

const Footer = () => {
  function sufianmustafawebdeveloperfooter() {
    return {
      __html: `  {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "Footer - Sufian Mustafa",
        "description": "Explore the footer section of Sufian Mustafa's portfolio website. Find links to social media profiles, additional resources, and more.",
        "url": "https://sufianmustafa.com/footer",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sufianmustafa.com/footer"
        }
      }
  `,
    };
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use smooth scrolling animation
    });
  };

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Footer - Sufian Mustafa</title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development. I have a wide range of experience in web development, with a
      focus on front-end technologies such as HTML, CSS, and
      JavaScript with a particular focus on ReactJS NextJS"
        />
        <meta name="author" content="Sufian Mustafa" />
        <meta property="og:title" content="My Portfolio - Sufian Mustafa" />
        <meta
          property="og:description"
          content="Frequently Asked Questions about Sufian Mustafa's portfolio website."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
        />
        <meta property="og:url" content="https://sufianmustafa.com/footer" />
        <link rel="canonical" href="https://sufianmustafa.com/footer" />
        <NextSeo
          title="Footer - Sufian Mustafa"
          description="Explore Sufian Mustafa's web development skills and expertise. Learn about a wide range of technical proficiencies, including front-end and back-end development, database management, and user interface design."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/footer"
          openGraph={{
            title: "Footer - Sufian Mustafa",
            description:
              "Explore the footer section of Sufian Mustafa's portfolio website. Find links to social media profiles, additional resources, and more.",
            type: "webpage",
            url: "https://sufianmustafa.com/footer",
            images: [
              {
                url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1697724712/Screenshot_247_iwn2h5.png",
                width: 800,
                height: 800,
                alt: "web developer Image",
              },
            ],
          }}
        />
      </Head>
      <Script
        id="Footer-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdeveloperfooter()}
        key="Footer-jsonld"
      />
      <footer className="new_footer_area bg_color glassEffect">
        <div className="new_footer_top">
          <Container>
            <Grid container spacing={3} justifyContent="center">
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div className="About3">
                  <ul
                    className="services-list site"
                    style={{ listStyle: "none" }}
                  >
                    <li>
                      {" "}
                      <h1 style={{ fontSize: "28px" }}>Connect with me</h1>
                    </li>
                  </ul>
                </div>
                <div className="footerpara" style={{ padding: "10px" }}>
                  <p>
                    Thank you for visiting my portfolio. Feel free to reach out
                    if you have any questions or collaboration ideas. I am here
                    to share my expertise with you. Let's craft your dream
                    website! Contact me today for a free consultation.
                  </p>
                  Let's chat! Find me on social media or send me an email.
                  <ul className="footerc1">
                    <li
                      style={{
                        marginBottom: "10px",
                        fontSize: "20px",
                        textShadow: "0.5px 0.5px 0.5px black",
                        color: "blue",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                        }}
                      >
                        Email:
                      </span>{" "}
                      sufianmustafa0900.com <MailOutline />
                    </li>
                    <li
                      style={{
                        marginBottom: "10px",
                        fontSize: "18px",
                        color: "blue",
                        textShadow: "0.5px 0.5px 0.5px black",
                      }}
                    >
                      <span style={{ color: "white" }}>Phone:</span> +92 3177
                      652064 <Phone />
                    </li>
                    <li
                      style={{
                        marginBottom: "10px",
                        fontSize: "18px",
                        color: "blue",
                        textShadow: "0.5px 0.5px 0.5px black",
                      }}
                    >
                      <span style={{ color: "white" }}>Address:</span> Pakistan
                      KPK (Mardan) <LocationOnIcon />
                    </li>
                    <li
                      className=""
                      style={{
                        marginTop: "10px",
                        textAlign: "start",
                        fontSize: "18px",
                        color: "blue",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "23px",
                          fontWeight: "bolder",
                          color: "white",
                        }}
                      >
                        Social Links:
                      </span>
                    </li>
                    <div className="">
                      <Tooltip title="LinkedIn" placement="top">
                        <Button
                          href="https://www.linkedin.com/in/sufian-mustafa-7a7845226/"
                          target="_blank"
                          rel="northerner"
                          style={{
                            color: "blue",
                            textShadow: "0.5px 0.5px 0.5px black",
                          }}
                          startIcon={<LinkedIn style={{ fontSize: "28px" }} />}
                        ></Button>
                      </Tooltip>
                      <Tooltip title="GitHub" placement="top">
                        <Button
                          href="https://github.com/sufi0900"
                          target="_blank"
                          rel="noreferrer"
                          startIcon={<GitHub style={{ fontSize: "28px" }} />}
                          style={{
                            color: "blue",
                            textShadow: "0.5px 0.5px 0.5px black",
                            fontSize: "28px",
                          }}
                        ></Button>
                      </Tooltip>
                      <Tooltip title="WhatsApp" placement="top">
                        <Button
                          href="https://api.whatsapp.com/send?phone=03177652064"
                          target="_blank"
                          rel="noreferrer"
                          startIcon={<WhatsApp style={{ fontSize: "28px" }} />}
                          style={{ color: "blue", padding: "2px" }}
                        ></Button>
                      </Tooltip>
                      <Tooltip title="Dev.to" placement="top">
                        <Button
                          href="https://dev.to/sufian"
                          target="_blank"
                          rel="noreferrer"
                          startIcon={
                            <LogoDevIcon style={{ fontSize: "28px" }} />
                          }
                          style={{ color: "blue", padding: "2px" }}
                        ></Button>
                      </Tooltip>
                    </div>
                  </ul>
                </div>
              </Grid>

              <Grid
                item
                spacing={3}
                padding={4}
                xs={12}
                sm={6}
                md={4}
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="500"
              >
                {/* Services */}

                <div className="About3" style={{ paddingLeft: "10px" }}>
                  <ul className="services-list">
                    <li style={{ listStyle: "none" }}>
                      {" "}
                      <h1 style={{ fontSize: "28px" }}>Services</h1>
                    </li>
                    <li>Responsive Web Design</li>
                    <li>Animation Web Design</li>
                    <li>React MUI</li>
                    <li>Bootstrap</li>
                    <li>NextJS</li>
                    <li>SANITY.IO</li>

                    <li>Full Stack Web Development</li>
                    <li>UX UI Design </li>
                    <li> Website Deployment </li>
                    <li> Website Performance </li>
                    <li> SEO</li>

                    <li>Bug Fixing and Troubleshooting</li>
                  </ul>
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <div className="About3">
                  <ul
                    className="services-list site"
                    style={{ listStyle: "none" }}
                  >
                    <li>
                      <div className="About3">
                        {" "}
                        <h1 style={{ fontSize: "28px" }}>Useful Links</h1>
                      </div>
                    </li>
                    <li>
                      <Link href="/faq">
                        FAQ <QuestionAnswer />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        About Me <Info />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/aboutmysite">
                        About My Site <Info />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects">
                        Projects <Timeline />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/skills">
                        My Skills <ManageAccounts />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/sufiblogs">
                        HelpFul Blogs <AddReaction />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Contact Info <Mail />{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Container>

          <div
            className="footer_bg"
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="500"
          >
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
            <div style={{ textAlign: "center", marginBottom: "-85px" }}>
              <Link
                href="/logo"
                className="logo-link"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <Grid
                  className="flex"
                  item
                  xs={12}
                  style={{ paddingBottom: "5px" }}
                >
                  <img
                    src="https://res.cloudinary.com/dtvtphhsc/image/upload/v1692819141/Images/logo_mjnbuh.png"
                    alt="logo"
                    style={{
                      width: "50px",
                      borderRadius: "40px",
                      position: "relative",

                      transition: "transform 0.3s", // Add a transition for smooth effect
                    }}
                    className="logo"
                  />
                </Grid>
              </Link>
              <Grid
                item
                xs={12}
                className="go-to-top"
                style={{ paddingBottom: "5px" }}
              >
                <Button
                  onClick={scrollToTop}
                  className="gototop button-85"
                  data-aos="zoom-in"
                  data-aos-delay="250"
                  data-aos-duration="500"
                  style={{
                    color: "white",
                    padding: "10px",
                    transition: "0.5s",
                  }}
                >
                  Go To Top <ArrowUpwardSharp />{" "}
                </Button>
              </Grid>
              <p className="footer-design-credit">
                Website designed and developed by Sufian Mustafa
              </p>

              <p>All rights reserved &copy; 2023</p>
            </div>
            <br />
            <br />
          </div>
        </div>
      </footer>
      <br />
    </div>
  );
};

export default Footer;
