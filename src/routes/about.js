import React, { memo } from "react";
import Article from "../Article";
import PostsContainer from "../PostsContainer";
import { data, aboutData } from "../data";
import getRandomElementsFromArray from "../helper";

export default function AboutPage() {
  const AboutMain = memo(function AboutMain({ image, title, text }) {
    return (
      <>
        <div className="image-container profile">
          <img src={image} alt="My Image" />
        </div>
        <h2>{title}</h2>
        <p>{text}</p>
      </>
    );
  });
  return (
    <main>
      <Article {...aboutData}>{<AboutMain {...aboutData} />}</Article>
      <PostsContainer blogs={getRandomElementsFromArray(data, 3)} />
    </main>
  );
}
