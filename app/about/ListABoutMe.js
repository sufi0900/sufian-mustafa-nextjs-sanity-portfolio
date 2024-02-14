"use client";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MosqueIcon from "@mui/icons-material/Mosque";
import TodayIcon from "@mui/icons-material/Today";
import FlagIcon from "@mui/icons-material/Flag";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

import AbcIcon from "@mui/icons-material/Abc";
import { Cake, LanguageOutlined, Mail } from "@mui/icons-material";
import { ListItemButton } from "@mui/material";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

export default function InteractiveList() {
  const [secondary, setSecondary] = useState(false);

  function sufianmustafawebdeveloperaboutmelist() {
    return {
      __html: `
        {
          "@context": "http://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "PropertyValue",
                "name": "Full Name",
                "value": "SuFian Mustafa"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "PropertyValue",
                "name": "Age",
                "value": "27"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "PropertyValue",
                "name": "NickName",
                "value": "Sufi"
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "PropertyValue",
                "name": "Date of Birth",
                "value": "6 Sep, 1997"
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "PropertyValue",
                "name": "Date of Birth",
                "value": "6 Sep, 1997"
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "PropertyValue",
                "name": "Date of Birth",
                "value": "6 Sep, 1997"
              }
            },
          ]
        }
      `,
    };
  }

  return (
    <Box sx={{ flexGrow: 1, overflow: "auto" }}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>More About Me - Sufian Mustafa</title>
        <meta
          name="description"
          content="Learn more about Sufian Mustafa, a web developer with a passion for web development and various interests."
        />
        <meta name="author" content="Sufian Mustafa" />
        <meta property="og:title" content="About Me - Sufian Mustafa" />
        <meta
          property="og:description"
          content="Explore details about Sufian Mustafa, a web developer with a passion for web development and various interests."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtvtphhsc/image/upload/v1699977636/About-Me-Sufian-Mustafa_y0kren.png"
        />
        <meta property="og:url" content="https://sufianmustafa.com/about" />
        <link rel="canonical" href="https://sufianmustafa.com/about" />
        <NextSeo
          title="About Me - Sufian Mustafa"
          description="Learn more about Sufian Mustafa, a web developer with a passion for web development and various interests."
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/about"
          openGraph={{
            title: "About Me - Sufian Mustafa",
            description:
              "Explore details about Sufian Mustafa, a web developer with a passion for web development and various interests.",
            type: "webpage",
            url: "https://sufianmustafa.com/about",
            images: [
              {
                url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1699977636/About-Me-Sufian-Mustafa_y0kren.png",
                width: 800,
                height: 800,
                alt: "About Me - Sufian Mustafa",
              },
            ],
          }}
        />
      </Head>
      <Script
        id="MySkills-webpage-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={sufianmustafawebdeveloperaboutmelist()}
        key="MySkills-jsonld"
      />
      <br />
      <div className="custom-input-color About3">
        <h2>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={secondary}
                  onChange={(event) => setSecondary(event.target.checked)}
                  className="custom-input-color"
                  style={{ color: "white" }}
                />
              }
              label="Click to Show Basic info"
              className="custom-input-color"
            />
          </FormGroup>
        </h2>
      </div>
      <Grid container spacing={2} sx={{ display: "flex", overflow: "auto" }}>
        <Grid item xs={6} md={6} sm={12} lg={12}>
          <div className="About3">
            <p>My Basic Info</p>
          </div>
          <Box
            sx={{
              display: "flex",
              alignContent: "space-between",
              gap: "60px",
            }}
          >
            <Grid item lg={12} sm={12}>
              <List>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <AbcIcon className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Full Name"}
                    secondary={secondary ? "SuFian Mustafa" : null}
                  />
                </ListItemButton>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <TodayIcon className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Age"}
                    secondary={secondary ? "27" : null}
                  />
                </ListItemButton>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <Cake className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Date of Birth"}
                    secondary={secondary ? "6 Sep, 1997" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <MosqueIcon className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Religious"}
                    secondary={secondary ? "Islam (Sunni)" : null}
                  />
                </ListItemButton>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <CodeIcon className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Interest"}
                    secondary={secondary ? "Web Development" : null}
                  />
                </ListItemButton>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <InfoIcon className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Experience"}
                    secondary={
                      secondary ? "1year Plus ( started from june 2022)" : null
                    }
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List sx={{ overflow: "auto" }}>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <LocalPhoneIcon className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Phone Number"}
                    secondary={secondary ? "+923177652064" : null}
                  />
                </ListItemButton>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <Mail className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Email"}
                    secondary={secondary ? "sufianmustafa0900@gmail.com" : null}
                  />
                </ListItemButton>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <FlagIcon className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Country"}
                    secondary={secondary ? "Pakistan (KPK)" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List sx={{ overflow: "auto" }}>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <SportsEsportsIcon className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Hobby"}
                    secondary={secondary ? "Video Games" : null}
                  />
                </ListItemButton>
                <ListItemButton
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <ListItemIcon className="ListItemText">
                    <LanguageOutlined className="custom-input-color-icon" />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Language"}
                    secondary={secondary ? "English & Urdu" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
