import React, { Component } from "react";
import axios from "axios";

export class Register extends Component{
constructor(props){
    super(props)
    
    this.state={
         user_name : '',
         email : '',
         password : '',
         role : '',
         mobile : '',
         address : '',
         msg  : '',
         error:''
        
    }
}

nameHandler=(e)=>{
    this.setState({
    user_name:e.target.value,
    })
}

emailHandler=(e)=>{
    this.setState({
        email:e.target.value
})
}
passwordHandler=(e)=>{
    this.setState({
        password:e.target.value
})
}

roleHandler=(e)=>{
    this.setState({
        role:e.target.value
})
}

mobileHandler=(e)=>{
    this.setState({
        mobile:e.target.value
})
}

addressHandler=(e)=>{
    this.setState({
        address:e.target.value
})
}

submitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:8080/user/save',this.state)
    .then(response => {
        console.log(response)
         alert('Registered Sucessfully')
        this.setState({
        user_name : '',
         email : '',
         password : '',
         role : '',
         mobile : '',
         address : '',
         msg  : '',
         error:''
            
        })
    })
    .catch(error=>{
        console.log(error)
        this.setState({
            msg : "Enter Valid Details"
        })
    })
}

    render(){
        const { user_name, email, password, role, mobile, address,msg} = this.state
        return(
            <div class="reg-bg">
                <form onSubmit={this.submitHandler} class="align-items-center">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    
                            <div class="form-group">
                                <div class="row">
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-link" ><b>Name</b></label>
                                    <input type="name" class="form-control" id="inputName" value = {user_name}  onChange={this.nameHandler} placeholder="Provide Name" required/>
                                    
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-link" ><b>Email</b></label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="example@com" value={email} onChange={this.emailHandler} placeholder="Provide Email" required/>
                                
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-link"  ><b>Password</b></label>
                                    <input type="password" class="form-control" id="inputPassword4" value={password} onChange={this.passwordHandler} placeholder="Provide Password" required/>
                            
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-link" ><b>Role</b></label>
                                    <input type="text" class="form-control" id="inputRole" value={role}  onChange={this.roleHandler} placeholder="Provide Role" required/>
                            
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-link" ><b>Mobile</b></label>
                                    <input type="text" class="form-control" id="inputMobile"  value = {mobile}  onChange={this.mobileHandler} placeholder="Provide Number" required/>
                                </div>
                                <div class="row">
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-link" ><b>Address</b></label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value = {address} onChange={this.addressHandler} placeholder="Provide Address" required/>
                                </div>
                                <br/>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button type="submit" class="btn btn-primary" >Register</button>
                                </div>
                            
                            </div> 
                        </div>
                    </div>      
                </form>
                
            </div>
        )
    }
}

