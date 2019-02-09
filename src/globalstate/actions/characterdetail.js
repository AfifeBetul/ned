import {
  GET_CHARACTER_BEGIN,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_FAIL,
  RESET_SELECTED_CHARACTER
} from "../actions/types";

import { GET_CHARACTER_URL } from "../../constants/serviceurls";
import { FetchMethods } from "../../constants";

export function getCharacterDetail(characterID) {
  return async dispatch => {
    dispatch({
      type: [GET_CHARACTER_BEGIN, GET_CHARACTER_SUCCESS, GET_CHARACTER_FAIL],
      meta: {
        url: `/${GET_CHARACTER_URL}${characterID}`,
        method: FetchMethods.GET
      }
    });
  };
}

export function resetCharacter() {
  return async dispatch => {
    dispatch({
      type: RESET_SELECTED_CHARACTER,
      payload: ""
    });
  };
}
