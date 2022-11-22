import CardGame from "../CardGame/CardGame";
import FilterAlfabetic from "../FilterAlfabetic/FilterAlfabetic";
import {
  SetCurrentPage,
  refreshPage,
  sortGames,
  sortReverse,
  getAllGames,
  SortRatingLow,
  SortRating,
  FilterCreated
} from "../../Redux/Actions/actions";
import FilterGenres from "../FilterGenres/FilterGenres";
import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import Pagination from "../Pagination/pagination";
import InputSearch from "../InputSearch/InputSearch";
import CreatedGames from "../CreatedGames/CreatedGames";
import SortByRating from "../FilterRating/SortByRating";

function Home() {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);
  const currentPage = useSelector((state) => state.currentPage);
  const gamePerPage = useSelector((state) => state.gamePerPage);
  const indexOfLastGame = currentPage * gamePerPage;
  const indexOfFirstGame = indexOfLastGame - gamePerPage;
  const currentGame = allGames.slice(indexOfFirstGame, indexOfLastGame);

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);
  // LOGICA PAGINADO
  const pagination = (pageNumber) => {
    dispatch(SetCurrentPage(pageNumber));
  };
  // LOGICA PAGINADO
  // LOGICA RATING
  const [raButton, setRaButton] = useState(false);

  const sortHigh = async (e) => {
    if (e.target.value === "higher") {
      setRaButton(true);
    }
    dispatch(SortRating());

    dispatch(refreshPage());
  };

  const sortLow = async (e) => {
    if (e.target.value === "lower") {
      setRaButton(false);
    }
    dispatch(SortRatingLow());

    dispatch(refreshPage());
  };

  // LOGICA RATING

  //ORDENAMIENTO LOGICA
  const [albutton, setAlButton] = useState(false);

  const SortGames1 = async (e) => {
    if (e.target.value === "reverse") {
      setAlButton(true);
    }
    dispatch(sortReverse(e.target.value));
    dispatch(refreshPage());
  };

  const SortGames2 = async (e) => {
    if (e.target.value === "initial") {
      setAlButton(false);
    }
    dispatch(sortGames(e.target.value));
    dispatch(refreshPage());
  };
  // ORDENAMIENTO LOGICA
  // FILTRAR POR CREADOS Y API
  const [crButton, setCrButton] = useState(false);
  const created = async (e) => {
    if (e.target.value === "api") {
      setCrButton(false);
    }
    dispatch(FilterCreated(e.target.value));
    refreshPage();
  };

  const api = async (e) => {
    if (e.target.value === "creados") {
      setCrButton(true);
    }
    dispatch(FilterCreated(e.target.value));
    refreshPage();
  };

  // FILTRAR POR CREADOS Y API
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Videogame Store</h1>
      <div className={styles.container}>
        <InputSearch />
        <FilterGenres />
        <FilterAlfabetic
          button={albutton}
          SortGames1={SortGames1}
          SortGames2={SortGames2}
        />
        <CreatedGames button={crButton}created={created} api={api} />
        <SortByRating sortLow={sortLow} button={raButton} sortHigh={sortHigh} />
      </div>
      <Pagination
        gamePerPage={gamePerPage}
        allGames={allGames.length}
        pagination={pagination}
      />
      {currentGame?.map((game) => (
        <CardGame
          id={game.id}
          key={game.id}
          image={game.image}
          name={game.name}
          genres={game.genres}
        />
      ))}
    </div>
  );
}

export default Home;
