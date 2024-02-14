import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
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
  Login,
  LogoDev,
  Logout,
  QuestionAnswer,
} from "@mui/icons-material";
const NavSession = () => {
  const { data: session } = useSession();
  return (
    <div>
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

          <ListItemText onClick={() => signIn()} primary={"LogIN"} />
        </ListItemButton>
      )}
    </div>
  );
};

export default NavSession;
