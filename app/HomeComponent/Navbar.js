import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";

import Image from "next/image";
import sufi from "./sufi.webp";
import Container from "@mui/material/Container";
import { auth } from "../../auth";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar2 from "./Navbar2";
import Navbar3 from "./Nav3";
import HideOnScroll from "./Nav4"; // Import the HideOnScroll component
import UserIconButton from "./NavIconbtn";
import Tooltip from "@mui/material/Tooltip";

// import UserIconButton from "@mui/material/IconButton";
async function ResponsiveAppBar({ props }) {
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const session = await auth();
  const user = session?.user;
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll>
          <AppBar className="navbar1" style={{ width: "93.5%", right: "3.2%" }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Navbar2 />
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip>
                    <UserIconButton>
                      <Avatar className="cursorp Tab8 animate__animated animate__backInLeft">
                        {user ? (
                          <Image
                            src={user?.image || sufi}
                            // style={{ width: "100%", height: "auto" }}
                            alt="sufi"
                            width={100}
                            height={100}
                            loading="lazy"
                          />
                        ) : (
                          <Image
                            src={sufi}
                            alt="sufi"
                            width={100}
                            height={100}
                          />
                        )}
                      </Avatar>
                    </UserIconButton>
                  </Tooltip>
                  <Navbar3 />
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    </div>
  );
}

export default ResponsiveAppBar;
