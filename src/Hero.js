import React from "react";

export default function Hero({ backgroundImage, date, title, body }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
      }}
    >
      <p className="hero-date">{date}</p>
      <p className="hero-title">{title}</p>
      <p className="hero-body">{body}</p>
    </div>
  );
}
