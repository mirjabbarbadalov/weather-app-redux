const initialState = {
  data: [],
  loading: true,
  error: false,
  errorMessage: null,
  success: false,
};
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_REQUEST":
      return {
        ...state,
        success: false,
        loading: true,
        error: false,
      };

    case "FETCH_WEATHER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
        success: true,
      };

    case "FETCH_WEATHER_FAILURE":
      return {
        ...state,
        error: true,
        data: [],
        loading: false,
        errorMessage: action.payload,
        success: false,
      };

    default:
      return state;
  }
};
