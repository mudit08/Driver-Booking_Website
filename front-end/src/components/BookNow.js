import React from 'react';
import '../style/booknow.css'
import {Jumbotron} from 'react-bootstrap'
import DriverByPincode from './BookDriverByPincode';
import DriverListComponent from './driverListCompnent';
const BookNow =()=>{
    return(
        <div id="booknow"> 


           
            
            <Jumbotron className="bg-dark text-white" id="book"  >
            <h1>Booking Page </h1>
            <blockquote className="blockquote mb-0">
                <p>
                </p>
                <footer className="blockquote-footer">Let's book our Driver </footer>
            </blockquote>
          </Jumbotron>
            <hr/>
            {/* <DriverListComponent/> */}
            <DriverByPincode/>

        </div>
    )
}
export default BookNow;