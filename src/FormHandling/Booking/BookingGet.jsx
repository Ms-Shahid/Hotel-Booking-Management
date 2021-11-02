import axios from "axios";
import React from "react";
import { BookingSave } from "./BookingSave";

export class BookingGet extends React.Component {

    constructor(props){
        super(props)

        this.state={
            bookings:[]
        }
    }
    //show all booking details
   componentDidMount(){
       axios.get('http://localhost:8080/bookingdetails/showAllBookings')
       .then(response =>{
           this.setState({
               bookings:response.data
           })
           console.log(response.data)
       })
   }

   //delete bookingDetails
   handleDelete(booking){
       fetch(`http://localhost:8080/bookingdetails/${booking}`,{
           method:'DELETE'
       }).then((response) =>{
           console.log(response)
           alert('Booking details deleted successfully')
           this.componentDidMount();
       })
    }
   
    render(){
        return(
            <div class="list-bg">
            <div className="container mt-3">
                <h1 className="text-primary text-center">Booking List</h1>
                <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <td>Booking Id</td>
                            <td>Hotel Id</td>
                            <td>Room Id</td>
                            <td>User Id</td>
                            <td>Booked From</td>
                            <td>Booked Till</td>
                            <td>No of Adults</td>
                            <td>No of Childrens</td>
                            <td>Amount</td>
                           
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.bookings.map(
                                booking =>
                                    <tr key={booking.booking_id}>
                                        <td>{booking.booking_id}</td>
                                        <td>{booking.hotel_id}</td>
                                        <td>{booking.room_id}</td>
                                        <td>{booking.user_id}</td>
                                        <td>{booking.booked_from}</td>
                                        <td>{booking.booked_to}</td>
                                        <td>{booking.no_of_adults}</td>
                                        <td>{booking.no_of_children}</td>
                                        <td>{booking.amount}</td>
                                        {/* <td><button type="button" class="btn btn-danger" onClick={() => this.handleDelete(booking.booking_id)}>Delete</button></td> */}
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>
        );
    }     
}
