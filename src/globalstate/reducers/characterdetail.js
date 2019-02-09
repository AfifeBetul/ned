import {
  GET_CHARACTER_BEGIN,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_FAIL,
  SET_SELECTED_CHARACTER,
  RESET_SELECTED_CHARACTER
} from "../actions/types";

const initialState = {
  selectedCharacterID: null,
  fetching: false,
  failed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_CHARACTER:
      return { ...state, selectedCharacterID: action.payload };
    case RESET_SELECTED_CHARACTER:
      return { ...initialState };
    case GET_CHARACTER_BEGIN:
      return { ...state, fetching: true, failed: false };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        fetching: false,
        failed: false,
        character: action.payload
      };
    case GET_CHARACTER_FAIL:
      return { ...state, fetching: false, failed: true };
    default:
      return state;
  }
}
