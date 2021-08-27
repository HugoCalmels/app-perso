import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from './Utils';

const User = () => {
  const user = useSelector((state) => state.userReducer)

  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(user[0]) && user[0].name}</h3>
      
        <p> age : 35 ans</p>
      </div>
    </div>
  );
};

export default User;