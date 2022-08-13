import React from "react";
import AllUsers from "../components/Users/AllUsers";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";
import '../components/index.css'
/* import db from '../firebase/config' */
/* 
async function getUsers() {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList;
} */

var img1="data:image/jpeg;base64,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"
var img2="data:image/jpeg;base64,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"
var img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4bGUGYubB6zHUVhoq4hKDk-tqy8AzBuJFQ&usqp=CAU"

function User(){
 var AllusersData=[{"avatar":img1,"name":"aziz hssin","email":"hssine.medaziz1@gmail.com","phone":"28315166","adress":"50 rome El mourouj 4"},{"avatar":img2,"name":"aziz hssin","email":"hssine.medaziz1@gmail.com","phone":"52102093","adress":"18 chichane El mourouj 5"},{"avatar":img3,"name":"aziz hssin","email":"hssine.medaziz1@gmail.com","phone":"29009039","adress":"11 tadjaksten El mourouj4"}]
 var state={
  "profile":{
      "avatar":"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
      "name":"unknown",
      "phone":"",
      "adress":"",
      "email":"no email adress",
      
    }
}

var showProfile=function(newprofile){ 
  this.state.profile=[newprofile]
  console.log(this.state.profile) 
}


/* var fetchUsers =()=>(

  ) */
  return(
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card class="profils-header-row">  
           
              <Card.Body>
                <div className="head">
              
                <p className="username">Username</p>
                <p className="email">Email</p>
                </div>
                
                <AllUsers AllusersData={AllusersData} showProfile={showProfile} />
              </Card.Body>
            </Card>
          </Col>

          {/* profile box */}
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/medium+grey+banner.jpg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={state.profile.avatar}
                    ></img>
                    <h5 className="title">{state.profile.name}</h5>
                  </a>
                  <p className="description">{state.profile.email}</p>
                </div>
                <p className="description text-center">
                  <p>{state.profile.adress}</p><br></br>
                  <p>{state.profile.phone}</p> 
                  
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
  }

export default User;
