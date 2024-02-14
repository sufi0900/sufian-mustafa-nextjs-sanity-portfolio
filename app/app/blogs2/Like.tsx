"use client";

import { LikeWithExtras, PostWithExtras } from "../../lib/definitions";
import { cn } from "../../lib/utils";
import { Like } from "@prisma/client";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import React, { useState } from "react";

// import { useCustomOptimistic } from "./useOptimistic";
// import ActionIcon from "./ActionIcon";
import { likePost } from "../../lib/actions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
function LikeButton({
  post,
  userId,
}: {
  post: PostWithExtras;
  userId?: string;
}) {
  const predicate = (like: Like) =>
    like.userId === userId && like.postId === post.id;

  // Initialize state with post.likes
  const [optimisticLikes, setOptimisticLikes] = useState(post.likes);

  const handleLike = async () => {
    if (!userId) {
      // You can replace '/login' with your login route
      window.location.href = "/login";
      return;
    }

    const postId = post.id;

    // Immediately update UI
    setOptimisticLikes((currentLikes) => {
      if (currentLikes.some(predicate)) {
        return currentLikes.filter((like) => like.userId !== userId);
      }
      // Make sure the new like being added conforms to LikeWithExtras type
      return [...currentLikes, { postId, userId } as LikeWithExtras];
    });

    // Then update the server
    await likePost(postId);
  };
  return (
    <Stack direction="column">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="hidden" name="postId" value={post.id} />

        <Button
          onClick={handleLike}
          className="button-85"
          variant="outlined"
          sx={{ padding: "10px 25px" }}
          startIcon={
            <ThumbUpIcon
              sx={{ color: "white" }}
              className={cn("h-13 w-13  ", {
                "text-white": optimisticLikes.some(predicate),
              })}
            />
          }
        >
          <Typography style={{ color: "white" }}> Like</Typography>
        </Button>
        {/* </ActionIcon> */}
      </form>
      {optimisticLikes.length > 0 && (
        <Typography
          variant="h5"
          fontWeight="bold"
          style={{ display: "inline-block" }}
          className="custom-input-color"
        >
          {optimisticLikes.length}{" "}
          {optimisticLikes.length === 1 ? "Like" : "Likes"}
        </Typography>
      )}
    </Stack>
  );
}

export default LikeButton;
