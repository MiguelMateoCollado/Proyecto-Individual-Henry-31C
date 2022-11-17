const initialState = {
  games: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_GAMES":
      return {
        ...state,
        games: action.payload,
      };
    default:
      return state;
      break;
  }
}

export default reducer;
