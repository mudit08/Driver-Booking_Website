import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router ,Switch,Route}from 'react-router-dom';
import AddCourse from './components/AddCourse';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import DriverList from './components/DriverList';
import Welcome from './components/Welcome';
import Driverregi from './components/Driverreg';
import UpdateDriver from './components/UpdateDriver';
import Login from './components/login';
import CustomerRegi from './components/CustomerReg';
import CustomerList from './components/CustomerList';
import UpdateCustomer from './components/UpdateCustomer';
import Adminpage from './components/Adminpage';
import CustomerPage from './components/CustomerPage';
import DriverPage from './components/DriverPage';
import Service from './components/Service';
import Contact from './components/Contact';
import BookNow from './components/BookNow';
import BookedPage from './components/BookedPage';
import AdminLogin from './components/adminlogin';
function App() {
  const marginTop={
    marginTop:"10px",
    
  };
  return (
    <Router>
         
      <Navbar/>
      <Route path="/" exact component={Welcome}/>
      <Container>
      
        <Row>
          <Col lg={12}  style={marginTop}>
            <Switch>
          
              <Route path="/addcourse" exact component={AddCourse}/>
              <Route path="/driver-register" exact component={Driverregi}/>
              <Route path="/driver-update/:id" exact component={UpdateDriver}/>
              <Route path="/list" exact component={DriverList}/>
              <Route path="/customer-list" exact component={CustomerList}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/adminlogin" exact component={AdminLogin}/>
              <Route path="/customer-register" exact component={CustomerRegi}/>
              <Route path="/customer-update/:id" exact component={UpdateCustomer}/>
            <Route path="/customerPage" exact component={CustomerPage}/>
            <Route path="/driverPage" exact component={DriverPage}/>
            <Route path="/adminPage" exact component={Adminpage}/>
            <Route path="/service" exact component={Service}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/customer/booknow" exact component={BookNow}/>
            <Route path="/customer/DriverBookedPage" exact component={BookedPage}/>
            </Switch>
   
</Col>
      </Row>
      </Container>
      <br/>
      <Footer/>
    </Router>
  );
}

export default App;
