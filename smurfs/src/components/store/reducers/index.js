import {
  GET_SMURF_FAIL,
  GET_SMURF_SUCCESS,
  FETCH_SMURFS,
  POSTING_NEW_SMURF,
  POST_FAIL,
  POST_SUCCESS,
  DELETING_SMURF,
  DELETE_SMURF_FAIL,
  DELETE_SMURF_SUCCESS
} from "../actions";

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
      return {
        isFetching: false,
        error: "",
        smurfs: action.payload
      };
    case DELETING_SMURF:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case DELETE_SMURF_SUCCESS:
      return {
        isFetching: false,
        error: "",
        smurfs: action.payload
      };
    default:
      return state;
  }
};