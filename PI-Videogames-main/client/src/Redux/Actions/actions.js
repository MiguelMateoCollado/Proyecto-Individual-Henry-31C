import axios from "axios";
export const GET_ALL_GAMES = "GET_ALL_GAMES";

export function getAllGames() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: "GET_ALL_GAMES",
      payload: json.data,
    });
  };
}
export function getGenres() {
  return async function (dispatch) {
    let genres = await axios.get(`http://localhost:3001/genres`);
    return dispatch({
      type: "GET_GENRES",
      payload: genres.data,
    });
  };
}
export function getPlatforms() {
  return async function (dispatch) {
    let platforms = await axios.get(`http://localhost:3001/platforms`);
    return dispatch({
      type: "GET_PLATFORMS",
      payload: platforms.data,
    });
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    var game = await axios.get(`http://localhost:3001/videogames/${id}`);
    return dispatch({
      type: "GET_DETAILS",
      payload: game.data
    })
  };
}

export async function createGame(payload) {
  await axios.post(`http://localhost:3001/videogames`, payload);
}

export function FilterCreated(typegame) {
  return async function (dispatch) {
    return dispatch({
      type: "CREATED_GAME",
      payload: typegame,
    });
  };
}

export function searchGame(name) {
  return async function (dispatch) {
    return dispatch({
      type: "SEARCH_GAME",
      payload: name,
    });
  };
}

export function SetCurrentPage(payload) {
  return async function (dispatch) {
    return dispatch({
      type: "CURRENT_PAGE",
      payload,
    });
  };
}
export function refreshPage() {
  return async function (dispatch) {
    return dispatch({
      type: "REFRESH",
    });
  };
}
export function SortRating(forma) {
  return async function (dispatch) {
    return dispatch({
      type: "SORT_RATING_HIGHER",
      payload: forma,
    });
  };
}

export function SortRatingLow() {
  return async function (dispatch) {
    return dispatch({
      type: "SORT_RATING_LOWER",
    });
  };
}

export function FiltrarGeneros(genero) {
  return async function (dispatch) {
    return dispatch({
      type: "FILTER_BY_GENRES",
      payload: genero,
    });
  };
}

export function sortReverse(change) {
  return async function (dispatch) {
    return dispatch({
      type: "SORT_REVERSE",
      payload: change,
    });
  };
}

export function sortGames(change) {
  return async function (dispatch) {
    return dispatch({
      type: "SORT_GAME",
      payload: change,
    });
  };
}
