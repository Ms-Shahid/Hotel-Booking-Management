import React,{Component} from "react";
import UserService from "../Services/UserService";


export default class UserUpdate extends Component
{
    constructor(props){
        super(props)
        this.state =
        {
            user_id : '',
            user_name : '',
            email : '',
            password : '',
            role : '',
            mobile : '',
            address : '',
            msg  : ''
        }
    }

    handleuserId=(event)=>
    {
        this.setState(
            {
                user_id:event.target.value
            }
        )
    }

    handleUserName=(event)=>
    {
        this.setState(
            {
                user_name:event.target.value
            }
        )
    }

    handleEmail=(event)=>
    {
        this.setState(
            {
                email:event.target.value
            }
        )
    }

    handlePassword=(event)=>
    {
        this.setState(
            {
                password:event.target.value
            }
        )
    }

    handleRole=(event)=>
    {
        this.setState(
            {
                role:event.target.value
            }
        )
    }

    handleMobile=(event)=>
    {
        this.setState(
            {
                mobile:event.target.value
            }
        )
    }

    handleAddress=(event)=>
    {
        this.setState(
            {
                address:event.target.value
            }
        )
    }

    handleForSubmission=(event)=>
    {
        event.preventDefault()
        this.updateUser(this.state,this.state.user_id)
    }

    updateUser(user,user_id)
    {
        UserService.updateUser(user,user_id).then(response=>
            {
                console.log(response)
            }).catch(error=>console.log(error))
    }

    render()
    {
        return (
            <div  className="container mt-3" class="update-bg">
            <h2 className="text-warning text-center"><i>Update User</i></h2>
            <hr/>
            <form onSubmit={this.handleForSubmission}>
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="form-group">
                <div class="row">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>User Id</b></label>
                    <input onChange={this.handleuserId} value={this.state.user_id} className="form-control" placeholder="Provide User Id" required/>
                
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>User name</b></label>
                    <input onChange={this.handleUserName} value={this.state.user_name} className="form-control" placeholder="Provide User Name" required/>
                
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Email</b></label>
                    <input onChange={this.handleEmail} value={this.state.email} className="form-control" placeholder="Provide Email Id" required/>
                
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Password</b></label>
                    <input onChange={this.handlePassword} value={this.state.password} className="form-control" placeholder="Provide Password" required/>
                
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Role</b></label>
                    <input onChange={this.handleRole} value={this.state.role} className="form-control" placeholder="Enter Role" required/>
               
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Mobile</b></label>
                    <input onChange={this.handleMobile} value={this.state.mobile} className="form-control" placeholder="Provide Mobile" required/>
               
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Address</b></label>
                    <input onChange={this.handleAddress} value={this.state.address} className="form-control" placeholder="Enter Address" required/>
                </div>
                <br />
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary mt-2">Update</button>
                </div>
            </div>
            </div>
            </div>
            </form>
            </div>
        )
    }
}