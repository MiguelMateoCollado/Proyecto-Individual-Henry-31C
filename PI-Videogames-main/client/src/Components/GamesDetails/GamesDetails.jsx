import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/Actions/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./GamesDetails.module.css";

export default function GamesDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);

  const myGame = useSelector((state) => state.detail);



  console.log(myGame.image);

  return (
    <div>
      <h1>Pagina detalles</h1>
      {myGame !== undefined ? (
        <div>
          <div>
            <img src={myGame.image} width="700" height="500" class="img-fluid rounded-top" alt="" />
          </div>
          <h1>{myGame.name}</h1>
          <h2>Rating:{myGame.rating}</h2>
          <h2>Date:{myGame.date}</h2>
          <p>{myGame.description}</p>
          <h4>
            Generos:{" "}
            {!myGame.createdInDb
              ? myGame.genres + " "
              : myGame.genres.map((gen) => gen.name + " ")}
          </h4>
          <h4>
            Generos:{" "}
            {!myGame.createdInDb
              ? myGame.platforms + " "
              : myGame.platforms.map((plat) => plat.name + " ")}
          </h4>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Link to="/home">
        <button>volver</button>
      </Link>
    </div>
  );
}
