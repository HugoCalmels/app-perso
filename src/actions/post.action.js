import axios from 'axios';


export const GET_SHEETS = "GET_SHEETS";
export const ADD_SHEETS = "ADD_SHEETS";
export const EDIT_SHEET = "EDIT_SHEET";
export const DELETE_SHEET = "DELETE_SHEET";
export const ADD_LIKE = "ADD_LIKE";

export const getSheets = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/sheets?_sort=id&_order=desc')
    .then((res) => {
      dispatch({ type: GET_SHEETS, payload: res.data });
    })
    .catch((err) => console.log(err));
  };
};

export const addSheets = (data) => {
  return (dispatch) => {
    return axios.post('http://localhost:3000/sheets', data)
    .then((res) => {
      dispatch({ type: ADD_SHEETS, payload: data });
    })
    .catch((err) => console.log(err));
  };
};

export const editSheet = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3000/sheets/${data.id}`,
      data: { ...data }
    })
        .then((res) => {
          dispatch({ type: EDIT_SHEET, payload: {...data}
          });
        })
        .catch((err) => console.error(err));
  };
};


export const deleteSheet = (sheetId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:3000/sheets/${sheetId}`,
    })
      .then(() => {
        dispatch({ type: DELETE_SHEET, payload: { sheetId } });
      })
      .catch((err) => console.log(err));
  };
};


export const addLike = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3000/sheets/${data.id}`,
      data: { ...data }
    })
        .then((res) => {
          dispatch({ type: ADD_LIKE, payload: {...data}
          });
        })
        .catch((err) => console.error(err));
  };
};