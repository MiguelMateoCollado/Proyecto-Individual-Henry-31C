import React from "react";
import { Link } from "react-router-dom";
import "./LadingPage.css";
export default function LadingPage() {
  return (
    <div className="landing-page">
      <Link
        to={{
          pathname: "home",
        }}
      >
        <h1 className="text-primary">VideoGame Store</h1>
      </Link>
    </div>
  );
}
