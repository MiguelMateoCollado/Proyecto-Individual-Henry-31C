import React from "react";
import styles from "./Message.module.css"
export const Loader = () => {
  return (
    <div>
      <div className={styles.spinner}>
        <span>E</span>
        <span>R</span>
        <span>R</span>
        <span>O</span>
        <span>R</span>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </div>
    </div>
  );
};
