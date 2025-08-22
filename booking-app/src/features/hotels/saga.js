import { takeEvery, put } from "redux-saga/effects";
import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE,
} from "./types";
import { api } from "../../api/axios";

function* fetchHotelsWorker() {
  try {
    const response = yield api.get("/hotels");
    yield put({
      type: FETCH_HOTELS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_HOTELS_FAILURE,
      error: error.message,
    });
  }
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_HOTELS_REQUEST, fetchHotelsWorker);
}
