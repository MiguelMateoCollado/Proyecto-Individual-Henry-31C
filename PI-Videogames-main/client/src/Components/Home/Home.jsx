import CardGame from "../CardGame/CardGame";
import FilterAlfabetic from "../FilterAlfabetic/FilterAlfabetic";
import FilterGender from "../FilterGender/FilterGender";
import FilterRating from "../FilterRating/FilterRating";
import InputSearch from "../InputSearch/InputSearch";
import OrderAscended from "../OrderAscended/OrderAscended";
import OrderDesended from "../OrderDesended/OrderDesended";
import { getAllGames } from "../../Redux/Actions/actions";
import { useState, Useffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
function Home() {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getAllGames());
  }, []);
  
  function handleClick(event) {
    event.preventDefault();
    dispatch(getAllGames());
  }
  return (
    <div className="input-search">
      <h1 className="title">Videogame Store</h1>
      <div className="container">
        <InputSearch />
        <FilterGender />
        <OrderDesended />
        <OrderAscended />
        <FilterAlfabetic />
        <FilterRating />
      </div>
      {allGames.map((game) => (
        <CardGame
          key={game.id}
          id={game.id}
          image={game.image}
          name={game.name}
          genres={game.genres}
        />
      ))}
    </div>
  );
}

export default Home;
