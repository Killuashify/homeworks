import { all, fork } from "redux-saga/effects";
import { hotelsWatcher } from "./hotels/saga";
import { destinationsWatcher } from "./destinations/saga";

export default function* rootSaga() {
  yield all([fork(hotelsWatcher), fork(destinationsWatcher)]);
}
