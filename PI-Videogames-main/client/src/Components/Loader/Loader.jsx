import React from "react";
import styles from "./Loader.module.css"
export const Loader = () => {
  return (
    <div>
      <div className={styles.spinner}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};
