import React, { Component } from 'react'
import driverService from '../services/driverService';

export default class UpdateDriver extends Component {
    constructor(props){
        super(props)
        this.state={
            //this the place holder property
            drivId:this.props.match.params.drivId,
            dFirstName:'',
            dLastName:'',
            email:'',
            password:'',
            address:'',
            pincode:'',
            phoneNo:'',
            licenceNo:'',
            adharNo:'',
            expInCarType:'',
            status:'',
        }
        // we are binding our handler method with constructor
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePincodeHandler=this.changePincodeHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changePhoneNoHandler=this.changePhoneNoHandler.bind(this);
        this.changeLicenceNoHandler=this.changeLicenceNoHandler.bind(this);
        this.changeAdharNoHandler=this.changeAdharNoHandler.bind(this);
        this.changeExpInCarTypeHandler=this.changeExpInCarTypeHandler.bind(this);
        this.changeStatusHandler=this.changeStatusHandler.bind(this);

        this.updateDriver=this.updateDriver.bind(this);

    }
    componentDidMount(){
        driverService.getDriverById(this.state.drivId).then((res)=>{
            let driver=res.data;
            this.setState({
                dFirstName:driver.dFirstName,
                dLastName:driver.dLastName,
                email:driver.email,
                address:this.state.address,
                pincode:this.state.pincode,
                phoneNo:this.state.phoneNo,
                licenceNo:this.state.licenceNo,
                adharNo:this.state.adharNo,
                expInCarType:this.state.expInCarType,
                status:this.state.status
            });

        });
    }
    //this our handler method 
    updateDriver=(e)=>{
            e.preventDefault();
            let driver={
                dFirstName:this.state.dFirstName,
                dLastName:this.state.dLastName,
                email:this.state.email,
                address:this.state.address,
                pincode:this.state.pincode,
                phoneNo:this.state.phoneNo,
                licenceNo:this.state.licenceNo,
                adharNo:this.state.adharNo,
                expInCarType:this.state.expInCarType,
                status:this.state.status
            };
            console.log('driver =>'+JSON.stringify(driver));
                driverService.updateDriver(driver,this.state.drivId).then(res=>{
                    this.props.history.push('/list');
                });
        

    }

    changeFirstNameHandler=(event)=>{
        this.setState({dFirstName:event.target.value});

    }
    changeLastNameHandler=(event)=>{
        this.setState({ dLastName:event.target.value});

    }
    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value});

    }
    changeAddressHandler=(event)=>{
        this.setState({address:event.target.value});
    }
    changePincodeHandler=(event)=>{
        this.setState({pincode:event.target.value});

    }
    changePhoneNoHandler=(event)=>{
        this.setState({phoneNo:event.target.value});
    }   
    changeLicenceNoHandler=(event)=>{
        this.setState({licenceNo:event.target.value});
    }
    changeAdharNoHandler=(event)=>{
        this.setState({adharNo:event.target.value});
    }
    changeExpInCarTypeHandler=(event)=>{
        this.setState({expInCarType:event.target.value});
    }
    changeStatusHandler=(event)=>{
        this.setState({status:event.target.value});
    }

    cancel(){
        this.props.history.push('/list');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Driver Update </h3>
                            <div className="card-body">
                                <form>
                                    
                                    <div className="form-group">
                                        <label>First Name : </label>
                                        <input placeholder="First Name "name="firstname" className="form-control" 
                                        value={this.state.dFirstName} onChange={this.changeFirstNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>last Name : </label>
                                        <input placeholder="Last Name "name="lastname" className="form-control" 
                                        value={this.state. dLastName} onChange={this.changeLastNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email Id: </label>
                                        <input placeholder="email "name="email" className="form-control" 
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder="Address "name="address" className="form-control" 
                                        value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>

                                      <div className="form-group">
                                        <label>Pincode : </label>
                                        <input placeholder="pincode "name="pincode" className="form-control" 
                                        value={this.state.pincode} onChange={this.changePincodeHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Phone no: </label>
                                        <input placeholder="Phone number "name="phonrNo" className="form-control" 
                                        value={this.state.phoneNo} onChange={this.changePhoneNoHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Licence no: </label>
                                        <input placeholder="Enter your licence no "name="licence" className="form-control" 
                                        value={this.state.licenceNo} onChange={this.changeLicenceNoHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Adhar no: </label>
                                        <input placeholder="Enter your Adhar no "name="adharNo" className="form-control" 
                                        value={this.state.adharNo} onChange={this.changeAdharNoHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> select your Car type: SEDAN/XUV/HATCHBACK</label>
                                        <input placeholder="enter car type your r expert in  "name="exprtincartype" className="form-control" 
                                        value={this.state.expInCarType} onChange={this.changeExpInCarTypeHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Status: </label>
                                        <input placeholder="enter your avaliablity "name="status" className="form-control" 
                                        value={this.state.status} onChange={this.changeStatusHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateDriver}>Update</button>
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
