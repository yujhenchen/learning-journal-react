import React, { memo } from "react";
import Article from "../Article";
import PostsContainer from "../PostsContainer";
import { data, articleData } from "../data";
import getRandomElementsFromArray from "../helper";
import PostBlockHeading from "../PostBlockHeading";

export default function PostPage() {
  const ArticleMain = memo(function ArticleMain({
    date,
    title,
    description,
    image,
  }) {
    return (
      <section>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="image-container">
          <img src={image} alt="Article Image" />
        </div>
      </section>
    );
  });
  return (
    <main>
      <Article {...articleData}>{<ArticleMain {...articleData} />}</Article>
      <PostBlockHeading text={"Recent Posts"} />
      <PostsContainer blogs={getRandomElementsFromArray(data, 3)} />
    </main>
  );
}
