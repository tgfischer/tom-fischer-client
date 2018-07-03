export const apiAction = ({ type, method, endpoint }) => async dispatch => {
  dispatch({ type: `${type}_REQUEST` });

  try {
    const response = await (await fetch(endpoint, {
      method,
      mode: "cors"
    })).json();
    dispatch({ type: `${type}_SUCCESS`, response });
  } catch (err) {
    dispatch({ type: `${type}_FAILURE`, err });
    throw err;
  }
};
