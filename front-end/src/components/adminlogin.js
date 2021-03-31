import React ,{Component}from 'react';
import AdminService from '../services/adminService';

class adminlogin extends Component{
    constructor(){
        super();
        this.state={
            adminId:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            message:''

        }
        this.authenticateAdmin=this.authenticateAdmin.bind(this);
}
onChange =(e)=>
            this.setState({[e.target.name]:e.target.value});
    authenticateAdmin=(e)=>{
        e.preventDefault();
        let loginRequest = {email:this.state.email,password:this.state.password};
        AdminService.authenticateAdmin(loginRequest)
        .then(res =>{
            let admin=res.data.result;
            console.log(admin);
            admin == null && this.setState({message : 'invalid Admin'});
            admin !==null && this.setState({
                adminId:admin.adminId,
                firstName:admin.firstName,
                lastName:admin.lastName,
                email:admin.email,
                message:''
               
                

            })
            admin != null && alert('Admin logged in sucessfully '+ admin.firstName)  ;
            this.props.history.push('/adminPage');
        })
    }
    render() {
        return (
            <div>
               

                <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" >
                            <h3 className="text-center">Admin login </h3>
                          
                                <form>
                                    
                                    <div className="form-group">
                                        <label>Email : </label>
                                        <input placeholder="Enter your Email "name="email" className="form-control"
                                         value={this.state.email} onChange={this.onChange}
                                         />
                                      
                                    </div>

                                    <div className="form-group">
                                        <label>Password : </label>
                                        <input placeholder="Enter your password" type="password" name="password" className="form-control"
                                         value={this.state.password} onChange={this.onChange} />
                                       
                                    </div>

                                   
                                    <button className="btn btn-success" onClick={this.authenticateAdmin} >Log in </button>
                                   
                                </form>
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default adminlogin;
