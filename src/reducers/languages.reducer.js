import { GET_LANGUAGE } from "../actions/languages.action";

const initialState = {};


export default function languageReducer(state = initialState, action) {

  switch (action.type){
    case GET_LANGUAGE:
    return action.payload;
    default: 
    return state;
  }
  
}