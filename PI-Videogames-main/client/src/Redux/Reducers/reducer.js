const initialState = {
  games: [],
  allgames: [],
  currentPage: 1,
  gamePerPage: 15,
  genres: [],
  platforms: [],
  detail: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_GAMES":
      return {
        ...state,
        games: action.payload,
        allgames: action.payload,
      };
    case "SEARCH_GAME":
      let gameFinded = state.allgames.filter((game) =>
        game.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        games: gameFinded,
      };

    case "CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    case "GET_PLATFORMS":
      return {
        ...state,
        platforms: action.payload,
      };

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
        games: sorted,
      };
    case "CREATE_GAME":
      return {
        ...state,
      };
    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };
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
    case "SORT_RATING_LOWER":
      const ratingLower = state.allgames.sort((a, b) => {
        if (a.rating < b.rating) {
          return -1;
        }
        if (a.rating > b.rating) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        games: ratingLower,
      };

    case "SORT_RATING_HIGHER":
      const ratingHigher = state.allgames.sort((a, b) => {
        if (a.rating < b.rating) {
          return 1;
        }
        if (a.rating > b.rating) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        games: ratingHigher,
      };

    case "SORT_GAME":
      let sortedAZ;
      sortedAZ = state.allgames.sort((a, b) => {
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
        games: sortedAZ,
      };
    case "REFRESH":
      return {
        ...state,
        currentPage: 1,
      };

    case "FILTER_BY_GENRES":
      let filterByGen;
      if (action.payload !== "Todos") {
        // eslint-disable-next-line array-callback-return
        filterByGen = state.allgames.filter((game) => {
          if (game.genres.includes(action.payload)) {
            return game;
          }
        });
      } else {
        filterByGen = state.allgames;
      }
      return {
        ...state,
        games: filterByGen,
      };

    default:
      return state;
  }
}

export default reducer;
