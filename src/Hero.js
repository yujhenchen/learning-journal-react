import React from "react";

export default function Hero({ backgroundImage, date, title, body }) {
  return (
    <div className="hero">
      <div className="image-container">
        <img src={backgroundImage} alt="Hero Background Image" />
      </div>

      <div className="hero-content">
        <p className="hero-date">{date}</p>
        <p className="hero-title">{title}</p>
        <p className="hero-body">{body}</p>
      </div>
    </div>
  );
}
