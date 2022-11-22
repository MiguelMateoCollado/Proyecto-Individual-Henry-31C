import React from "react";
import styles from "./CreatedGames.module.css";
export default function CreatedGames({ created, api, button }) {
  return (
    <div className={styles.containerForm}>
      {button === false ? (
        <button value="creados" onClick={api}>
          Creados
        </button>
      ) : (
        <button value="api" onClick={created}>
          API
        </button>
      )}
    </div>
  );
}
