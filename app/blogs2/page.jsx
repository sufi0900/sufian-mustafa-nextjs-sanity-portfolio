import { fetchPosts } from "../../lib/data";
import Post from "./Post";

async function page() {
  const posts = await fetchPosts();

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default page;
