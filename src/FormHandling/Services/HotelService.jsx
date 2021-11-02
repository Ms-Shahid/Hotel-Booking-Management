import axios from "axios";

class HotelService
{
   
    updateHotel(hotel,hotel_id)
    {
        return axios.put( `http://localhost:8080/hotel/${hotel_id}`,hotel)
    }
}

export default new HotelService()
