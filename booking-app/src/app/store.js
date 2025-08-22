import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { thunk } from "redux-thunk";
import { createReduxHistoryContext } from "redux-first-history";
import { browserHistory } from "./history";

import destinationsReducer from "../features/destinations/reducer";
import hotelsReducer from "../features/hotels/hotelsSlice";
import rootSaga from "../features/rootSaga";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: browserHistory,
  });

const rootReducer = combineReducers({
  router: routerReducer,
  destinations: destinationsReducer,
  hotels: hotelsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(routerMiddleware, sagaMiddleware, thunk);

export const store = createStore(rootReducer, enhancer);
export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);
