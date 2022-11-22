import React from "react";
import { Link } from "react-router-dom";
import styles from "./LadingPage.module.css";
export default function LadingPage() {
  return (
    <div>
      <Link
        to={{
          pathname: "home",
        }}
      >
        <h1 className={styles.textPrimary}>VideoGame Store</h1>
        
      </Link>
    </div>
  );
}
