import React from "react";

export default function Article({ children, paragraphs }) {
  return (
    <article>
      {children}
      {paragraphs.map((paragraph, index) => (
        <div key={index}>
          <h3>{paragraph.heading}</h3>
          <p>{paragraph.text}</p>
        </div>
      ))}
    </article>
  );
}
