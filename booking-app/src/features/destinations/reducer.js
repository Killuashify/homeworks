import {
  FETCH_DESTINATIONS_REQUEST,
  FETCH_DESTINATIONS_SUCCESS,
  FETCH_DESTINATIONS_FAILURE,
} from "./types";

const initial = { items: [], loading: false, error: null };

export default function destinationsReducer(state = initial, action) {
  switch (action.type) {
    case FETCH_DESTINATIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DESTINATIONS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_DESTINATIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
