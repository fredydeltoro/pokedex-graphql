import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  pokemon: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "pokemon/set":
      return { ...state, pokemon: action.payload };
    default:
      return state;
  }
}

export default createStore(reducer, applyMiddleware(thunk));
