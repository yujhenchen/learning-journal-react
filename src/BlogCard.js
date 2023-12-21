import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ imageSrc, imageAlt, date, title, body }) {
  const navigate = useNavigate();

  return (
    <div className="blog-card" onClick={() => navigate("/post/1")}>
      <div className="image-container card-image-container">
        <img src={imageSrc} alt={imageAlt} />
      </div>

      <div className="blog-card-content">
        <p className="blog-card-date">{date}</p>
        <p className="blog-card-title">{title}</p>
        <p className="blog-card-body">{body}</p>
      </div>
    </div>
  );
}
