import {
  GET_ALL_CHARACTERS_BEGIN,
  GET_ALL_CHARACTERS_SUCCESS,
  GET_ALL_CHARACTERS_FAIL
} from "../actions/types";

const initialState = {
  characters: [],
  info: {},
  fetching: false,
  failed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS_BEGIN:
      return { ...state, fetching: true, failed: false };
    case GET_ALL_CHARACTERS_SUCCESS:
      const { info, results } = action.payload;
      return {
        ...state,
        fetching: false,
        failed: false,
        info,
        characters: [...state.characters, ...results]
      };
    case GET_ALL_CHARACTERS_FAIL:
      return { ...state, fetching: true, failed: false };
    default:
      return state;
  }
}
