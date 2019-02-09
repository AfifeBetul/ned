import { BASE_API } from "../constants/serviceurls";
import { FetchMethods } from "../constants/index";

export default function request({ dispatch }) {
  return next => async action => {
    const { type, meta = {} } = action;
    if (!type || type.constructor !== Array) return next(action);
    const [BEGIN, SUCCESS, FAILURE] = action.type;
    let { url, method, ...requestParams } = meta;
    let fetchParams = {
      method,
      body: method === FetchMethods.GET ? null : JSON.stringify(requestParams)
    };
    dispatch({
      type: BEGIN,
      payload: requestParams
    });

    if (url.match(/^http/) === null) url = `${BASE_API}${url}`;
    const response = await fetch(url, fetchParams);
    const result = await response.json();
    dispatch({
      type: response.status >= 200 && response.status < 300 ? SUCCESS : FAILURE,
      payload: result
    });
  };
}
