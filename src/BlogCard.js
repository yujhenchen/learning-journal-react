import React from "react";

export default function BlogCard({ imageSrc, imageAlt, date, title, body }) {
  return (
    <div className="blog-card">
      <div className="image-container">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <p>{date}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
}
