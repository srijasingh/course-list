import { combineReducers, applyMiddleware, compose, legacy_createStore as createStore  } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

const rootReducer = combineReducers({
  Reducer: Reducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    /* ----  middlewares ----  */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;