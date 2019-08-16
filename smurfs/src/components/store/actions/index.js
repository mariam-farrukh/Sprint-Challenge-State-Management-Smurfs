import axios from "axios";
export const FETCH_SMURFS = "FETCH_SMURFS";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAIL = "GET_SMURF_FAIL";
export const POSTING_NEW_SMURF = "POSTING_NEW_SMURF";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const fetchSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(rej => {
      console.log(rej);
      dispatch({
        type: GET_SMURF_FAIL,
        payload: rej.response
      });
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: POSTING_NEW_SMURF });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log("POST data", res);
      dispatch({
        type: POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(rej => {
      console.log("Rejected, newSmurf below", rej);
      console.log(newSmurf);
      dispatch({
        type: POST_FAIL,
        payload: rej.data
      });
    });
};