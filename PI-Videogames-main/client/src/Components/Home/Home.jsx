import CardGame from "../CardGame/CardGame";
import { SetCurrentPage, getAllGames } from "../../Redux/Actions/actions";
import { useEffect, useState } from "react";
import React from "react";
import { Loader } from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import Pagination from "../Pagination/pagination";
import Navbar from "../Navbar/Navbar";
function Home() {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);
  const currentPage = useSelector((state) => state.currentPage);
  const gamePerPage = useSelector((state) => state.gamePerPage);
  const indexOfLastGame = currentPage * gamePerPage;
  const indexOfFirstGame = indexOfLastGame - gamePerPage;
  const currentGame = allGames[0] && allGames[0].message ? [] : allGames.slice(indexOfFirstGame, indexOfLastGame);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    dispatch(getAllGames());
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [dispatch]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pagination = (pageNumber) => {
    dispatch(SetCurrentPage(pageNumber));
  };

  // FILTRAR POR CREADOS Y API
  return (
    <div>
      {loading === true ? (
        <Loader />
      ) : (
        <div className={styles.home}>
          <h1 className={styles.title}>Videogame Henry</h1>
          <Navbar></Navbar>
          <Pagination
            gamePerPage={gamePerPage}
            allGames={allGames.length}
            pagination={pagination}
          />
          {currentGame.length !== 0 ? (
            // eslint-disable-next-line array-callback-return
            currentGame.map((game) => {
              if (typeof game === "object") {
                return (
                  <CardGame
                    id={game.id}
                    key={game.id}
                    image={game.image}
                    name={game.name}
                    genres={game.genres}
                  />
                );
              }
            })
          ) : (
            <h1>{allGames[0] && allGames[0].message ? allGames[0].message : !currentGame.length && "No hay juego"}</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
