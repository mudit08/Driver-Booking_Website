import React from 'react';
import { Container, Row, Col,Jumbotron ,Button,ButtonGroup,CardDeck,Card} from 'react-bootstrap';
import {BrowserRouter as Router ,Switch,Route}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import CustomerList from './CustomerList';
import UpdateCustomer from './UpdateCustomer';
import DriverList from './DriverList';
import UpdateDriver from './UpdateDriver';
import Driverreg from './Driverreg';
import '../style/adminpage.css';
const Adminpage=()=>{
    return (


        <div> 
            

          
            <Jumbotron className="bg-dark text-white" id="admin"  >
            <h1>Admin Page </h1>
            <blockquote className="blockquote mb-0">
                <p>
                </p>
                <footer className="blockquote-footer">admin  </footer>
            </blockquote>
          </Jumbotron>
              <Container>
              <ButtonGroup size="lg" className="mb-2">
            
                    

              <CardDeck>
  <Card id="c1">
  <Card.Img variant="top"  />
    <Card.Body>
      <Card.Title>Check List of Customers</Card.Title>
      <Card.Text>
        Management of customers .
        Here we can delete and update the customer accordingly.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button ><Link to={"customer-list"}  className="button"><Button>Show Customer list</Button></Link></Button>
    </Card.Footer>
  </Card>
  <Card id="c2">
  <Card.Img variant="top"  />
    <Card.Body>
      <Card.Title>Driver Registration</Card.Title>
      <Card.Text>
      Admin will  register Driver here . 
    
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button><Link to={"driver-register"} ><Button>Driver registration</Button></Link></Button>
    </Card.Footer>
  </Card>
  <Card id="c3">
  <Card.Img variant="top" src="/100px160" />
    <Card.Body>
      <Card.Title>Check List of Drivers</Card.Title>
      <Card.Text>
       Management of the Drivers. Drivers Can be updated and removed accordingly .
       </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button>   <Link to={"list"} ><Button>Show Driver list</Button></Link> </Button>
    </Card.Footer>
  </Card>
</CardDeck>
          
              </ButtonGroup>
                <Row>
          <Col lg={12}  >
        
                </Col>
                </Row>
               
                  



                </Container>
  
            <br/>
        </div>
    )
}

export default Adminpage;