import {
  FETCH_DESTINATIONS_REQUEST,
  FETCH_DESTINATIONS_SUCCESS,
  FETCH_DESTINATIONS_FAILURE,
} from "./types";

export const fetchDestinations = () => ({ type: FETCH_DESTINATIONS_REQUEST });
export const fetchDestinationsSuccess = (items) => ({
  type: FETCH_DESTINATIONS_SUCCESS,
  payload: items,
});
export const fetchDestinationsFailure = (err) => ({
  type: FETCH_DESTINATIONS_FAILURE,
  payload: err,
  error: true,
});

export const filterDestinations = (query) => ({
  type: "FILTER_DESTINATIONS",
  payload: query,
});
