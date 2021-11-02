import React,{Component} from "react";
import HotelService from "../Services/HotelService";

export default class UpdateHotel extends Component
{
    constructor(props){
        super(props)
        this.state =
        {
            hotel_id: '',
            city: '',
            hname: '',
            adrress: '',
            discription: '',
            avg_rate_per_day: '',
            email: '',
            phone1: '',
            phone2: '',
            website: '',
            msg  : ''
        }
    }

    
    

    handleHotelId  = (e) => {
        this.setState({
            hotel_id: e.target.value,
        })
    }

    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    handleHotelName= (e) => {
        this.setState({
            hname: e.target.value
        })
    }

    handleAdrress = (e) => {
        this.setState({
            adrress: e.target.value
        })
    }

    handleDiscription = (e) => {
        this.setState({
            discription: e.target.value
        })
    }

    handleAvg_rate_per_day = (e) => {
        this.setState({
            avg_rate_per_day: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handlePhone1 = (e) => {
        this.setState({
            phone1: e.target.value
        })
    }
    handlePhone2 = (e) => {
        this.setState({
            phone2: e.target.value
        })
    }
    handlewebsite= (e) => {
        this.setState({
            website: e.target.value
        })
    }


    handleForSubmission=(event)=>
    {
        event.preventDefault()
        this.updateHotel(this.state,this.state.hotel_id)
    }

    updateHotel(hotel,hotel_id)
    {
        HotelService.updateHotel(hotel,hotel_id).then(response=>
            {
                console.log(response)
            }).catch(error=>console.log(error))
    }

    render()
    {
        return (
            <div className="container mt-3" class="update-bg">
                <h2 className="text-warning text-center"><i>Update Hotel</i></h2>
                <hr/>
                <form onSubmit={this.handleForSubmission}>
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div className="form-group">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Hotel Id</b></label>
                                <input onChange={this.handleHotelId} value={this.state.hotel_id} className="form-control" placeholder="Provide Hotel Id" required/>
                            </div>

                            <div className="form-group">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>City</b></label>
                                <input onChange={this.handleCity} value={this.state.city} className="form-control" placeholder="Enter City" required/>
                            </div>

                            <div className="form-group">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>HotelName</b></label>
                                <input onChange={this.handleHotelName} value={this.state.hname} className="form-control" placeholder="Enter Hotel Name" required/>
                            </div>

                            <div className="form-group">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-white"><b>Address</b></label>
                                <input onChange={this.handleAdrress} value={this.state.adrress} className="form-control" placeholder="Enter Address" required/>
                            </div>

                            <div className="form-group">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Description</b></label>
                                <input onChange={this.handleDiscription} value={this.state.discription} className="form-control" placeholder="Provide description" required/>
                            </div>

                            <div className="form-group">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Avg_rate_per_day</b></label>
                                <input onChange={this.handleAvg_rate_per_day} value={this.state.avg_rate_per_day} className="form-control" placeholder="Provide amount" required/>
                            </div>

                            <div className="form-group">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-line"><b>Email</b></label>
                                <input onChange={this.handleEmail} value={this.state.email} className="form-control" placeholder="Provide email Id" required/>
                            </div>
                            
                            <div className="form-group">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-white"><b>Phone1</b></label>
                                <input onChange={this.handlePhone1} value={this.state.phone1} className="form-control" placeholder="Provide Phone " required/>
                            </div>
                            
                            <div className="form-group">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-white"><b>Phone2</b></label>
                                <input onChange={this.handlePhone2} value={this.state.phone2} className="form-control" placeholder="Provide Phone " required/>
                            </div>
                            
                            <div className="form-group">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-white"><b>Website</b></label>
                                <input onChange={this.handlewebsite} value={this.state.website} className="form-control" placeholder="Enter Website" required/>
                            </div>
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