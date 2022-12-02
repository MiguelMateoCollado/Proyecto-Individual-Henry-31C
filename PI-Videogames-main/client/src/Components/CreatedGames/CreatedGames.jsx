import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FilterCreated, refreshPage } from "../../Redux/Actions/actions";
import styles from "./CreatedGames.module.css";
export default function CreatedGames() {
  const dispatch = useDispatch();
  const [button, setButton] = useState(false);

  const created = (e) => {
    if (e.target.value === "api") {
      setButton(false);
    }
    dispatch(FilterCreated(e.target.value));
    refreshPage();
  };

  const api = (e) => {
    if (e.target.value === "creados") {
      setButton(true);
    }
    dispatch(FilterCreated(e.target.value));
    refreshPage();
  };

  return (
    <div>
      {button === false ? (
        <button className={styles.create} value="creados" onClick={api}>
          Creados
        </button>
      ) : (
        <button className={styles.create} value="api" onClick={created}>
          API
        </button>
      )}
    </div>
  );
}
