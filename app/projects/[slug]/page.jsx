/* eslint-disable @next/next/no-img-element */
import React from "react";

import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImageUrl";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { PortableText } from "@portabletext/react";

async function getData(slug) {
  const query = `*[_type == "project" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}
export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return {
    title: `${data.title} - Projects-Sufian Mustafa`,
    description: data.description,
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

  return (
    <>
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
                // alignItems: "center",
                // textAlign: "center",
                width: "97%",
                // padding: "20px",
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

                  {data.toptext1}
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
                  {data.toptext2}
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
