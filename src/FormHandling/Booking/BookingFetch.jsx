import React, { useEffect, useState } from "react";
import axios from 'axios';

export function BookingFetch(){

   const [booking_id,setBookingId] = useState('')
   const [bookingIdFromBtn,setBookingIdFromBtn] = useState('')
   const [booking,setBooking] = useState({})
   const [error,setError] = useState(false)

    useEffect(()=>
    {
        axios.get(`http://localhost:8080/bookingdetails/${booking_id}`)
        .then(response=>
            {
                console.log(response.data)
                console.log(response.status)
                alert('Booking details found')
                setBooking(response.data)
                setError(false)
            })
            .catch(error=>
                {
                    console.log("error.msg")
                    setError(true)
                })
    },[setBookingIdFromBtn]
    
    )
        return(
            <div>
                <h3 class="text-primary text-center">Search Booking</h3>
           
           <div className="form-group mt-3" id="search-bar">
                <input value={booking_id} onChange={(event)=>setBookingId(event.target.value)} className="form-control" required/>
                <br />
           </div>
           <div class="d-grid gap-2 col-3 mx-auto">
                <button onClick={()=>setBookingIdFromBtn(booking_id)} class="btn btn-primary" type="button">Search</button>
           </div>
           
           {
               error?

               <h5 className="text-danger text-center">Booking Details Not Found</h5>
            : 
            <div>
                <h3>User UserId : {booking_id}</h3>
                <ul className="list-group">
                    <li>Booking Id: {booking.booking_id} </li>
                    <li>Hotel Id: {booking.hotel_id} </li>
                    <li>Room Id: {booking.room_id}</li>
                    <li>User Id : {booking.user_id}</li>
                    <li>Booked From: {booking.booked_from}</li>
                    <li>Booked To : {booking.booked_to}</li>
                    <li>Adults : {booking.no_of_adults}</li>
                    <li>Children: {booking.no_of_children}</li>
                    <li>Amount : {booking.amount}</li>
                </ul>
           </div>
            };
        </div>
        
        );
    }
export default BookingFetch