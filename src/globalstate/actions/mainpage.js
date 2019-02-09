import {
  GET_ALL_CHARACTERS_BEGIN,
  GET_ALL_CHARACTERS_SUCCESS,
  GET_ALL_CHARACTERS_FAIL,
  SET_SELECTED_CHARACTER
} from "../actions/types";

import { GET_ALL_CHARACTERS_URL } from "../../constants/serviceurls";
import { FetchMethods } from "../../constants";

export function getAllCharacters(nextURL) {
  return async dispatch => {
    dispatch({
      type: [
        GET_ALL_CHARACTERS_BEGIN,
        GET_ALL_CHARACTERS_SUCCESS,
        GET_ALL_CHARACTERS_FAIL
      ],
      meta: {
        url: nextURL ? nextURL : `/${GET_ALL_CHARACTERS_URL}`,
        method: FetchMethods.GET
      }
    });
  };
}

export function setSelectedCharacter(id) {
  return async dispatch => {
    dispatch({
      type: SET_SELECTED_CHARACTER,
      payload: id
    });
  };
}
