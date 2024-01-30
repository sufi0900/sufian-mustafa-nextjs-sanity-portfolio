"use client";

import { PostWithExtras } from "../../lib/definitions";
import { cn } from "../../lib/utils";
import { Like } from "@prisma/client";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { useOptimistic } from "react";
import ActionIcon from "./ActionIcon";
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
  const [optimisticLikes, addOptimisticLike] = useOptimistic<Like[]>(
    post.likes,
    // @ts-ignore
    (state: Like[], newLike: Like) =>
      // here we check if the like already exists, if it does, we remove it, if it doesn't, we add it
      state.some(predicate)
        ? state.filter((like) => like.userId !== userId)
        : [...state, newLike]
  );
  const handleLike = async () => {
    if (!userId) {
      // You can replace '/login' with your login route
      window.location.href = "/login";
      return;
    }

    const postId = post.id;
    addOptimisticLike({ postId, userId });

    await likePost(postId);
  };
  return (
    <Stack direction="column">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="hidden" name="postId" value={post.id} />

        {/* <ActionIcon> */}
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
