import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import React from "react";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h2> {post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="posts">
      <h1>Posts</h1>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
