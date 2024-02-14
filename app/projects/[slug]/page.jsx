/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import {
  CalendarMonth,
  Email,
  OpenInBrowser,
  Person,
  Title,
} from "@mui/icons-material";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImageUrl";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Script from "next/script";
export const revalidate = false;
export const dynamic = "force-dynamic";
async function getData(slug) {
  const query = `*[_type == "project" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}
export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return {
    title: `${data.title} - Projects-Sufian Mustafa`,
    description: `${data.toptext1}`,
    author: "Sufian Mustafa",
  };
  // Define the metadata object
}
export default async function ProjectCardDetail({ params }) {
  const data = await getData(params.slug);
  const PortableTextComponent = {
    types: {
      image: ({ value }) => (
        // eslint-disable-next-line @next/next/no-img-element

        <div>
          <img
            src={urlFor(value).url()}
            alt="Image"
            className="rounded-lg"
            width={800}
            height={800}
          />
        </div>
      ),
    },
  };
  // const formattedStartDate = new Date(data.startDate).toLocaleDateString();
  // const formattedEndDate = new Date(data.endDate).toLocaleDateString();
  const canonicalUrl = `https://sufianmustafa.com/projects/${params.slug}`;
  // Set title, description, and other SEO metadata
  // const startDateObj = new Date(data.startDate);
  // const endDateObj = new Date(data.endDate);
  // const durationInDays = Math.floor(
  //   (endDateObj - startDateObj) / (24 * 60 * 60 * 1000)
  // );

  // Format the duration for display
  // const formattedDuration =
  //   durationInDays > 1 ? `${durationInDays} days` : `${durationInDays} day`;

  const title = `${data.title} - Sufian Mustafa Projects`;
  const description = `${data.toptext1}`;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Script
        title={title}
        description={description}
        canonical={canonicalUrl}
      />
      <div style={{ minHeight: "100vh" }}>
        <>
          <br />
          <div className="About3" style={{ marginTop: "80px" }}>
            <h1>
              {" "}
              <a href={data.link} className="link" target="site">
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
              className="item projectone"
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
                  src={urlFor(data.projectimg1).url()}
                  alt="img not uploaded"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <br />
              <div
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  display: "flex",
                  width: "60%",
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
                    <h1 style={{ fontSize: "27px" }}> {data.title} </h1>
                  </div>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <div style={{ padding: "20px", borderRadius: "15px" }}>
                        <p paragraph>
                          This project utilizes the following technologies:
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {data.technologies &&
                            Array.isArray(data.technologies) && (
                              <div
                                style={{ display: "flex", flexWrap: "wrap" }}
                              >
                                {data.technologies.map((tech, index) => (
                                  <Typography
                                    key={index}
                                    variant="body2"
                                    className="bgch custom-input-color"
                                    style={{
                                      margin: "5px",
                                      padding: "5px 15px",
                                      borderRadius: "24px",
                                    }}
                                  >
                                    {tech}
                                  </Typography>
                                ))}
                              </div>
                            )}
                        </div>
                      </div>
                    </Grid>
                  </Grid>
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
              className="item projectone"
              style={{
                width: "97%",
              }}
            >
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
                  className="ProjectTopTextDiv itemabout item"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="500"
                >
                  <Grid
                    container
                    spacing={2}
                    style={{ justifyContent: "center" }}
                  >
                    <Grid item xs={12}>
                      <div
                        style={{
                          padding: "20px",
                          borderRadius: "15px",
                          // backgroundColor: "#f5f5f5",
                        }}
                      >
                        <Typography
                          variant="h4"
                          gutterBottom
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          Project Duration{" "}
                          <CalendarMonth
                            style={{ marginLeft: "10px", color: "#4caf50" }}
                          />
                        </Typography>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          <Typography variant="h5" paragraph>
                            The project duration:
                            <br />
                            <Typography variant="h4" paragraph>
                              {data.date}
                            </Typography>
                            {/* to{" "}
                            <Typography variant="h4" paragraph>
                              {formattedEndDate}
                            </Typography>
                            Total duration: <br />
                            <span style={{ color: "#ff9800" }}>
                              {formattedDuration}
                            </span> */}
                            <br />
                            <hr />
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  {/* {data.toptext2} */}
                  <div className="About3">
                    {" "}
                    <h1 style={{ fontSize: "27px" }}>
                      {" "}
                      <a href={data.link} className="link" target="site">
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
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <img
                  src={urlFor(data.projectimg2).url()}
                  alt="img not uploaded"
                  style={{
                    cursor: "pointer",
                    borderRadius: "10px",
                    zIndex: "-1",
                    overflow: "hidden",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>

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
                    <p>
                      <PortableText
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        value={data.content}
                        components={PortableTextComponent}
                      />
                    </p>
                  </div>
                </div>

                <br />

                <Divider />
                <br />

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
