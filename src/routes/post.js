import React from "react";
import Article from "../Article";
import PostsContainer from "../PostsContainer";

export default function PostPage() {
  return (
    <main>
      <Article />
      <PostsContainer blogs={[]} />
    </main>
  );
}
