import React, { memo } from "react";
import Article from "../Article";
import PostsContainer from "../PostsContainer";
import { data, articleData } from "../data";
import getRandomElementsFromArray from "../helper";

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
      <PostsContainer blogs={getRandomElementsFromArray(data, 3)} />
    </main>
  );
}
