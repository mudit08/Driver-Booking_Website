import React ,{Component}from 'react';
import '../style/loginpage.css';

import CustomerService from '../services/customerService';


class Login extends Component {
    constructor(){
        super();
        this.state={
            custId:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            phoneNo:'',
            cartype:'',
            message:''

        }
        this.authenticateCustomer=this.authenticateCustomer.bind(this);
    }
    onChange =(e)=>
            this.setState({[e.target.name]:e.target.value});
    authenticateCustomer=(e)=>{
        e.preventDefault();
        let loginRequest = {email:this.state.email,password:this.state.password};
        CustomerService.authenticateCustomer(loginRequest)
        .then(res =>{
            let customer=res.data.result;
            customer == null && this.setState({message : 'invalid Customer'});
            customer !==null && this.setState({
                custId:customer.custId,
                firstName:customer.firstName,
                lastName:customer.lastName,
                email:customer.email,
                phoneNo:customer.phoneNo,
                cartype:customer.cartype,
                message:''

            })
            customer != null && alert('Customre logged in sucessfully '+ customer.firstName)  ;
            this.props.history.push('/customerPage');
        })
    }


    render() {
        return (
            <div>
               

                <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" id="login">
                            <h3 className="text-center">Customer Login</h3>
                          
                                <form>
                                    
                                    <div className="form-group">
                                        <label>Email : </label>
                                        <input placeholder="Enter your Email "name="email" className="form-control"
                                         value={this.state.email}onChange={this.onChange}
                                         />
                                      
                                    </div>

                                    <div className="form-group">
                                        <label>Password : </label>
                                        <input placeholder="Enter your password" type="password" name="password" className="form-control"
                                         value={this.state.password} onChange={this.onChange} />
                                       
                                    </div>

                                   
                                    <button className="btn btn-success" onClick={this.authenticateCustomer} >Log in </button>
                                   
                                </form>
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Login;
