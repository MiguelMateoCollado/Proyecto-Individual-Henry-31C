import React from "react";
import styles from "./SortByRating.module.css";
export default function SortByRating({ sortHigh, sortLow, button }) {
  return (
    <div className={styles.containerForm}>
      {button === false ? (
        <button value="higher" onClick={sortHigh}>
          Rating ↑
        </button>
      ) : (
        <button value="lower" onClick={sortLow}>
          Rating ↓
        </button>
      )}
    </div>
  );
}
