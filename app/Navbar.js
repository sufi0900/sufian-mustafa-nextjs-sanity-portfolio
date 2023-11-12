"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component from Next.js
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
// import ThemeBtn from "./ThemeButton";
import ArticleIcon from "@mui/icons-material/Article";
import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import InfoIcon from "@mui/icons-material/Info";
import AOS from "aos";
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

import {
  DarkMode,
  Home,
  InfoRounded,
  LogoDev,
  QuestionAnswer,
} from "@mui/icons-material";
import Slide from "@mui/material/Slide"; // Import the Slide component from Material-UI
import useScrollTrigger from "@mui/material/useScrollTrigger"; // Import the useScrollTrigger hook
import DarkModeToggle from "./DarkModeToggle";
import CssBaseline from "@mui/material/CssBaseline";
import sufi from "./sufi.webp";
import logo from "./logo.webp";
import Image from "next/image";
function HideOnScroll(props) {
  useEffect(() => {
    AOS.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar(props) {
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
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="navbar1" style={{ width: "93.5%", right: "3.2%" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
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
                            {/* <Link
                              href="/skills"
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                            > */}{" "}
                            <ManageAccountsIcon /> Skills
                            {/* </Link> */}
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
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip>
                  <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                    <Avatar
                      className="Tab7 animate__animated animate__backInRight"
                      onClick={incrementCount}
                    >
                      <Image
                        src={sufi}
                        style={{ width: "100%", height: "auto" }}
                        alt="sufi"
                        width={100}
                        height={100}
                        loading="lazy"
                      />
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {" "}
                  <List className="DrawerList">
                    <ListItemButton>
                      <ListItemIcon>
                        <ArticleIcon />
                      </ListItemIcon>
                      <Link
                        href="/blogs/insights"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"General Blogs"}
                        />{" "}
                      </Link>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <LogoDev />
                      </ListItemIcon>
                      <Link
                        href="/blogs/how-to"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"How to Implement"}
                        />
                      </Link>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <QuestionAnswer />
                      </ListItemIcon>
                      <Link
                        href="/faq"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"FAQ"}
                        />
                      </Link>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <InfoRounded />
                      </ListItemIcon>
                      <Link
                        href="/aboutmysite"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"About My Site"}
                        />
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
                </Menu>
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
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"About"}
                        />{" "}
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
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"Skills"}
                        />
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
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"Blogs"}
                        />
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
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
export default ResponsiveAppBar;
