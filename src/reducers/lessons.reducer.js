import { GET_LESSON } from "../actions/lesson.action";

const initialState = {};


export default function lessonReducer(state = initialState, action) {

  switch (action.type){
    case GET_LESSON:
    return action.payload;
    default: 
    return state;
  }
  
}