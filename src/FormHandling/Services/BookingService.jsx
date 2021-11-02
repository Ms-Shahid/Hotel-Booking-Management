import axios from "axios";

class BookingService
{
   
    updateBookingDetails(booking,booking_id)
    {
        return axios.put( `http://localhost:8080/bookingdetails/${booking_id}`,booking)
    }
}

export default new BookingService()
