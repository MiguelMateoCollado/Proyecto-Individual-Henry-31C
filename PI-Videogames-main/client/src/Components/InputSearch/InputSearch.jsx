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
    <form className={styles.form__group}>
      <div className={styles.containerForm}>
        <input
          type="input"
          className={styles.form__field}
          placeholder="Search Videogame..."
          name="name"
          onChange={(e) => takeName(e)}
          id="name"
          required
        />
      </div>
    </form>
  );
}
