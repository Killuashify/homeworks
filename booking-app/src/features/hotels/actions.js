import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE,
} from "./types";
import { api } from "../../api/axios";

// Действие для запроса отелей
export const fetchHotels = (params) => async (dispatch) => {
  dispatch({ type: FETCH_HOTELS_REQUEST });
  try {
    // Добавьте параметры в запрос
    const response = await api.get("/hotels", {
      params: {
        checkIn: params.checkIn,
        checkOut: params.checkOut,
        destination: params.destination,
      },
    });
    dispatch(fetchHotelsSuccess(response.data));
  } catch (error) {
    dispatch(fetchHotelsFailure(error.message));
  }
};

// Успешное получение отелей
export const fetchHotelsSuccess = (payload) => ({
  type: FETCH_HOTELS_SUCCESS,
  payload,
  loading: false, // Указываем, что загрузка завершена
});

// Ошибка при получении отелей
export const fetchHotelsFailure = (error) => ({
  type: FETCH_HOTELS_FAILURE,
  error,
  loading: false, // Указываем, что загрузка завершена
});
