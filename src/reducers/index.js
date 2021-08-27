import { combineReducers } from "redux";
import sheetReducer from "./sheet.reducer";
import userReducer from "./user.reducer";
import lessonReducer from "./lessons.reducer";
import languageReducer from "./languages.reducer";
import libraryReducer from "./libraries.reducer";

export default combineReducers( {
  sheetReducer,
  userReducer,
  lessonReducer,
  languageReducer,
  libraryReducer
});