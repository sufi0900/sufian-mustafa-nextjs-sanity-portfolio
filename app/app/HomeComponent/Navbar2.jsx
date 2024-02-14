"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component from Next.js

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import Avatar from "@mui/material/Avatar";
import AOS from "aos";

import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import InfoIcon from "@mui/icons-material/Info";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TimelineIcon from "@mui/icons-material/Timeline";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";

import { DarkMode, Home } from "@mui/icons-material";
import DarkModeToggle from "./DarkModeToggle";
import logo from "./logo.webp";
import Image from "next/image";

function ResponsiveAppBar() {
  useEffect(() => {
    AOS.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const router = useRouter();
  // Function to open the avatar menu
  const [clickCount, setClickCount] = useState(0);

  // Function to increase clickCount
  const incrementCount = () => {
    setClickCount(clickCount + 1);
  };

  // useEffect to monitor clickCount changes
  useEffect(() => {
    if (clickCount === 3) {
      window.open("https://sanity-blogs-app.sanity.studio/desk", "_blank");
    }
  }, [clickCount, router]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
        className="cursorp"
      >
        <Avatar className="cursorp Tab8 animate__animated animate__backInLeft">
          <Image
            src={logo}
            style={{ width: "100%", height: "auto" }}
            alt="logo"
            width={100}
            height={100}
            loading="lazy"
          />
        </Avatar>
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {" "}
        <Avatar sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
          <Image
            src={logo}
            style={{ width: "100%", height: "auto" }}
            alt="logo"
            width={100}
            height={100}
            loading="lazy"
          />
        </Avatar>
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {isMatch ? (
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <Tabs centered sx={{ margin: "auto" }}>
              <Tab
                value="one"
                label={
                  <span>
                    <Home /> Home
                  </span>
                }
                onClick={() => {
                  window.location.href = "/";
                }}
                className="Tab1 animate__animated animate__zoomIn"
              />

              <Tab
                value="two"
                label={
                  <span>
                    {" "}
                    <InfoIcon /> About
                  </span>

                  // </Link>
                }
                onClick={() => router.push("/about")}
                className="Tab2 animate__animated animate__zoomIn"
              >
                {" "}
              </Tab>

              <Tab
                value="three"
                label={
                  <span>
                    <ManageAccountsIcon /> Skills
                  </span>
                }
                onClick={() => router.push("/skills")}
                className="Tab3 animate__animated animate__zoomIn"
              />

              <Tab
                value="three"
                label={
                  <span>
                    {/* <Link
                              href="/projects"
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                            > */}
                    <TimelineIcon /> Projects
                    {/* </Link> */}
                  </span>
                }
                onClick={() => router.push("/projects")}
                className="Tab3 animate__animated animate__zoomIn"
              />

              <Tab
                value="three"
                label={
                  <span>
                    {" "}
                    <AddReactionIcon /> Blogs
                  </span>
                }
                onClick={() => router.push("/blogs")}
                className="Tab5 animate__animated animate__zoomIn"
              />
              <Tab
                value="three"
                label={
                  <span>
                    <ContactMailIcon /> Contact
                  </span>
                }
                onClick={() => router.push("/contact")}
                className="Tab6 animate__animated animate__zoomIn"
              />

              <Tab
                value="four"
                label={<DarkModeToggle />}
                className="Tab6 animate__animated animate__zoomIn"
              >
                <DarkModeToggle />
              </Tab>
            </Tabs>
          </>
        )}
        <Menu
          id="menu-appbar-avatar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top", // Adjust to match the new position
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <List className="DrawerList">
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary={"Home"}
                onClick={() => {
                  window.location.href = "/";
                }}
              />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText onClick={handleCloseNavMenu} primary={"About"} />{" "}
              </Link>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <Link
                href="/skills"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText onClick={handleCloseNavMenu} primary={"Skills"} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <Link
                href="/projects"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText
                  onClick={handleCloseNavMenu}
                  primary={"Projects"}
                />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AddReactionIcon />
              </ListItemIcon>
              <Link
                href="/blogs"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText onClick={handleCloseNavMenu} primary={"Blogs"} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <Link
                href="/contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText
                  onClick={handleCloseNavMenu}
                  primary={"Contact"}
                />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <ListItemText
                onClick={handleCloseNavMenu}
                primary={<DarkModeToggle />}
                style={{ color: "white" }}
              />
            </ListItemButton>
          </List>
          {/* </Drawer> */}
        </Menu>
      </Box>
    </>
  );
}
export default ResponsiveAppBar;
