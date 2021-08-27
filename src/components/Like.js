import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addLike} from '../actions/post.action.js';

const Like = ({sheet}) => {

  const user = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();

  const handleLike = () => {
    const sheetData = {
      title: sheet.title,
      author: sheet.author,
      content: sheet.content,
      likes: ++sheet.likes,
      id: sheet.id,
      type: sheet.type
    }
    const userData = {
      name: user[0].name,
      likes: ++user[0].likes,
      id: user[0].id
    }
    dispatch(addLike(sheetData));
  }

  return (
    <div onClick={handleLike}>
      <button type="submit">Like</button>
      <span>{sheet.likes}</span>
      
    </div>
  );
};

export default Like;