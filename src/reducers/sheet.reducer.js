import { GET_SHEETS } from "../actions/post.action";
import { ADD_SHEETS } from "../actions/post.action";
import { EDIT_SHEET } from "../actions/post.action";
import { DELETE_SHEET } from "../actions/post.action";
import { ADD_LIKE } from "../actions/post.action";

const initialState = {};


export default function sheetReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SHEETS:
      return action.payload
    case ADD_SHEETS:
      return [action.payload, ...state];
    case EDIT_SHEET:
      return state.map((sheet) => {
        if (sheet.id === action.payload.id) {
          return {
            ... sheet,
            content: action.payload.content
          };
        } else return sheet;
      });
    case DELETE_SHEET:
      return state.filter((sheet) => sheet.id !== action.payload.sheetId)
    case ADD_LIKE:
      return state.map((sheet) => {
        if(sheet.id === action.payload.id) {
          return {
            ... sheet,
            likes: action.payload.likes
          }
        } else return sheet
      })
    default:
      return state;
  }
}