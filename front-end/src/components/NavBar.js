import React from'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import{Link} from 'react-router-dom';
class NavBar extends React.Component{

        render(){
            return(

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                      <Link to="" className="navbar-brand">
                      Driver booking
                      </Link>


               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                  <Link to=""  className="nav-link">Home</Link>
             
                    <Link to={"service"}  className="nav-link">Service</Link>
                    <Link to={"contact"}  className="nav-link">Contact</Link>
                  
          
                  


                  </Nav>
                  <Nav>
              
                    <Link to={"customer-register"} className="nav-link" >Customer-Register</Link>
                    <Link to={"login"} className="nav-link">Customer Login</Link>
                    <Link to={"adminlogin"} className="nav-link">Admin Login</Link>
                    <Link to={""} className="nav-link">Log out</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            )
        }

}  



export default NavBar;