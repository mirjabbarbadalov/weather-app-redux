const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

import API_KEY from "../../apikey";

export const fetchPosts = (location) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_WEATHER_REQUEST,
    });

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${location}&units=metric`
      );
      const data = await response.json();
      // console.log(data);
      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: data,
      });

      if (data.cod !== 200) {
        dispatch({
          type: FETCH_WEATHER_FAILURE,
          payload: data.message,
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_WEATHER_FAILURE,
      });
    }
  };
};
