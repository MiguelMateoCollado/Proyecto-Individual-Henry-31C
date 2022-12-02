const initialState = {
  games: [],
  allgames: [],
  currentPage: 1,
  gamePerPage: 14,
  genres: [],
  platforms: [],
  detail: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    //Trae todos los juegos
    case "GET_ALL_GAMES":
      return {
        ...state,
        games: action.payload,
        allgames: action.payload,
      };
    //Trae todos los juegos

    //hace una busqueda dentro del estado
    case "SEARCH_GAME":
      let gameFinded = state.allgames.filter((game) =>
        game.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        games: gameFinded,
      };
    //hace una busqueda dentro del estado

    // Actualiza la pagina actual este funciona para manejar el paginado desde el estado
    case "CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    // Actualiza la pagina actual este funciona para manejar el paginado desde el estado

    // Obtiene todos los generos desde la base de datos
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    // Obtiene todos los generos desde la base de datos

    // Obtiene todos las plataformas desde la base de datos
    case "GET_PLATFORMS":
      return {
        ...state,
        platforms: action.payload,
      };
    // Obtiene todos las plataformas desde la base de datos

    // Sortea deacuerdo al nombre desde la Z-A
    case "SORT_REVERSE":
      const sorted = state.allgames.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        games: [...sorted, 1],
      };
    // Sortea deacuerdo al nombre desde la Z-A
    case "SORT_GAME":
      const sortedAZ = state.allgames.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        games: [...sortedAZ, 1],
      };
    // Obtiene todos los detalles de un juego
    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

    // Obtiene todos los detalles de un juego

    //Filtra por los juegos creados
    case "CREATED_GAME":
      let createdGames;
      if (action.payload === "creados") {
        createdGames = state.allgames.filter(
          (game) => game.createdInDb === true
        );
      } else {
        createdGames = state.allgames;
      }
      return {
        ...state,
        games: createdGames,
      };

    //Filtra por los juegos creados

    // Sortea los juegos por medio de su raiting de menor a mayor
    case "SORT_RATING_LOWER":
      const ratingLower = state.games.sort((a, b) => {
        if (a.rating > b.rating) {
          return -1;
        }
        if (a.rating < b.rating) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        games: [...ratingLower, 1],
      };
    // Sortea los juegos por medio de su raiting de menor a mayor

    // Sortea los juegos por medio de su raiting de mayor a menor
    case "SORT_RATING_HIGHER":
      const ratingHigh = state.games.sort((a, b) => {
        if (a.rating > b.rating) {
          return 1;
        }
        if (a.rating < b.rating) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        games: [...ratingHigh, 1],
      };
    // Sortea los juegos por medio de su raiting de mayor a menor

    // pone la pagina actual en 1 para cuando utilizas un boton de filtro o ordenamiento
    case "REFRESH":
      return {
        ...state,
        currentPage: 1,
      };
    // pone la pagina actual en 1 para cuando utilizas un boton de filtro o ordenamiento

    // filtra por medio del genero
    case "FILTER_BY_GENRES":
      let filterByGen;
      if (action.payload !== "Todos") {
        filterByGen = state.allgames.filter((game) => {
          if (game.genres.includes(action.payload)) {
            return game;
          }
        });
      } else {
        filterByGen = state.allgames;
      }
      // eslint-disable-next-line array-callback-return

      return {
        ...state,
        games: filterByGen,
      };
    // filtra por medio del genero
    default:
      return state;
  }
}

export default reducer;
