"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { cn } from "../lib/utils";
// import { LogIn, LogOut, Menu } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
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
function MoreDropdown() {
  const [showModeToggle, setShowModeToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close the dropdown when the user clicks outside
    function handleOutsideClick(event: MouseEvent) {
      if (!event.target) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowModeToggle(false);
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);
  const { data: session } = useSession();
  return (
    <>
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
    </>
  );
}

export default MoreDropdown;
