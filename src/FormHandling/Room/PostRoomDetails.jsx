import React, {Component } from "react";
import axios from "axios";

export class PostRoomDetails extends Component{
constructor(props){
    super(props)
    
    this.state={
         room_id : '',
         hotel_id : '',
         room_no : '',
         room_type : '',
         rate_per_day : '',
         isAvailable : '',
         
    }
}

room_idHandler=(e)=>{
    this.setState({
    room_id:e.target.value
    })
}

hotel_idHandler=(e)=>{
    this.setState({
        hotel_id:e.target.value
})
}
room_noHandler=(e)=>{
    this.setState({
        room_no:e.target.value
})
}

room_typeHandler=(e)=>{
    this.setState({
        room_type:e.target.value
})
}
rate_per_dayHandler=(e)=>{
    this.setState({
        rate_per_day:e.target.value
})
}

isAvailableHandler=(e)=>{
    this.setState({
        isAvailable:e.target.value
})
}

submitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:8080/room_Details/room_Details/add',this.state)
    .then(response => {
        console.log(response)
        alert('Room added sucessfully')
        this.state({
            room_id : '',
            hotel_id : '',
            room_no : '',
            room_type : '',
            rate_per_day : '',
            isAvailable : ''
        })
    })
    .catch(error=>{
        console.log(error)
        this.setState({
            msg : "Enter Valid Details"
        })
        
    })
}
render()
{
    const { room_id, hotel_id, room_no, room_type, rate_per_day, isAvailable} = this.state
    return(

        <div class="post-bg">
           <form onSubmit={this.submitHandler} class="align-items-center">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                
                        <div class="form-group">
                            <div class="row">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>Room Id</b></label>
                                <input type="number" class="form-control" id="inputRoomId" value = {room_id}  onChange={this.room_idHandler} required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-LIne"><b>Hotel Id</b></label>
                                <input type="number" class="form-control" id="inputHotelId" value = {hotel_id}  onChange={this.hotel_idHandler} required/>
                            
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>Room Number</b></label>
                                <input type="text" class="form-control" id="inputRoom_number"  value = {room_no}  onChange={this.room_noHandler} required/>
                        
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-white"><b>Room Type</b></label>
                                <input type="text" class="form-control" id="inputRoom_type" value = {room_type}  onChange={this.room_typeHandler} required/>
                        
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>Rate Per day</b></label>
                                <input type="number" class="form-control" id="inputRate_per_day" value = {rate_per_day}  onChange={this.rate_per_dayHandler} required/>
                            </div>
                            <div class="row">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"><b>IsAvailable</b></label>
                                <input type="text" class="form-control" id="inputisavailable"value = {isAvailable}  onChange={this.isAvailableHandler} required/>
                            </div>
                            <br/>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button type="submit" class="btn btn-primary" >Submit</button>
                            </div>
                        </div> 
                    </div>
                </div>      
            </form>
        
        </div>
    )
}

}