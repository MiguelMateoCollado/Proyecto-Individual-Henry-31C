import React from "react";
import styles from "./FilterGenres.module.css";
import { FiltrarGeneros, refreshPage } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
export default function FilterGenres() {
  let dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(FiltrarGeneros(e.target.value));
    dispatch(refreshPage());
  };

  return (
    <div>
      <select name="generos" id="generos" className={styles.selecter} onChange={(e) => handleChange(e)}>
        <option value="Todos">Todos</option>
        <option value="Adventure">Adventure</option>
        <option value="Action">Action</option>
        <option value="Puzzle">Puzzle</option>
        <option value="RPG">RPG</option>
        <option value="Indie">Indie</option>
        <option value="Strategy">Strategy</option>
        <option value="Shooter">Shooter</option>
        <option value="Casual">Casual</option>
        <option value="Simulation">Simulation</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Arcade">Arcade</option>
        <option value="Platformer">Platformer</option>
        <option value="Racing">Racing</option>
        <option value="Massively Multiplayer"> Massively Multiplayer</option>
        <option value="Sports">Sports</option>
        <option value="Fighting">Fighting</option>
        <option value="Family">Family</option>
      </select>
    </div>
  );
}
