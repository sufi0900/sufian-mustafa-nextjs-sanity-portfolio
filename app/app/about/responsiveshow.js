/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import Images from "./Images";

function CarouselFadeExample() {
  return (
    <>
      <div className="About3" data-aos="zoom-in">
        {" "}
        <h1> Website Responsiveness</h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <div>
          <div className="thumbnail">
            <img
              src={Images.screenresponsive.src}
              alt={Images.screenresponsive.alt}
              style={{
                width: "90%",
                display: "block",
                overflow: "hidden",
                zIndex: "3",
              }}
              loading="lazy"
            />
            <div className="caption_sm">
              <video
                src={Images.mobile.src}
                alt={Images.mobile.alt}
                className="d-block w-100"
                controls
                autoPlay
                controlsList="nodownload"
                muted // Add the muted attribute here
                loading="lazy"
              />
            </div>
            <div className="caption_md">
              <video
                src={Images.tablet.src}
                alt={Images.tablet.alt}
                className="d-block w-100"
                controls
                autoPlay
                controlsList="nodownload"
                muted // Add the muted attribute here
                loading="lazy"
              />
            </div>
            <div className="caption_lg">
              <video
                src={Images.pc.src}
                alt={Images.pc.alt}
                className="d-block w-100"
                controls
                autoPlay
                controlsList="nodownload"
                muted // Add the muted attribute here
                loading="lazy"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselFadeExample;
