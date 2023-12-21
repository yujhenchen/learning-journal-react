import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="" alt="" />
        <span>My learning journal</span>
      </div>

      <Navigation />
    </header>
  );
}
