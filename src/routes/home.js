import React from "react";
import Hero from "../Hero";
import PostsContainer from "../PostsContainer";
import { data, heroData } from "../data";

export default function HomePage() {
  const blogs = [...data];
  return (
    <main>
      <Hero {...heroData} />
      <PostsContainer blogs={blogs} />
      <div className="link-container">
        <a href="#" className="link">
          View More
        </a>
      </div>
    </main>
  );
}
