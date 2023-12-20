import React from "react";

export default function Hero({ backgroundImage, date, title, body }) {
  return (
    <div>
      <div>
        <img src={backgroundImage} alt="Hero Background Image" />
      </div>

      <p>{date}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
}
