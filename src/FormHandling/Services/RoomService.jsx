import axios from "axios";

export class RoomService{

    url="http://localhost:8080/room_Details/showAllRoomDetails"
    
    getRoomDetails(room){
        axios.get(this.url,room)
    }

    UpdateRoomDetails(room_Details,room_id)
    {
        return axios.put( `http://localhost:8080/room_Details/${room_id}`,room_Details)
    }
}

export default new RoomService()

