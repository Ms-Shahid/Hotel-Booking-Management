import { Component} from "react";
import axios from "axios";
import React, {useEffect,useState} from "react";

export class GetUserById extends Component{
    constructor(props){
        super(props)

        this.state = {
            users : [],
            errorMsg : ''
        }
    }


    componentDidMount(){
        axios.get('http://localhost:8080/user/showAllUsers')
        .then(response=>{
            console.log(response)
            this.setState({
                users : response.data,
            })
        }).catch(error=>{
            console.log(error)
            this.setState({
                errorMsg : "User doesn't exist!!"
            })
        })
    }

    deleteUser=(user_id)=>{
        axios.delete('http://localhost:8080/user/delete/'+user_id,this.state)
        .then((response) =>{
            if(response.data!=null){
                alert("User deleted Successfully");
                this.setState({
                    users:this.state.users.filter(user=>user.user_id!==user_id)
    
                    });
                }
            });
        }


    render(){
        
        return (
        <div class="list-bg">
        <div className="container mt-3" >
        <h2 className="text-center text-primary">User List</h2>
        <hr/>

        <table class = "table table-bordered border-primary">
            <thead>
                <tr>
                    <th>user_id</th>
                    <th>user_name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>role</th>
                    <th>mobile</th>
                    <th>address</th>
                    
                </tr>
            </thead>

            <tbody>
                {
                    this.state.users.map(
                        user =>
                        <tr key = {user.user_id}>
                            <td>{user.user_id}</td>
                            <td>{user.user_name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.role}</td>
                            <td>{user.mobile}</td>
                            <td>{user.address}</td>
                            <td><button className="btn btn-warning" onClick={() => this.deleteUser(user.user_id)}>Delete</button></td>
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
