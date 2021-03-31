import React, { Component } from 'react'
import {Jumbotron,Button,CardDeck,Card} from 'react-bootstrap';
import '../style/jumbo.css';
import img1 from '../img/bg1.jpg';
export default class Welcome extends Component {
    render() {
        return (
            <div> 
            <Jumbotron className="bg-dark text-white"  id="jumbo">
            <h1>Welcome to Driver Booking</h1>
            <blockquote className="blockquote mb-0">
                <p>Hire best car drivers near you, professional and trained to follow mandatory safety guidelines.
                </p>
                <footer className="blockquote-footer">Keeping you safe with Safety.!!! </footer>
            </blockquote>
          </Jumbotron>



          <CardDeck>
  <Card>
  <Card.Img variant="top" src="https://www.digitalcreed.in/wp-content/uploads/2016/04/driver.jpg"  />
    <Card.Body>
      <Card.Title>Office drivers</Card.Title>
      <Card.Text>
      Driving to and from the office daily can be a hassle considering the city traffic and the long wait.
       Let us Drive You while you rest at the back, take a quick nap,
       have a little bite, hum to some nice music or slip out a magazine to your destination!

      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
  <Card.Img variant="top" src="https://valientemott.com/wp-content/uploads/2020/03/Driving-a-car-at-night-scaled.jpg"  />
    <Card.Body>
      <Card.Title>Driver for Night</Card.Title>
      <Card.Text>
      Night drives are risky and can lead to accidents if you’re not used to them.
      Our driver network is trained to handle night drives as seamlessly as the day! 
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
  <Card.Img variant="top" src="https://www.amdocs.com/sites/default/files/2018-09/smartcity-india.jpg"/>
    <Card.Body>
      <Card.Title>Explore the city</Card.Title>
      <Card.Text>
      Moved to a new city or have grown in this one? Cities are constantly transforming with newer 
      spots to explore and they stay quite unexplored as we seldom get the time or the thought of 
      leaving our homes or work! Take this chance to look around the city and explore,
       while we drive you to the best spots around!
      </Card.Text>
    </Card.Body>

  </Card>
</CardDeck>
          <br/>
          </div>
        )
    }
}

