import {
  FETCH_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_ERROR,
  POST_SMURF,
} from "../actions";

const initialState = {
  data: [],
  loadingSmurfs: false,
  error: "",
  message: "",
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        loadingSmurfs: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        loadingSmurfs: false,
        data: action.payload,
      };
    case FETCH_SMURFS_ERROR:
      return {
        ...state,
        loadingSmurfs: false,
        error: action.payload,
      };
    case POST_SMURF:
      return {
        ...state,
        loadingSmurfs: false,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default smurfReducer;
