import { auth } from "../../auth";
// import UserAvatar from "../../components/UserAvatar";
import { PostWithExtras } from "../../lib/definitions";
// import Image from "next/image";
// import Link from "next/link";
// import Comments from "./Comment";
// import Timestamp from "./Timestamp";

// import PostOptions from "./PostOptions";
import PostActions from "./PostActions";

async function Post({ post }: { post: PostWithExtras }) {
  const session = await auth();
  const userId = session?.user?.id;
  // const username = post.user.username;

  return (
    <div>
      <PostActions post={post} userId={userId} />
    </div>
  );
}

export default Post;
