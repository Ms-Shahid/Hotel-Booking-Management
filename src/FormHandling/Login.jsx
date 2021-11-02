import React, { Component } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            user_name:'',
            password:'',
            successMsg : '',
            failedMsg : '',
            loggedIn : false 
        }
    }

    handleUser_name=(event)=>{
        this.setState({
            user_name:event.target.value
        })
    }
    handlePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    handleLogout=()=>{
        this.setState({
            loggedIn : false
        })
    }

    handleFormSubmission=(event)=>{
         event.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/user/login',this.state)
        .then((response)=>{
            console.log(response.data.msg)
            if(response.data.msg != "Invalid Username and Password")
            {
            this.setState({
                user_name:'',
                password: '',
                successMsg:response.data.msg,
                loggedIn : true
            })
        }
        else{
            this.setState({
                user_name:'',
                password: '',
                failedMsg:response.data.msg,
                loggedIn : false
            })
        }
        }).catch(error=>{
            console.log(error)
            this.setState({
                user_name:'',
                password: '',
                msg:''})
        })
     }

    render(){
        if(!this.state.loggedIn)
        {
            return(
                <React.Fragment>

                    <div className="container mt-3" class="admin-bg" class="login">
                        <h3 className="text-center Dark-link"><b>Login</b></h3>
                        <form onSubmit={this.handleFormSubmission} class="align-items-center">  
                            <div class="row justify-content-center align-items-center h-100"> 
                                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">                 
                                    <div className="form-group">
                                        <div class="row">
                                            <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-danger ">Username</label>
                                            <input  onChange={this.handleUser_name} value={this.state.user_name} className="form-control" id="validationServer01" required/>
                                        
                                            <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-danger ">Password</label>
                                            <input onChange={this.handlePassword} value={this.state.password} className="form-control" type="password" id="validationServer01" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="d-grid gap-2 col-2 mx-auto">
                                <button type="submit" className="btn btn-success mt-2">Login</button>
                            </div>
                        </form>
                    </div>
                    <h5 className="text-danger container mt-2">{this.state.failedMsg}</h5>
                </React.Fragment>
            )
        }else{
             return(
                 <div className="container">
                     <Link to={"./home"}>Home</Link>
                     <h4 className="text-danger">{this.state.successMsg}</h4>
                     <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                 </div>
             )
        }
    }
}