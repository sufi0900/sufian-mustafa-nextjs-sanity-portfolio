import { auth } from "../../auth";

import { PostWithExtras } from "../../lib/definitions";

import PostActions from "./PostActions";

async function Post({ post }: { post: PostWithExtras }) {
  const session = await auth();
  const userId = session?.user?.id;

  // const username = post.user?.username;

  return (
    <div>
      <PostActions post={post} userId={userId} />
    </div>
  );
}

export default Post;
