import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

window.__REDUX_DEVTOOLS_EXTENSION__ =
  window.__REDUX_DEVTOOLS_EXTENSION__ ||
  function(f) {
    return f;
  };

const middlewares = [applyMiddleware(thunk)];

export const createStoreWithMiddleWare = compose(...middlewares)(createStore);
export default createStoreWithMiddleWare(rootReducer);
