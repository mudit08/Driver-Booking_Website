import React, { Component } from 'react'
import DriverService from '../services/driverService'
import {Link} from 'react-router-dom';
export class DriverListComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            alldriver: []
        }

    }
    componentDidMount(){
        this.getAllDriver();
    }
    getAllDriver(){
        //make service call get data fill data -> set data to satate(alldriver)
        DriverService.getDrivers().then((response)=>{
            this.setState({alldriver:response.data});
        });
    }

    render() {
        return (
            <div>
            <h2>List Of All Drivers</h2> 
            <table className="table table-hover">
                <thead>
                     <tr>
                     <th>ID</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Email</th>
                     <th>Licence Number</th> 
                     <th>Adhar Number</th>
                     <th>Expert In Car</th>
                     <th>Select Your Driver</th>
                     </tr>
                     
                 </thead>
                 <tbody>
                     {this.state.alldriver.map((driver)=>(
                         <tr>
                                 <td>{driver.drivId}</td>
                                 <td>{driver.dFirstName}</td>
                                 <td>{driver.dLastName}</td>
                                 <td>{driver.email}</td>
                                 <td>{driver.licenceNo}</td>
                                 <td>{driver.adharNo}</td>
                                 <td>{driver.expInCarType}</td>
                                 
                                 <Link to={"DriverBookedPage"} className="button"> <td> BookNow</td></Link>
                                 
                         </tr> 
                     ))
                     }

                  </tbody>
                                 
            </table>
          </div>
        )
    }
}

export default DriverListComponent
