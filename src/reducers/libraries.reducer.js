import { GET_LIBRARY } from "../actions/libraries.action";

const initialState = {};


export default function libraryReducer(state = initialState, action) {

  switch (action.type){
    case GET_LIBRARY:
    return action.payload;
    default: 
    return state;
  }
  
}