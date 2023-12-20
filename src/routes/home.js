import React from "react";
import Hero from "../Hero";
import PostsContainer from "../PostsContainer";
import data from "../data";

export default function HomePage() {
  const blogs = [...data];
  return (
    <main>
      <Hero />
      <PostsContainer blogs={blogs} />
      <div>
        <a>View More</a>
      </div>
    </main>
  );
}
