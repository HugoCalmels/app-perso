import axios from 'axios';


export const GET_LESSON = "GET_LESSON";

export const getLesson = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/lesson")
    .then((res) => {
      dispatch({ type: GET_LESSON, payload: res.data });
    })
    .catch((err) => console.log(err));
  };
};