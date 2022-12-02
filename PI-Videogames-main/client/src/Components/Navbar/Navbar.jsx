import React from "react";
import FilterGenres from "../FilterGenres/FilterGenres";
import FilterAlfabetic from "../FilterAlfabetic/FilterAlfabetic";
import InputSearch from "../InputSearch/InputSearch";
import SortByRating from "../FilterRating/SortByRating";
import CreatedGames from "../CreatedGames/CreatedGames";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <InputSearch className={styles.flexGrow1} />
        <FilterGenres className={styles.item} />
        <FilterAlfabetic className={styles.item} />
        <Link className={styles.item} to="/create">
          Crear
        </Link>
        <SortByRating className={styles.item} />
        <CreatedGames className={styles.item} />
      </div>

      <div></div>
    </div>
  );
}
