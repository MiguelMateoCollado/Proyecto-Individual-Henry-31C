/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import styles from "./pagination.module.css";
export default function Pagination({ gamePerPage, allGames, pagination }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allGames / gamePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.div}>
      <nav className={styles.nav}>
        <ul className={styles.pagination}>
          {pageNumbers?.map((number, index) => (
            <li key={index}>
              <a onClick={() => pagination(number)}>{number}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
