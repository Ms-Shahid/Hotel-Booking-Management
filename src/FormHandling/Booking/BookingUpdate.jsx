import React,{Component} from "react";
import BookingService from "../Services/BookingService";

export default class BookingUpdate extends Component
{
    constructor(props){
        super(props)
        this.state =
        {
            booking_id : '',
            hotel_id : '',
            room_id : '',
            user_id : '',
            booked_from : '',
            booked_to : '',
            no_of_adults : '',
            no_of_children : '',
            amount : ''
        }
    }

    handlebookingId=(event)=>
    {
        this.setState(
            {
                booking_id:event.target.value
            }
        )
    }

    handleHotelId=(event)=>
    {
        this.setState(
            {
                hotel_id:event.target.value
            }
        )
    }

    handleRoomId=(event)=>
    {
        this.setState(
            {
                room_id:event.target.value
            }
        )
    }

    handleUserId=(event)=>
    {
        this.setState(
            {
                user_id:event.target.value
            }
        )
    }

    handleBookedFrom=(event)=>
    {
        this.setState(
            {
                booked_from:event.target.value
            }
        )
    }

    handleBookedTo=(event)=>
    {
        this.setState(
            {
                booked_to:event.target.value
            }
        )
    }

    handleNoOfAdults=(event)=>
    {
        this.setState(
            {
                no_of_adults:event.target.value
            }
        )
    }

    handleNoOfChildren=(event)=>
    {
        this.setState(
            {
                no_of_children:event.target.value
            }
        )
    }

    handleAmount=(event)=>
    {
        this.setState(
            {
                amount:event.target.value
            }
        )
    }

    handleForSubmission=(event)=>
    {
        event.preventDefault()
        this.updateBookingDetails(this.state,this.state.booking_id)
    }

    updateBookingDetails(booking,booking_id)
    {
        BookingService.updateBookingDetails(booking,booking_id).then(response=>
            {
                alert('Updated Successfully')
                console.log(response)
            }).catch(error=>console.log(error))
    }

    render()
    {
        return (
            <div className="container mt-3" class="update-bg">
            <h2 className="text-warning text-center"><i>Booking Details</i></h2>
            <hr/>
            <form onSubmit={this.handleForSubmission}>
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="form-group">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>Booking Id</b></label>
                    <input onChange={this.handlebookingId} value={this.state.booking_id} className="form-control" id="validationServer01" placeholder="Provide booking Id" required/>
                </div>

                <div className="form-group">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>Hotel Id</b></label>
                    <input onChange={this.handleHotelId} value={this.state.hotel_id} className="form-control" id="validationServer01" placeholder="Provide Hotel Id" required/>
                </div>

                <div className="form-group">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>Room Id</b></label>
                    <input onChange={this.handleRoomId} value={this.state.room_id} className="form-control" id="validationServer01" placeholder="Provide Room Id" required/>
                </div>

                <div className="form-group">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>User Id</b></label>
                    <input onChange={this.handleUserId} value={this.state.user_id} className="form-control" id="validationServer01" placeholder="Provide user Id" required/>
                </div>

                <div className="form-group">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>Booked From</b></label>
                    <input onChange={this.handleBookedFrom} value={this.state.booked_from} className="form-control" id="validationServer01"  type="date" required/>
                </div>

                <div className="form-group">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>Booked To</b></label>
                    <input onChange={this.handleBookedTo} value={this.state.booked_to} className="form-control" id="validationServer01" type="date" required/>
                </div>

                <div className="form-group">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-white"><b>Number of Children</b></label>
                    <input onChange={this.handleNoOfAdults} value={this.state.no_of_adults} className="form-control" id="validationServer01" placeholder="Provide Number" required/>
                </div>

                <div className="form-group">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-white"><b>Number of Adults</b></label>
                    <input onChange={this.handleNoOfChildren} value={this.state.no_of_children} className="form-control" id="validationServer01" placeholder="Provide Number" required/>
                </div>

                <div className="form-group">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-white"><b>Amount</b></label>
                    <input onChange={this.handleAmount} value={this.state.amount} className="form-control" id="validationServer01" placeholder="Enter Amount" required/>
                </div>
                <br />
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary mt-2">Update</button>
                </div>
                </div>
                </div>
            </form>
            </div>
        )
    }
}