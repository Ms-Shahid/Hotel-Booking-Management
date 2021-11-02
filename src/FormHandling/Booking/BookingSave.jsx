import React from "react";

import axios from 'axios';


export class BookingSave extends React.Component{

    constructor(props){
        super(props)

        this.state={
            hotel_id:'',
            room_id:'',
            user_id:'',
            booked_from:'',
            booked_to:'',
            no_of_adults:'',
            no_of_children:'',
            amount:'',
            isBookedIn:false
        }
    }
    
    handleHotelId=(event)=>{
        this.setState({
            hotel_id:event.target.value
           
        })
    }
    
    handleRoomId=(event) =>{
        this.setState({
            room_id:event.target.value
        })
    }

    handleUserId=(event) =>{
        this.setState({
            user_id:event.target.value
        })
    }

    handleBookingFrom=(event) =>{
        this.setState({
            booked_from:event.target.value
        })
    }

    handleBookingTo=(event)=>{
        this.setState({
            booked_to:event.target.value
        })
    }

    handleAdults=(event) =>{
        this.setState({
            no_of_adults:event.target.value
        })
    }

    handleChildren=(event) =>{
        this.setState({
            no_of_children:event.target.value
        })
    }

    handleAmount=(event) =>{
        this.setState({
            amount:event.target.value
        })
    }

    handleSubmit=(event) =>{
        event.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080/bookingdetails/bookingdetails/save',this.state)
        .then((response) =>{
            console.log(response)
            alert("Booking added successfully");
            this.setState({
                hotel_id:'',
                room_id:'',
                user_id:'',
                booked_from:'',
                booked_to:'',
                no_of_adults:'',
                no_of_children:'',
                amount:'',
                isBookedIn:true
            })
        })
        .catch(error =>{
            console.log(error)
            this.setState({
                hotel_id:'',
                room_id:'',
                user_id:'',
                booked_from:'',
                booked_to:'',
                no_of_adults:'',
                no_of_children:'',
                amount:''
               
            })
        })
    }

 
    
   render(){
    return(
        <div class="post-bg">
           <form onSubmit={this.handleSubmit}>
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                
                        <div class="form-group">
                            <div class="row">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Hotel Id</b></label>
                                <input onChange={this.handleHotelId} value={this.state.hotel_id} type="number" class="form-control" id="validationServer01" placeholder="Provide Hotel Id" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Room Id</b></label>
                                <input onChange={this.handleRoomId} value={this.state.room_id} type="number" class="form-control" id="inputEmail4" placeholder="Provide Room Id" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>User Id</b></label>
                                <input onChange={this.handleUserId} value={this.state.user_id} type="number" class="form-control" id="inputuserId" placeholder="Provide User Id" required />
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-light"><b>Booked From</b></label>
                                <input onChange={this.handleBookingFrom} value={this.state.booked_from} type="date" class="form-control" id="bookingdate" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-light"><b>Booked Till</b></label>
                                <input onChange={this.handleBookingTo} value={this.state.booked_to} type="date" class="form-control" id="inputdate" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-light"><b>No of Adults</b></label>
                                <input onChange={this.handleAdults} value={this.state.no_of_adults} type="number" class="form-control" placeholder="Provide Number" id="inputAdults" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>No of Children</b></label>
                                <input onChange={this.handleChildren} value={this.state.no_of_children} type="number" class="form-control" placeholder="Provide Number" id="inputChildren" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Booking Amount</b></label>
                                <input onChange={this.handleAmount} value={this.state.amount} type="number" class="form-control" id="inputAmount" placeholder="Enter Amount" required/>
                            </div>
                            <br/>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button  type="submit" class="btn btn-primary" >Submit</button>
                               
                            </div>
                        </div> 
                    </div>
                </div>      
            </form>
        </div>
    );
   }
}

