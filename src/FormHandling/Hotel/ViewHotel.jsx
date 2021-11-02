import React, {useEffect,useState} from "react";
import axios from "axios";

export function ViewHotel() {

    const [hotel_id,setHotelId] = useState('')
    const [hotelIdFromBtn,setHotelIdFromBtn] = useState('')
    const [hotel,setHotel]= useState({})
    const [error,setError]=useState(false)

    useEffect(()=>
    {
        axios.get(`http://localhost:8080/hotel/${hotel_id}`)
        .then(response=>
            {
                console.log(response.data)
                console.log(response.status)
                setHotel(response.data)
                setError(false)
            })
            .catch(error=>
                {
                    console.log("error.msg")
                    setError(true)
                })
    },[hotelIdFromBtn]
    
    )

   return (
       <div className="container" class="view-bg">
           <h3>Search For Hotel</h3>
           <hr/>
           <div className="form-group">
            
            <input value={hotel_id} onChange={(event)=>setHotelId(event.target.value)} className="form-control"/>
           </div>
           <button onClick={()=>setHotelIdFromBtn(hotel_id)} className="btn btn-primary mt-3">Search</button>
           <hr/>
           {
               error?

               <h5 className="text-danger">Hotel ID Not Available</h5>
            : 
            <div>
            <h3>Hotel HotelId : {hotel_id}</h3>
           <ul className="list-group">
               <li>Hotel hotel_id : {hotel.hotel_id} </li>
               <li>Hotel city: {hotel.city} </li>
               <li>Hotel hname : {hotel.hname}</li>
               <li>Hotel address : {hotel.address}</li>
               <li>Hotel description : {hotel.description}</li>
               <li>Hotel avg_rate_per_day: {hotel.avg_rate_per_day}</li>
               <li>Hotel email : {hotel.email}</li>
               <li>Hotel phone1 : {hotel.phone1}</li>
               <li>Hotel phone2 : {hotel.phone2}</li>
               <li>Hotel website: {hotel.website}</li>
               
           </ul>
           </div>
           
           }
       </div>
   )
}
export default ViewHotel