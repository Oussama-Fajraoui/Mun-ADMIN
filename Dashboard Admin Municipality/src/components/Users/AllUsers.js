import React from "react";
import UsersContainer from "./UsersContainer";
import '../index.css'
const AllUsers = (props) => (
  <div className="all-users">
    { 
     props.AllusersData.map(element=>{
      return( 
    <UsersContainer oneuser={element} showProfile={props.showProfile}/>
    )
    })

    }
    

  </div>
);

export default AllUsers;