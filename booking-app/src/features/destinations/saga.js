import { takeEvery, put } from "redux-saga/effects";
import {
  FETCH_DESTINATIONS_REQUEST,
  FETCH_DESTINATIONS_SUCCESS,
  FETCH_DESTINATIONS_FAILURE,
} from "./types";
import { api } from "../../api/axios";

function* fetchDestinationsWorker() {
  try {
    const response = yield api.get("/destination");
    yield put({
      type: FETCH_DESTINATIONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_DESTINATIONS_FAILURE,
      error: error.message,
    });
  }
}

export function* destinationsWatcher() {
  yield takeEvery(FETCH_DESTINATIONS_REQUEST, fetchDestinationsWorker);
}
