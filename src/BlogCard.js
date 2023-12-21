import React from "react";

export default function BlogCard({ imageSrc, imageAlt, date, title, body }) {
  return (
    <div className="blog-card">
      <div className="image-container">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <p className="blog-card-date">{date}</p>
      <p className="blog-card-title">{title}</p>
      <p className="blog-card-body">{body}</p>
    </div>
  );
}
