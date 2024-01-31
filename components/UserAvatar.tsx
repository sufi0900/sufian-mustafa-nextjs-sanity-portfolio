"use client";
import Avatar from "@mui/material/Avatar";

import Image from "next/image";
import sufi from "./sufi.webp";

function UserAvatar({ user, ...avatarProps }) {
  return (
    <Avatar
      className="cursorp Tab8 animate__animated animate__backInLeft"
      {...avatarProps}
    >
      {user ? (
        <Image
          src={user?.image || sufi}
          style={{ width: "100%", height: "auto" }}
          alt="sufi"
          width={100}
          height={100}
          loading="lazy"
        />
      ) : (
        <Image src={sufi} alt="sufi" width={100} height={100} />
      )}
    </Avatar>
  );
}

export default UserAvatar;
