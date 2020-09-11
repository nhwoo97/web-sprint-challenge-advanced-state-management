import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const POST_SMURF = "POST_SMURF";

const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS });

  console.log("this is the res data");

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_SMURFS_ERROR,
        payload: { message: "sorry, no smurfs today" },
      });
    });
};

const postSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      dispatch({ type: POST_SMURF, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_SMURFS_ERROR,
        payload: { message: "sorry could not add" },
      });
    });
};

export { fetchSmurfs, postSmurf };
