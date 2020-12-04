import { createStore, applyMiddleware } from "redux";
import CreateSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = CreateSagaMiddleware();

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
