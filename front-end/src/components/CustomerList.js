import React, { Component } from 'react';
import CustomerService from '../services/customerService';

export default class CustomerList extends Component {
    constructor(props){
        super(props)
        this.state={
            customers:[]
        }
        this.editCustomer=this.editCustomer.bind(this);
        this.deleteCustomerr=this.deleteCustomer.bind(this);
    }
    //methods 
    //whenever the user hit update button user will nagivate to update page by this method
   deleteCustomer(custId){
        //rest api call 
        CustomerService.deleteCustomer(custId).then(res=>{
                this.setState({customers:this.state.customers.filter(customer=>customer.custId !==custId)});
        });

   }


    editCustomer(custId){
        this.props.history.push(`/customer-update/${custId}`);

    }

    componentDidMount(){
        CustomerService.getCustomer().then((res)=>{
            this.setState({customers:res.data});
        });

    }
    render() {
        return (
            <div>
               <h1 className="text-center">Customer list</h1>
               <div className="row">
                   <table className="table table-striped table-bordered">
                       <thead>
                           <tr>

                               <th>First name</th>
                               <th>Last name </th>
                               <th>Email</th>
                               <th>Phone No</th>
                               <th>Address</th>
                               <th>City</th>
                               <th>Pincode</th>
                               <th>Car-Type</th>
                               <th>Action</th>


                           </tr>
                       </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer =>
                                        <tr key={customer.custId}>
                                             <td>{customer.firstName}</td>
                                            <td>{customer.lastName}</td>

                                            <td>{customer.email}</td>
                                            <td>{customer.phoneNo}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.city}</td>
                                            <td>{customer.pincode}</td>
                                            <td>{customer.cartype}</td>
                                            <td>
                                                <button onClick={()=>this.editCustomer(customer.custId)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft:"10px"}} onClick={()=>this.deleteCustomer(customer.custId)} className="btn btn-danger">Delete</button>
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
