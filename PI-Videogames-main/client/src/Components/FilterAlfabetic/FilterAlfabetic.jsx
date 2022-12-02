import React, { useState } from "react";
import styles from "./buttons.module.css";
import {
  sortReverse,
  refreshPage,
  sortGames,
} from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
export default function FilterAlfabetic() {
  const [button, setButton] = useState(false);
  const dispatch = useDispatch();

  const SortGames1 = () => {
    setButton(true);
    dispatch(sortReverse());
    dispatch(refreshPage());
  };

  const SortGames2 = () => {
    setButton(false);
    dispatch(sortGames());
    dispatch(refreshPage());
  };

  return (
    <div>
      {button === true ? (
        <button className={styles.alfa} value="initial" onClick={SortGames2}>
          A-Z
        </button>
      ) : (
        <button className={styles.alfa} value="reverse" onClick={SortGames1}>
          Z-A
        </button>
      )}
    </div>
  );
}
