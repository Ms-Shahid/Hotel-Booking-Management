import { Component } from "react";
import axios from 'axios'

export class GetRoomDetails extends Component{
constructor(props){
    super(props)

    this.state={
             room_Details : [],
             errorMsg : ""
    }
}

componentDidMount(){
    axios.get('http://localhost:8080/room_Details/showAllRoomDetails')
    .then(response=>{
        console.log(response)
        this.setState({
            room_Details  : response.data
        })
    }).catch(error=>{
        console.log(console.error)
        this.setState({
            errorMsg : "Error in retreiving data"
        })
    })
}


deleteRoomDetails=(room_id)=>{
    // DeletePizzaService.deletepizza(pizzaid)
    axios.delete('http://localhost:8080/room_Details/'+room_id,this.state)
    .then((response) =>{
        if(response.data!=null){
            alert("RoomDetails deleted Successfully");
            this.setState({
                room_Details:this.state.room_Details.filter(room_Details=>room_Details.room_id!==room_id)

                });
            }
        });
    }
    getRoomDetails(room_id){

    }
     

    render(){
        return (
        <div class="list-bg">
        <div className="container" >
        <h2 className="text-primary text-center">RoomDeatils List</h2>
        <hr/>

        <table className ="table table-bordered border-primary">
            <thead>
                <tr>
                    <th>Room id</th>
                    <th>Hotel id</th>
                    <th>Room No</th>
                    <th>Room type</th>
                    <th>Rate Per day</th>
                   
                   
                </tr>
            </thead>

            <tbody>
                {
                    this.state.room_Details.map(
                        room_Details =>
                        <tr key = {room_Details.room_id}>
                            <td>{room_Details.room_id}</td>
                            <td>{room_Details.hotel_id}</td>
                            <td>{room_Details.room_no}</td>
                            <td>{room_Details.room_type}</td>
                            <td>{room_Details.rate_per_day}</td>
                            <td>{room_Details.isAvailable}</td>
                            <td><button className="btn btn-warning" onClick={() => this.deleteRoomDetails(room_Details.room_id)}>Delete</button></td>
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