import React,{Component} from 'react'


export class RoomDetails extends React.Component
{ 
    render()
    {
        return(

            <div>
               <form class="align-items-center">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    
                            <div class="form-group">
                                <div class="row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Room_Id</label>
                                    <input type="text" class="form-control" id="inputRoomId" />
                                    
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Hotel_Id</label>
                                    <input type="text" class="form-control" id="inputHotelId"/>
                                
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Room_number</label>
                                    <input type="text" class="form-control" id="inputRoom_number" />
                            
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Room_type</label>
                                    <input type="text" class="form-control" id="inputRoom_type" />
                            
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Rate_per_day</label>
                                    <input type="text" class="form-control" id="inputRate_per_day" />
                                </div>
                                <div class="row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">IsAvailable</label>
                                    <input type="text" class="form-control" id="inputisavailable"/>
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