import React, { Component } from 'react'
import '../style/contact.css';


export default class Contact extends Component {
    render() {
        return (
          <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact-Us</h2>
           <hr/>

              </div>
            </div>
            <br/>
            <div className="row text-center" >
              <div className="col-md-4">
               
                <h4 className="contact-heading">Description</h4>
                <p >we are driver providing company to book a safe ride.
                Here you can find driver near your area
                </p>
              </div>
              <div className="col-md-4">
               
                <h4 className="contact-heading"></h4>
                <p ></p>
              </div>
              <div className="col-md-4">
              
                <h4 className="contact-heading">Contact</h4>
                
                <p >Address: hig 28 new fort extesion </p>
                <p>Shop-No: 1234554</p>
                <p >Email:bookurDriver@gmail.com</p>
                <p>Contact-No:9123456789</p>

              </div>
            </div>
          </div>
        </section>
        )
    }
}