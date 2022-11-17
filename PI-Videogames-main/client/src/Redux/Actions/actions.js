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
