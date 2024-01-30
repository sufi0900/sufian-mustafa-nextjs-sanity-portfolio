import { PostWithExtras } from "../../lib/definitions";
// import { cn } from "../../lib/utils";

import LikeButton from "./Like";
// import LikeButton from "./Like";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

type Props = {
  post: PostWithExtras;
  userId?: string;
  className?: string;
};

function PostActions({ post, userId, className }: Props) {
  return (
    <div>
      <LikeButton post={post} userId={userId} />
    </div>
  );
}

export default PostActions;
