import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import middleware from "../../common/middleware";
import moxios from "moxios";
import {
  getCharacterDetail,
} from "../../globalstate/actions/characterdetail";
import {
  GET_CHARACTER_BEGIN
} from "../../globalstate/actions/types";
import { getCharacterMock } from "../../../mocks/index";

const middlewares = [thunk, middleware];
const mockStore = configureMockStore(middlewares);

describe("characterDetail actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("getCharacterMock should get characters", () => {
    const store = mockStore({});

    return store.dispatch(getCharacterDetail(1)).then(() => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getCharacterMock
        });
      });

      const expectedActions = [{ type: GET_CHARACTER_BEGIN, payload: {} }];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
