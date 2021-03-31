import React from 'react';
import { Container, Row, Col,Jumbotron ,Button,ButtonGroup,Card} from 'react-bootstrap';
import {BrowserRouter as Router ,Switch,Route}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import '../style/customerpage.css';


const Customerpage=()=>{
    return (
        <div> 
            

          
            <Jumbotron className="bg-dark text-black text-right"  id="customer" >
            <h1 className="text-black">Welcome Customer  </h1>
            <blockquote className="blockquote mb-0">
                <p>
                  We provide you with professional drivers for your Car!!
                </p>
                <footer className="blockquote-footer"> Drive with Us </footer>
            </blockquote>
          </Jumbotron>
              <Container>

              <Card id="card">
              <Card.Header>Let us Drive You </Card.Header>
              <Card.Body>
                <Card.Title>Book Your Driver Now!!!</Card.Title>
                <Card.Text>
                 Our Drivers Are waiting For your Booking ..!!!
                </Card.Text>
                <ButtonGroup size="lg" className="mb-2">
              <Button>   <Link to={"customer/booknow"} ><Button>Book Now </Button></Link> </Button>
                      </ButtonGroup>
              </Card.Body>
            </Card>


            
                <Row>
          <Col lg={12}  >
        
                </Col>
                </Row>
               
                  



                </Container>
            
        </div>
    )
}

export default Customerpage;