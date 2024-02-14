"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component from Next.js

import { useMediaQuery, useTheme } from "@mui/material";
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

function ResponsiveAppBar({ props }) {
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
              <ListItemText onClick={handleCloseNavMenu} primary={"Projects"} />
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
              <ListItemText onClick={handleCloseNavMenu} primary={"Contact"} />
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
      {/* </Box> */}
    </>
  );
}
export default ResponsiveAppBar;
