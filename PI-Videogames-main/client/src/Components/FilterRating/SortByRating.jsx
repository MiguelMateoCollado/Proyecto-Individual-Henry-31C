import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SortRating,
  refreshPage,
  SortRatingLow,
} from "../../Redux/Actions/actions";
import styles from "./SortByRating.module.css";
export default function SortByRating() {
  const [button, setButton] = useState(false);
  const dispatch = useDispatch();

  const sortHigh = () => {
    setButton(true);
    dispatch(SortRating());
    dispatch(refreshPage());
  };

  const sortLow = () => {
    setButton(false);
    dispatch(SortRatingLow());
    dispatch(refreshPage());
  };
  return (
    <div>
      {button === false ? (
        <button className={styles.sort} onClick={sortHigh}>
          Rating ↑
        </button>
      ) : (
        <button className={styles.sort} value="lower" onClick={sortLow}>
          Rating ↓
        </button>
      )}
    </div>
  );
}
