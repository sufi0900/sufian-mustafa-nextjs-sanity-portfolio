"use client";
import logo from "./logo.webp";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link"; // Import the Link component from Next.js
import Avatar from "@mui/material/Avatar";

import { useSession, signIn, signOut } from "next-auth/react";
import IconButton from "@mui/material/IconButton";

import Tooltip from "@mui/material/Tooltip";
// import ThemeBtn from "./ThemeButton";
import ArticleIcon from "@mui/icons-material/Article";
import { useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

import AOS from "aos";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";

import {
  DarkMode,
  Email,
  Home,
  InfoRounded,
  Login,
  LogoDev,
  Logout,
  Person,
  QuestionAnswer,
} from "@mui/icons-material";
import Slide from "@mui/material/Slide"; // Import the Slide component from Material-UI
import useScrollTrigger from "@mui/material/useScrollTrigger"; // Import the useScrollTrigger hook
import DarkModeToggle from "./DarkModeToggle";

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

function ResponsiveAppBar({ children }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const router = useRouter();
  // Function to open the avatar menu

  // Function to increase clickCount

  // useEffect to monitor clickCount changes

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
  const { data: session } = useSession();
  return (
    <>
      <Tooltip>
        <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
          {children}
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
              <Person />
            </ListItemIcon>
            {/* <Link
              href="/blogs/insights"
              style={{ textDecoration: "none", color: "black" }}
            > */}
            <ListItemText
              style={{ textDecoration: "none", color: "black" }}
              onClick={handleCloseNavMenu}
              primary={session?.user?.name || "[your name here]"}
            />{" "}
            {/* </Link> */}
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            {/* <Link
              href="/blogs/insights"
              style={{ textDecoration: "none", color: "black" }}
            > */}
            <ListItemText
              style={{ textDecoration: "none", color: "black" }}
              onClick={handleCloseNavMenu}
              primary={session?.user?.email || "[your Email here]"}
            />{" "}
            {/* </Link> */}
          </ListItemButton>
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
              <ListItemText onClick={handleCloseNavMenu} primary={"FAQ"} />
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

          {session ? (
            <ListItemButton onClick={() => signOut()}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>

              <ListItemText onClick={() => signOut()} primary={"Logout"} />
            </ListItemButton>
          ) : (
            <ListItemButton onClick={() => signIn()}>
              <ListItemIcon>
                <Login />
              </ListItemIcon>

              <ListItemText onClick={() => signIn()} primary={"Log in"} />
            </ListItemButton>
          )}
          <ListItemButton
            onClick={() =>
              router.push(
                "https://sanity-blogs-app.sanity.studio/desk",
                "_blank"
              )
            }
          >
            <ListItemIcon>
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
            </ListItemIcon>
            <ListItemText onClick={handleCloseNavMenu} primary={"My Logo"} />
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
    </>
  );
}
export default ResponsiveAppBar;
