import {
  GET_SMURF_FAIL,
  GET_SMURF_SUCCESS,
  FETCH_SMURFS,
  POSTING_NEW_SMURF,
  POST_FAIL,
  POST_SUCCESS,
} from "../actions/index.js";

const initialState = {
  smurfs: [],
  error: "",
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case GET_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case GET_SMURF_SUCCESS:
      return {
        isFetching: false,
        error: "",
        smurfs: action.payload
      };
    case POSTING_NEW_SMURF:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case POST_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case POST_SUCCESS:
    case GET_SMURF_SUCCESS:
      return {
        isFetching: false,
        error: "",
        smurfs: action.payload
      };

    default:
      return state;
  }
};