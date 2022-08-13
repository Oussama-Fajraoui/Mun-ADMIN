import React from "react";
import '../index.css'
const UsersContainer = (props) => (
  <div className="user-row" onClick={()=>{props.showProfile(props.oneuser)}}>
    <img className="user-avatar" src={props.oneuser.image}/>
    <div className="user-name">{props.oneuser.fullName}</div>
    <div className="user-email">{props.oneuser.email}</div>
  </div>
);

export default UsersContainer;