"use client";

import type { User } from "next-auth";

import UserAvatar from "./UserAvatar";

function ProfileLink({ user }: { user: User }) {
  return (
    <>
      <>{user ? <UserAvatar user={user} /> : null}</>
    </>
  );
}

export default ProfileLink;
