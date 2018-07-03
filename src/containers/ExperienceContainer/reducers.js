import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE
} from "./constants";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        isFetching: true
      };
    case FETCH_JOBS_SUCCESS:
      return {
        isFetching: false,
        jobs: action.response.jobs
      };
    case FETCH_JOBS_FAILURE:
      return {
        isFetching: false
      };
    default:
      return state;
  }
};

export default reducer;
