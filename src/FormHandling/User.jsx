import React, { Component } from "react";
import axios from "axios";

export class User extends Component{
constructor(props){
    super(props)
    
    this.state={
         user_name : '',
         email : '',
         password : '',
         role : '',
         mobile : '',
         address : '',
         msg  : ''
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
            <div>
                <form onSubmit={this.submitHandler} class="align-items-center">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    
                            <div class="form-group">
                                <div class="row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg" >Name</label>
                                    <input type="name" class="form-control" id="inputName" value = {user_name}  onChange={this.nameHandler}/>
                                    
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg" >Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="example@com" value={email} onChange={this.emailHandler}/>
                                
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"  >Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" value={password} onChange={this.passwordHandler}/>
                            
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg" >Role</label>
                                    <input type="text" class="form-control" id="inputRole" value={role}  onChange={this.roleHandler}/>
                            
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg" >Mobile</label>
                                    <input type="text" class="form-control" id="inputMobile"  value = {mobile}  onChange={this.mobileHandler}/>
                                </div>
                                <div class="row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg" >Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value = {address} onChange={this.addressHandler}/>
                                </div>
                                <br/>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button type="submit" class="btn btn-primary" >Sign in</button>
                                </div>
                                
                            </div> 
                        </div>
                    </div>      
                </form>
                
            </div>
        )
    }
}

