import React from "react";
import styles from "./buttons.module.css";
export default function FilterAlfabetic({button, SortGames1, SortGames2}) {
  return (
    <div className={styles.containerForm}>
      {button === true ? (
        <button value="initial" onClick={SortGames2}>
          A-Z
        </button>
      ) : (
        <button value="reverse" onClick={SortGames1}>
          Z-A
        </button>
      )}
    </div>
  );
}
