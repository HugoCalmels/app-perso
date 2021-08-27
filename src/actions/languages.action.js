import axios from 'axios';


export const GET_LANGUAGE = "GET_LANGUAGE";

export const getLanguage = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/language")
    .then((res) => {
      dispatch({ type: GET_LANGUAGE, payload: res.data });
    })
    .catch((err) => console.log(err));
  };
};