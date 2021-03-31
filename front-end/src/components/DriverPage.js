import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router ,Switch,Route}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import{Link} from 'react-router-dom';


const DriverPage=()=>{
    return(
        <div> 
        <h1>Admin page</h1>

      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Link to="" className="navbar-brand">
                  ADMIN PAGE
                  </Link>


           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Home</Nav.Link>
               
              

                <Link to={"list"}  className="nav-link">Driver list</Link>
                <Link to={"customer-list"}  className="nav-link">Customer list</Link>
            


              </Nav>
              <Nav>
              <Link to={"driver-register"} className="nav-link">Driver-Register</Link>
                <Link to={"customer-register"} className="nav-link" >Customer-Register</Link>
                <Link to={"login"} className="nav-link">Login</Link>
              
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
    )
}
export default DriverPage;