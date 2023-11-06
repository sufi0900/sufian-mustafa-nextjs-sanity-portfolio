"use client";
import React, { useRef, useState } from "react";
import Head from "next/head";

import Script from "next/script";
import { NextSeo } from "next-seo";
import { Button, useMediaQuery, useTheme } from "@mui/material";

import emailjs from "@emailjs/browser";
import Footer from "../footer/code";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { motion } from "framer-motion";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import { Jquerry } from "../Jquerry";

const ContactMe = () => {
  function sufianmustafawebdevelopercontact() {
    return {
      __html: `      {
        "@context": "http://schema.org",
        "@type": "ContactPage",
        "name": "Contact Sufian Mustafa",
        "description": "Contact Sufian Mustafa for inquiries, collaborations, or to discuss web development projects. Reach out through the provided contact information.",
        "url": "https://sufianmustafa.com/contact",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sufianmustafa.com/contact"
        }
      }
  `,
    };
  }
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const firstRef = useRef(null);
  const emailRef = useRef(null);
  const lastRef = useRef(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ugauc93",
        "template_adfk5bp",
        form.current,
        "Jwo8Jvergs2aiHjIX"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfuly!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          firstRef.current.value = "";
          emailRef.current.value = "";
          lastRef.current.value = "";
        },

        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact Me - Sufian Mustafa</title>
        <meta
          name="description"
          content="Contact Sufian Mustafa for inquiries, collaborations, or to discuss web development projects. Reach out through the provided contact information."
        />
        <meta name="author" content="Sufian Mustafa" />
        <meta
          property="og:title"
          content="Sufian Mustafa - Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the work of Sufian Mustafa, a web developer with a passion for creating stunning web applications."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1694356123/Sufian-Mustafa-Web-Developer_en5jxl.png"
        />
        <meta property="og:url" content="https://sufianmustafa.com/contact" />
        <link rel="canonical" href="https://sufianmustafa.com/contact" />
        <NextSeo
          title="Contact Me - Sufian Mustafa"
          description=" Contact Sufian Mustafa for inquiries, collaborations, or to discuss web development projects. Reach out through the provided contact information."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/contact"
          openGraph={{
            title: "Contact Me - Sufian Mustafa",
            description:
              "Contact Sufian Mustafa for inquiries, collaborations, or to discuss web development projects. Reach out through the provided contact information.",
            type: "webpage",
            url: "https://sufianmustafa.com/contact",
            images: [
              {
                url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1697724760/Screenshot_248_tpjuk3.png",
                width: 800,
                height: 800,
                alt: "Contact Me - Sufian Mustafa",
              },
            ],
          }}
        />
      </Head>
      <Script
        id="ContactMe-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdevelopercontact()}
        key="ContactMe-jsonld"
      />
      <Jquerry />

      <div className="flex">
        <div
          style={{ marginTop: "90px", width: "97%" }}
          className="itemcontact"
        >
          <div>
            <div className="ContactMeHeading">
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
                Contact Me
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
              <div className="contactform">
                <ToastContainer />
                <form
                  className="contactform_container item"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div>
                    <h1
                      data-aos="flip-left"
                      data-aos-delay="200"
                      data-aos-duration="500"
                    >
                      {" "}
                      Contact form{" "}
                    </h1>{" "}
                    <div className="form form__1" data-aos="zoom-in-right">
                      <label htmlFor="name" className="form__label">
                        Full name
                      </label>{" "}
                      <input
                        ref={firstRef}
                        type="text"
                        className="form__input"
                        name="user_name"
                        placeholder
                        id="name"
                        required
                        onChange={(event) => setFirstName(event.target.value)}
                      />{" "}
                    </div>{" "}
                    <div className="form form__2" data-aos="zoom-in-right">
                      <label htmlFor="email" className="form__label">
                        Email address{" "}
                      </label>{" "}
                      <input
                        ref={emailRef}
                        type="email"
                        name="user_email"
                        className="form__input"
                        placeholder
                        id="email"
                        required
                        onChange={(event) => setEmail(event.target.value)}
                      />{" "}
                    </div>{" "}
                    <div className="form form__3" data-aos="zoom-in-right">
                      <label htmlFor="message" className="form__label">
                        Your message{" "}
                      </label>{" "}
                      <textarea
                        ref={lastRef}
                        type="text"
                        name="message"
                        className="form__input"
                        placeholder
                        id="message"
                        required
                        onChange={(event) => setLastName(event.target.value)}
                      />{" "}
                    </div>
                    <div>
                      <Button
                        className="form__btn"
                        type="submit"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                      >
                        <span class="form__btn--visible">
                          <motion.p
                            animate={{
                              x: [4, -4],
                            }}
                            transition={{
                              ease: "linear",
                              duration: 1.6,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          >
                            Submit ➡️
                          </motion.p>
                        </span>
                        <span class="form__btn--invisible">
                          <motion.p
                            animate={{
                              x: [4, -4],
                            }}
                            transition={{
                              ease: "linear",
                              duration: 1.6,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            style={{ position: "relative", bottom: "15px" }}
                          >
                            Msg Sent ✅
                          </motion.p>
                        </span>
                      </Button>
                      {/* <button class="form__btn">
                        <span class="form__btn--visible">
                          <p>Submit</p>
                          <i class="material-icons">arrow_forward</i>
                        </span>
                        <span class="form__btn--invisible">Message sent!</span>
                      </button> */}
                    </div>
                  </div>

                  {isMatch ? (
                    <></>
                  ) : (
                    <>
                      <div
                        className="containerForm-mail"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-duration="500"
                      >
                        <div className="mail ">
                          <div className="mail__back" />
                          <div className="mail__top " />
                          <div className="mail__letter">
                            <div className="mail__letter-square"> </div>{" "}
                            <div className="mail__letter-lines"> </div>{" "}
                          </div>
                          <div className="mail__left" />
                          <div className="mail__right" />
                          <div className="mail__bottom" />
                        </div>{" "}
                      </div>
                    </>
                  )}
                </form>{" "}
              </div>{" "}
              <br></br>
              <br></br>
              <motion.div
                className="GmailImg"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <motion.div
                  class="wrap"
                  animate={{
                    x: [20, -20],
                    y: [-20, 20],
                  }}
                  transition={{
                    ease: "linear",
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <a
                    href="mailto:sufianmustafa0900@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.button class="button i-swing">
                      Email Me!
                    </motion.button>
                  </a>
                  <defs>
                    <linearGradient
                      id="sw-gradient-0"
                      x1={0}
                      x2={0}
                      y1={1}
                      y2={0}
                    >
                      <stop
                        stopColor="rgba(55.158, 157.418, 141.83, 1)"
                        offset="0%"
                      />
                      <stop
                        stopColor="rgba(91.798, 216.615, 189.132, 1)"
                        offset="100%"
                      />
                    </linearGradient>
                  </defs>{" "}
                  <path
                    style={{ transform: "translate(0, 0px)", opacity: 1 }}
                    fill="url(#sw-gradient-0)"
                    d="M0,196L120,236.8C240,278,480,359,720,359.3C960,359,1200,278,1440,261.3C1680,245,1920,294,2160,318.5C2400,343,2640,343,2880,343C3120,343,3360,343,3600,285.8C3840,229,4080,114,4320,122.5C4560,131,4800,261,5040,326.7C5280,392,5520,392,5760,334.8C6000,278,6240,163,6480,138.8C6720,114,6960,180,7200,220.5C7440,261,7680,278,7920,261.3C8160,245,8400,196,8640,179.7C8880,163,9120,180,9360,196C9600,212,9840,229,10080,261.3C10320,294,10560,343,10800,318.5C11040,294,11280,196,11520,204.2C11760,212,12000,327,12240,367.5C12480,408,12720,376,12960,351.2C13200,327,13440,310,13680,310.3C13920,310,14160,327,14400,318.5C14640,310,14880,278,15120,261.3C15360,245,15600,245,15840,204.2C16080,163,16320,82,16560,65.3C16800,49,17040,98,17160,122.5L17280,147L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
                  />
                </motion.div>
              </motion.div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.300470715256!2d71.97675405026192!3d34.06181102457913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38decd2395a97d01%3A0x590c12437b405a30!2sPAF%20Academy%20Asghar%20Khan!5e0!3m2!1sen!2s!4v1666977409467!5m2!1sen!2s"
              width="94.5%"
              height="400"
              style={{
                border: "1px solid black",
                borderRadius: "10px",
              }}
              allowFullScreen=""
              loading="lazy"
              border="3px solid blue"
              referrerPolicy="no-referrer-when-downgrade"
              title="img"
            ></iframe>

            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </>
  );
};

export default ContactMe;
// npm i --save-dev @types/jquery-ui-dist
