import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenres,
  getPlatforms,
  createGame,
} from "../../Redux/Actions/actions";

export default function GamesCreate() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const [errors, setError] = useState({});
  const [button, setButton] = useState(false);
  const [input, setInput] = useState({
    name: "",
    description: "",
    rating: 0,
    image: "",
    date: "",
    genres: [],
    platforms: [],
  });
  useEffect(() => {
    console.log(
      "falta todo esto",
      !(
        input.name &&
        input.description &&
        input.date &&
        input.rating > 0 &&
        input.genres.length > 0 &&
        input.platforms.length > 0
      ),
      "valor actual del boton",
      button
    );
    setButton(
      !(
        input.name &&
        input.description &&
        input.date &&
        input.rating > 0 &&
        input.genres.length > 0 &&
        input.platforms.length > 0
      )
    );
  }, [input, button]);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  const validacion = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = "Se requiere ingresar un nombre";
    }

    if (!input.date) {
      errors.date = "Requiere ingresar una fecha";
    }

    if (input.platforms.length <= 0) {
      errors.platforms = "Debes ingresar almenos 1 plataforma";
    }

    if (input.genres.length <= 0) {
      errors.genres = "Debes ingresar al menos 1 genero";
    }

    if (input.genres.length > 6) {
      errors.genres = "Son demasiados generos de juego";
    }
    if (input.image === "") {
      errors.image = "Ingresa una Url con la imagen";
      setInput({
        ...input,
        image:
          "https://i.pinimg.com/564x/73/e5/4c/73e54c62a2fd01698776fc74e4873ab2.jpg",
      });
    }

    return errors;
  };

  const handleSubmit = async () => {
    alert("Game Creado");
    await createGame(input);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validacion({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCheck = (e) => {
    setInput({
      ...input,
      genres: input.genres.includes(e.target.value)
        ? input.genres.filter((el) => el !== e.target.value)
        : [...input.genres, e.target.value],
    });
    setError(
      validacion({
        ...input,
        genres: input.genres.includes(e.target.value)
          ? input.genres.filter((el) => el !== e.target.value)
          : [...input.genres, e.target.value],
      })
    );
  };

  const handleCheckPlatforms = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.includes(e.target.value)
        ? input.platforms.filter((el) => el !== e.target.value)
        : [...input.platforms, e.target.value],
    });
    setError(
      validacion({
        ...input,
        platforms: input.platforms.includes(e.target.value)
          ? input.platforms.filter((el) => el !== e.target.value)
          : [...input.platforms, e.target.value],
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label> <br />
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="name"
          value={input.name}
        />
        {<p>{errors.name}</p>}
        <br /> <br />
        <label>Description</label> <br />
        <textarea
          type="text"
          onChange={(e) => handleChange(e)}
          name="description"
          value={input.description}
        />
        {<p>{errors.description}</p>}
        <br /> <br />
        <label>Rating</label> <br />
        <input
          type="number"
          name="rating"
          min="0"
          max="100"
          onChange={(e) => handleChange(e)}
          value={input.rating}
        />
        {<p>{errors.rating}</p>}
        <br />
        <br />
        <label>Image</label> <br />
        <input
          type="text"
          name="image"
          value={input.image}
          onChange={(e) => handleChange(e)}
        />
        {<p>{errors.image}</p>}
        <br />
        <br />
        <label>Fecha</label> <br />
        <input
          type="date"
          name="date"
          value={input.date}
          onChange={(e) => handleChange(e)}
        />
        {<p>{errors.date}</p>}
        <h3>Generos</h3>
        {genres?.map((gen) => {
          return (
            <div key={gen.id}>
              <label>{gen.name}</label>
              <input
                onChange={(e) => handleCheck(e)}
                type="checkbox"
                name={gen.name}
                value={gen.name}
                id={gen.id}
              />
            </div>
          );
        })}
        {<p>{errors.genres}</p>}
        <h3>Plataformas</h3>
        {platforms?.map((plat) => {
          return (
            <div key={plat.id}>
              <label>{plat.name}</label>
              <input
                onChange={(e) => handleCheckPlatforms(e)}
                type="checkbox"
                name={plat.name}
                value={plat.name}
                id={plat.id}
              />
            </div>
          );
        })}
        {<p>{errors.platforms}</p>}
        <button disabled={button} type="Submit">
          Formulario enviado
        </button>
      </form>
    </div>
  );
}
