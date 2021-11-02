import React,{Component} from "react";
import RoomService from "../Services/RoomService";

export default class RoomUpdate extends Component
{
    constructor(props){
        super(props)
        this.state =
        {
            
                room_id : '',
                hotel_id : '',
                room_no : '',
                room_type : '',
                rate_per_day : '',
                isAvailable : ''
       
           }
       }

  handleroom_id=(event)=>    
  {
      this.setState(
          {
          room_id:event.target.value
          }
      )
  }
  handlehotel_id=(event)=>    
  {
      this.setState(
          {
          hotel_id:event.target.value
          }
      )
  }

  handleroom_no=(event)=>    
  {
      this.setState(
          {
          room_no:event.target.value
          }
      )
  }

  handleroom_type=(event)=>    
  {
      this.setState(
          {
          room_type:event.target.value
          }
      )
  }

  handlerate_per_day=(event)=>    
  {
      this.setState(
          {
          rate_per_day:event.target.value
          }
      )
  }
  handlerisAvailable=(event)=>    
  {
      this.setState(
          {
          isAvailable:event.target.value
          }
      )
  }
  handleForSubmission=(event)=>
  {
      event.preventDefault()
      this.UpdateRoomDetails(this.state,this.state.room_id)
  }
  UpdateRoomDetails(room_Details,room_id)
    {
        RoomService.UpdateRoomDetails(room_Details,room_id).then(response=>
            {
                console.log(response)
            }).catch(error=>console.log(error))
    }
    render()
    {
        return (
            <div className="container mt-3" class="update-bg">
            <h2 className="text-warning text-center"><i>RoomDetails</i></h2>
            <hr/>
            <form onSubmit={this.handleForSubmission}>
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="form-group">
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-center Dark-Link"><b>Room Id</b></label>
                    <input onChange={this.handleroom_id} value={this.state.room_id} className="form-control" placeholder="Provide Room Id" required/>
                
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Link"><b>Hotel Id </b></label>
                    <input onChange={this.handlehotel_id} value={this.state.hotel_id} className="form-control" placeholder="Provide Hotel Id" required/>
               
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Link"><b>Room Number</b></label>
                    <input onChange={this.handleroom_no} value={this.state.room_no} className="form-control" placeholder="Provide Room Number" required/>
               
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Link"><b>Room Type</b></label>
                    <input onChange={this.handleroom_type} value={this.state.room_type} className="form-control" placeholder="Ac" required/>
                
                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Link"><b>Rate per day</b></label>
                    <input onChange={this.handlerate_per_day} value={this.state.rate_per_day} className="form-control" placeholder="Enter amount" required/>

                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Link"><b>Is Avaliable</b></label>
                    <input onChange={this.handlerate_per_day} value={this.state.rate_per_day} className="form-control" placeholder="true or false" required/>
                    
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