/* eslint-disable @next/next/no-img-element */

import React from "react";

import { CodeBlock, dracula } from "react-code-blocks";
import { urlFor } from "../../lib/sanityImageUrl";

import Grid from "@mui/material/Grid";
import { PortableText } from "@portabletext/react";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import Divider from "@mui/material/Divider";

export const revalidate = false;
export const dynamic = "force-dynamic";

export default function BlogCardDetail({ data }) {
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
      code: ({ value }) => (
        <div>
          <CodeBlock
            text={value.code}
            language="jsx" // specify the code language here
            showLineNumbers // if you want to display line numbers
            theme={dracula} // use any code highlighting theme
          />
          <br />
        </div>
      ),
    },
  };

  return (
    <div>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={11} style={{ overflow: "hidden", marginTop: "90px" }}>
          <div className="moreproject itemabout item">
            <br></br>

            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%", // Adjust the width as needed
                  height: "300px", // Adjust the height as needed
                  overflow: "hidden", // Hide overflow to prevent the cover photo from overflowing
                }}
              >
                <img
                  src="https://res.cloudinary.com/dtvtphhsc/image/upload/v1693428898/Blog-Cover_tw63ut.gif" // Replace with your cover photo URL
                  alt="Cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Ensure the cover photo fills the container
                    borderRadius: "10px",
                  }}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                />

                <div
                  style={{
                    position: "absolute",
                    top: "10px", // Adjust the top positioning
                    right: "10px", // Adjust the right positioning
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {/* {tour.date} */}
                </div>

                {/* Circular Profile Picture */}
                <img
                  src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1693673198/0948d54e-68a2-451c-ba15-ac683b0c0780_kclx5w.webp" // Replace with your profile picture URL
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)", // Center horizontally
                    width: "200px", // Adjust the width as needed
                    height: "200px", // Maintain a square aspect ratio
                    borderRadius: "50%",
                    border: "2px solid rgba(250, 47, 210, 0.696)",
                  }}
                  alt="Profile"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="500"
                />
              </div>

              <br />

              <div className="About3">
                {" "}
                <h1
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  {data.title}
                </h1>{" "}
              </div>

              <div className="QuillDescription">
                <div className="QuillDescription" style={{ width: "100%" }}>
                  <PortableText
                    value={data.content}
                    components={PortableTextComponent}
                  />

                  <img src={urlFor(data.postimg).url()} alt="Img" />
                </div>
              </div>

              <Divider />
              <br></br>
              <br></br>
            </div>
          </div>
        </Grid>
      </Grid>{" "}
      <br></br>
      <Divider style={{ width: "100%" }} />
      <br></br>
    </div>
  );
}
