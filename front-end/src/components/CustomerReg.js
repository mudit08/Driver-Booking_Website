import React, { Component } from 'react';
import CustomerService from '../services/customerService';
import '../style/customerRegistration.css';


export default class Customerregi extends Component {
    constructor(props){
        super(props)
        this.state={
            //this the place holder property

            firstName:'',
            lastName:'',
            email:'',
            password:'',
            phoneNo:'',
            address:'',
            city:'',
            pincode:'',
            cartype:'',
        }
        // we are binding our handler method with constructor
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePhoneNoHandler=this.changePhoneNoHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changePincodeHandler=this.changePincodeHandler.bind(this);
        this.changeCarTypeHandler=this.changeCarTypeHandler.bind(this);
        
        
        this.saveCustomer=this.saveCustomer.bind(this);

    }

    //this our handler method 
    saveCustomer=(e)=>{
            e.preventDefault();
            let customer={
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                password:this.state.password,
                phoneNo:this.state.phoneNo,
                address:this.state.address,
                city:this.state.city,
                pincode:this.state.pincode,
                cartype:this.state.cartype
            
            
            };

            console.log('customer =>'+JSON.stringify(customer));

            //calling service method
            CustomerService.registerCustomer(customer).then(res=>{
                    this.props.history.push('/');

                    

            });

    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName:event.target.value});

    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName:event.target.value});

    }
    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value});

    }
    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }

    changePhoneNoHandler=(event)=>{
        this.setState({phoneNo:event.target.value});
    }
    changeAddressHandler=(event)=>{
        this.setState({address:event.target.value});
    }
    changeCityHandler=(event)=>{
        this.setState({city:event.target.value});
    }
    changePincodeHandler=(event)=>{
        this.setState({pincode:event.target.value});

    }
    changeCarTypeHandler=(event)=>{
        this.setState({cartype:event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div >
                <div className="container" >
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">CUSTOMER REGISTRATION </h3>
                            <div className="card-body" id="regi">
                                <form>
                                    
                                    <div className="form-group">
                                        <label>First Name : </label>
                                        <input placeholder="First Name "name="firstname" className="form-control" 
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>last Name : </label>
                                        <input placeholder="Last Name "name="lastname" className="form-control" 
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email Id: </label>
                                        <input placeholder="email "name="email" className="form-control" 
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input placeholder="Enter you password "name="password" className="form-control"  type="password"
                                        value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number: </label>
                                        <input placeholder="Enter you Phone number "name="phoneno" className="form-control"  type="text"
                                        value={this.state.phoneNo} onChange={this.changePhoneNoHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder="Address "name="address" className="form-control" 
                                        value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Select City (PUNE/INDORE/BHOPAL): </label>
                                        <input placeholder="Enter your City name "name="city" className="form-control" 
                                        value={this.state.city} onChange={this.changeCityHandler}/>
                                    </div>
                                      <div className="form-group">
                                        <label>Pincode : </label>
                                        <input placeholder="pincode "name="pincode" className="form-control" 
                                        value={this.state.pincode} onChange={this.changePincodeHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Car Type (SEDAN/XUV/HATCHBACK): </label>
                                        <input placeholder="Address "name="address" className="form-control" 
                                        value={this.state.cartype} onChange={this.changeCarTypeHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveCustomer}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px" }}>Cancle</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}