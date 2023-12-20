import React from "react";
import Article from "../Article";
import PostsContainer from "../PostsContainer";
import { data } from "../data";
import getRandomElementsFromArray from "../helper";

export default function PostPage() {
  return (
    <main>
      <Article />
      <PostsContainer blogs={getRandomElementsFromArray(data, 3)} />
    </main>
  );
}
