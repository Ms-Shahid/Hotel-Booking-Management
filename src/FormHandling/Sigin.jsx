import React, { Component } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
export class Sigin extends Component{
    constructor(props){
        super(props)

        this.state={
            name:'',
            password:'',
            successMsg : '',
            failedMsg : '',
            loggedIn : false 
        }
    }

    handlename=(event)=>{
        this.setState({
            name:event.target.value
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
        axios.post('http://localhost:8080/admin/sigin',this.state)
        .then((response)=>{
            console.log(response.data.msg)
            if(response.data.msg != "Invalid Name and Password")
            {
            this.setState({
                name:'',
                password: '',
                successMsg:response.data.msg,
                loggedIn : true
            })
        }
        else{
            this.setState({
                name:'',
                password: '',
                failedMsg:response.data.msg,
                loggedIn : false
            })
        }
        }).catch(error=>{
            console.log(error)
            this.setState({
                name:'',
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
                <h3 className="text-center Dark-link"><b>Admin</b></h3>
                    <form onSubmit={this.handleFormSubmission} class="align-items-center">
                        
                        <div class="row justify-content-center align-items-center h-100"> 
                            <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">                 
                                <div className="form-group">
                                    <div class="row">
                                        <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-danger ">Name</label>
                                        <input onChange={this.handlename} value={this.state.name} className="form-control" id="validationServer01" required/>
                                        
                                        <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-danger">Password</label>
                                        <input  onChange={this.handlePassword} value={this.state.password} className="form-control" type="password" id="validationServer01" required/>
                                    </div>
                                </div>
                                <br />
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button type="submit" className="btn btn-success mt-2">Login</button>
                                </div>
                            </div>
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