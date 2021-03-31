import React, { Component } from 'react';
import DriverService from '../services/driverService';
import {Button,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class DriverByPincode extends Component {
    constructor(props){
        super(props);
        this.state ={
            searchData:[],
            pincode:'',
            };
            this.bookedpage=this.bookedpage.bind(this);
    }

    bookedpage=()=>{
        this.props.history.push('/DriverBookedPage');
    }
  getDriverByPincode=()=>{
    //  console.log(this.state.pincode);
    const {pincode}= this.state;
    DriverService.getDriverByPincode(pincode).then((response)=>{
        this.setState({searchData:response.data});
    });

  }
  handlePincode=(e)=>{
      this.setState({pincode:e.currentTarget.value})

  }
  handleSubmit=(e)=>{
    e.preventDefault();
  }
    render() {
        return (
            <Container>
            <div>
             <form className="card form-data" onSubmit={this.handleSubmit}>
                 <h3>Enter Pincode to search Driver</h3>
                <input type="text" className="card-view" placeholder="enter your pincode here.."  onChange={this.handlePincode} />
                <input  type="submit" name="Search" value="Search" className="btn btn-primary" onClick={this.getDriverByPincode} />
             </form>
             <div>
             <h2>Driver near your area</h2> 
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
                      <th>Select your Driver</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.searchData.map((item)=>(
                          <tr>
                                  <td>{item.drivId}</td>
                                  <td>{item.dFirstName}</td>
                                  <td>{item.dLastName}</td>
                                  <td>{item.email}</td>
                                  <td>{item.licenceNo}</td>
                                  <td>{item.adharNo}</td>
                                  <td>{item.expInCarType}</td>
                                  <td> <Button><Link to={"DriverBookedPage"} ><Button>Book driver</Button></Link></Button></td>
                          </tr> 
                      ))
                      }
 
                   </tbody>
                                  
             </table>
             </div>
                
            </div>
            </Container>
        )
    }
}

export default DriverByPincode;
