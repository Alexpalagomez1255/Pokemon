const initialState = {
  types: [],
  pokemons: [],
  type: "",
  order: "",
  fav: [],
 };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TYPE":
      return {
        ...state,
        types: action.payload,
      };
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "GET_NAME":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "FILTER":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "BY_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "ORDER":
      return {
        ...state,
        order: action.payload,
      };
    case "ADD":
      if(state.fav.length === 8) state.fav.shift();
      return {
        ...state,
        fav: [...state.fav, action.payload]
      };
     
    default:
      return state;
  }
};

export default rootReducer;
