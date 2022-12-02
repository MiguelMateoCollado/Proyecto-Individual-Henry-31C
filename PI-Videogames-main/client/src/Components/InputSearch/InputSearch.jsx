import React from "react";
import styles from "./InputSearch.module.css";
import { searchGame } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
export default function InputSearch() {
  let dispatch = useDispatch();
  const takeName = (e) => {
    dispatch(searchGame(e.target.value));
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="input"
        name="name"
        onChange={(e) => takeName(e)}
        id="name"
        required
      />
      <label>
        <span>S</span>
        <span>e</span>
        <span>a</span>
        <span>r</span>
        <span>c</span>
        <span>h</span>
      </label>
    </div>
  );
}
