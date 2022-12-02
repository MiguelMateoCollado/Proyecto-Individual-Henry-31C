import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/Actions/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./GamesDetails.module.css";
import { Loader } from "../Loader/Loader";

export default function GamesDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    dispatch(getDetails(id));
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [dispatch,id]);

  const myGame = useSelector((state) => state.detail);

  return (
    <div>
      {loading === true ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <h1>Pagina detalles</h1>
          <div>
            <img
              src={myGame.image}
              width="700"
              height="500"
              className={styles.image}
              alt=""
            />
          </div>
          <h1>{myGame.name}</h1>
          <h2>Rating:{myGame.rating}</h2>
          <h2>Date:{myGame.date}</h2>
          <h2>Generos</h2>
          <h3>
            {!myGame.createdInDb
              ? myGame.genres + " "
              : myGame.genres.map((gen) => gen.name + " ")}
          </h3>
          <h2>Plataformas</h2>
          <h3>
            {!myGame.createdInDb
              ? myGame.platforms + " "
              : myGame.platforms.map((plat) => plat + " ")}
          </h3>
          <Link to="/home">
            <button className={styles.alfa}>volver</button>
          </Link>
        </div>
      )}
    </div>
  );
}
