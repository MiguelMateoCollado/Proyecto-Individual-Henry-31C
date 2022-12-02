import axios from "axios";

//Trae todos los juego
export function getAllGames() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: "GET_ALL_GAMES",
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_ALL_GAMES",
        payload: [{ message: error.message }],
      });
    }
  };
}
//Trae todos los juego

// Obtiene todos los generos desde la base de datos
export function getGenres() {
  return async function (dispatch) {
    try {
      let genres = await axios.get(`http://localhost:3001/genres`);
      return dispatch({
        type: "GET_GENRES",
        payload: genres.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_GENRES",
        payload: [{ message: error.message }],
      });
    }
  };
}
// Obtiene todos los generos desde la base de datos

// Obtiene todos las plataformas desde la base de datos
export function getPlatforms() {
  return async function (dispatch) {
    try {
      let platforms = await axios.get(`http://localhost:3001/platforms`);
      return dispatch({
        type: "GET_PLATFORMS",
        payload: platforms.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_PLATFORMS",
        payload: [{ message: error.message }],
      });
    }
  };
}
// Obtiene todos las plataformas desde la base de datos

// Obtiene todos los detalles de un juego
export function getDetails(id) {
  return async function (dispatch) {
    try {
      var game = await axios.get(`http://localhost:3001/videogames/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: game.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_DETAILS",
        payload: [{ message: error.message }],
      });
    }
  };
}
// Obtiene todos los detalles de un juego

// Crea el juego en la base de datos
export async function createGame(payload) {
  try {
    await axios.post(`http://localhost:3001/videogames`, payload);
  } catch (error) {
    throw error;
  }
}
// Crea el juego en la base de datos

//Filtra por los juegos creados
export function FilterCreated(typegame) {
  return async function (dispatch) {
    return dispatch({
      type: "CREATED_GAME",
      payload: typegame,
    });
  };
}
//Filtra por los juegos creados

//hace una busqueda dentro del estado
export function searchGame(name) {
  return async function (dispatch) {
    return dispatch({
      type: "SEARCH_GAME",
      payload: name,
    });
  };
}
//hace una busqueda dentro del estado

// Actualiza la pagina actual este funciona para manejar el paginado desde el estado

export function SetCurrentPage(payload) {
  return async function (dispatch) {
    return dispatch({
      type: "CURRENT_PAGE",
      payload,
    });
  };
}
// Actualiza la pagina actual este funciona para manejar el paginado desde el estado

// pone la pagina actual en 1 para cuando utilizas un boton de filtro o ordenamiento
export function refreshPage() {
  return async function (dispatch) {
    return dispatch({
      type: "REFRESH",
    });
  };
}
// pone la pagina actual en 1 para cuando utilizas un boton de filtro o ordenamiento

// Sortea los juegos por medio de su raiting de mayor a menor
export function SortRating() {
  return async function (dispatch) {
    return dispatch({
      type: "SORT_RATING_HIGHER",
    });
  };
}
// Sortea los juegos por medio de su raiting de mayor a menor

// Sortea los juegos por medio de su raiting de menor a mayor
export function SortRatingLow() {
  return async function (dispatch) {
    return dispatch({
      type: "SORT_RATING_LOWER",
    });
  };
}
// Sortea los juegos por medio de su raiting de menor a mayor

// filtra por medio del genero
export function FiltrarGeneros(genero) {
  return async function (dispatch) {
    return dispatch({
      type: "FILTER_BY_GENRES",
      payload: genero,
    });
  };
}
// filtra por medio del genero

// Sortea deacuerdo al nombre desde la Z-A
export function sortReverse(change) {
  return async function (dispatch) {
    return dispatch({
      type: "SORT_REVERSE",
      payload: change,
    });
  };
}
// Sortea deacuerdo al nombre desde la Z-A

// Ordena los juegos de la A - Z
export function sortGames(change) {
  return async function (dispatch) {
    return dispatch({
      type: "SORT_GAME",
      payload: change,
    });
  };
}
// Ordena los juegos de la A - Z
