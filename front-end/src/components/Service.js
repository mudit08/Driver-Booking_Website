import React from 'react';
import '../style/service.css';
import {Jumbotron,Button,CardDeck,Card} from 'react-bootstrap';
const Service=()=>{

    return (
      <div> 
     <br/>
      <br/>
      
      <CardDeck>
  <Card>
  <Card.Img variant="top" src="https://newscollection.net/wp-content/uploads/2018/01/13UBERHACK-2-superJumbo.jpg"  />
    <Card.Body>
      <Card.Title>Catch a drive quick</Card.Title>
      <Card.Text>
      Just key in your location and assess the kind of trip you’d like to take.
               We show the fare estimate and allocate a driver from our wide network of well–trained drivers spread
                across cities at every kilometre. Like a flash, our drivers will appear in a matter of minutes 
                to get to your destination safely.

      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
  <Card.Img variant="top" src="http://www.prayagcab.in/img/outstation-1.jpg"  />
    <Card.Body>
      <Card.Title>Outstation Drivers</Card.Title>
      <Card.Text>
      Why wait for a long weekend for a relaxing trip to your favourite getaway?
               Let the pressure of driving long distances, safety and taking care of the route be on our gentle chauffeur. 
               Let your retreat start while you’re on the road instead of when you reach your destination.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
  <Card.Img variant="top" src="https://images.theconversation.com/files/228131/original/file-20180718-44091-1mh2uxg.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"/>
    <Card.Body>
      <Card.Title>Let us DriveUr kids to school</Card.Title>
      <Card.Text>
      Reaching the school safely on time and getting back home secure, is what we want all as parents want. 
      With Us, it is now hassle free. No need to stuff your little one in a packed van with an untrustworthy
       driver; instead let them commute in your own car with or without you along with a trustworthy, trackable driver!
      </Card.Text>
    </Card.Body>

  </Card>

  
</CardDeck>


      </div>
    );
};

export default Service;