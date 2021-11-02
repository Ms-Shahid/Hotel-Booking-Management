import React,{useEffect,useState} from "react";
import axios from "axios";

export function ViewRoomDetails() {
    const [room_id,setroom_id]=useState('')
    const [room_idFromBtn,setroom_idFromBtn] = useState('')
    const [room_Details,setRoomDetails]=useState({})
    const [error,setError]=useState(false)

    useEffect(()=>
    {
        axios.get(`http://localhost:8080/room_Details/${room_id}`)
        .then(response=>
            {
        console.log(response.data)
        console.log(response.status)
       setRoomDetails(response.data)
       setError(false)

            })
            .catch(error=>{
                console.log("error.msg")
                setError(true)
            })
    },[room_idFromBtn]
    )
    return(

    <div className="container" class="view-bg">
    <h3 class="Dark-Line text-center">Search For Room Details</h3>
    <hr/>
    <div className="form-group">
   
    <input value={room_id}
    onChange={(Event)=>setroom_id(Event.target.value)}
    className="form-control"/>
    </div>
    <button onClick={()=>setroom_idFromBtn(room_id)}
    className="btn btn-primary mt-3">Search</button>


    <hr/>
    {
        error?
        <h5 className="text-danger">room_id Not Available</h5>
        :
<div>
    <h3>RoomDeatils room_id:{room_id}</h3>
    <ul className="list-group">
        <li>room_id:{room_Details.room_id}</li>
        <li>hotel_id:{room_Details.hotel_id}</li>
        <li>room_no:{room_Details.room_no}</li>
        <li>room_type:{room_Details.room_type}</li>
        <li>rate_per_day:{room_Details.rate_per_day}</li>
        <li>isAvailable:{room_Details.isAvailable}</li>
        
        


    </ul>
</div>
}
    
</div>
)
}
export default ViewRoomDetails