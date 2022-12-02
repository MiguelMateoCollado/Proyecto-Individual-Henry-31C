import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardGame.module.css";
export default function CardGame({ image, name, genres, id }) {
  const divStyle = {
    backgroundRepeat: "no-repeat",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundColor: "#80afcd",
    display: "flex",
    justifyContent: "flex-start",
    lineHeight: 1.5,
    background: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "600px 400px",
    width: "350",
    height: "400px",
    boxShadow: ` ${0} ${0} 50px rgba(${(0, 0, 0, 0.315)})`,
  };
  return (
    <div className={styles.general} >
      <Link className={styles.link}  to={`/home/${id}`}>
        <div style={divStyle}>
          <div className={styles.cardBodyInfo}>
            <p className={styles.name}>{name}</p>
            <p className={styles.genres}>{genres.map((gen) => gen + " | ")} </p>
            <div></div>
          </div>
        </div>
      </Link>
    </div>
  );
}
