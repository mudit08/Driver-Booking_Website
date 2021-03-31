import React, { Component } from 'react';
import driverService from '../services/driverService';
import DriverService from '../services/driverService';
export default class ViewCourses extends Component {
    constructor(props){
        super(props)
        this.state={
            drivers:[]
        }
        this.editDriver=this.editDriver.bind(this);
        this.deleteDriver=this.deleteDriver.bind(this);
    }
    //methods 
    //whenever the user hit update button user will nagivate to update page by this method
   deleteDriver(drivId){
        //rest api call 
        driverService.deleteDriver(drivId).then(res=>{
                this.setState({drivers:this.state.drivers.filter(driver=>driver.drivId !==drivId)});
        });

   }


    editDriver(drivId){
        this.props.history.push(`/driver-update/${drivId}`);

    }

    componentDidMount(){
        DriverService.getDrivers().then((res)=>{
            this.setState({drivers:res.data});
        });

    }
    render() {
        return (
            <div>
               <h1 className="text-center">Driver list</h1>
               <div className="row">
                   <table className="table table-striped table-bordered">
                       <thead>
                           <tr>

                               <th>First name</th>
                               <th>Last name </th>
                               <th>Email</th>
                               <th>Address</th>
                               <th>Pincode</th>
                               <th>Phone Number</th> 
                               <th>Licence Number</th>
                               <th>Adhar Number</th>
                               <th>Expert in Car type</th>
                               
                               
                               <th>Action</th>


                           </tr>
                       </thead>
                            <tbody>
                                {
                                    this.state.drivers.map(
                                        driver =>
                                        <tr key={driver.drivId}>
                                             <td>{driver.dFirstName}</td>
                                            <td>{driver.dLastName}</td>

                                            <td>{driver.email}</td>
                                            <td>{driver.address}</td>
                                            <td>{driver.pincode}</td>
                                            <td>{driver.phoneNo}</td>
                                            <td>{driver.licenceNo}</td>
                                            <td>{driver.adharNo}</td>
                                            <td>{driver.expInCarType}</td>
                                         
                                            
                                            <td>
                                                <button onClick={()=>this.editDriver(driver.drivId)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft:"10px"}} onClick={()=>this.deleteDriver(driver.drivId)} className="btn btn-danger">Delete</button>
                                            </td>


                                        </tr>
                                    )
                                }
                            </tbody>



                   </table>
               </div>
               
            </div>
        )
    }
}
