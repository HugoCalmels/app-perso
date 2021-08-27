import axios from 'axios';


export const GET_LIBRARY = "GET_LIBRARY";

export const getLibrary = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/library")
    .then((res) => {
      dispatch({ type: GET_LIBRARY, payload: res.data });
    })
    .catch((err) => console.log(err));
  };
};