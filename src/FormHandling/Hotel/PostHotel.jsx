import React, { Component } from "react";
import axios from "axios";

export default class PostHotel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hotel_id: '',
            city: '',
            hname: '',
            adrress: '',
            discription: '',
            avg_rate_per_day: '',
            email: '',
            phone1: '',
            phone2: '',
            website: ''
        }
        
    }

    hotelIdHandler = (e) => {
        this.setState({
            hotel_id: e.target.value,
        })
    }

    cityHandler = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    hotelNamedHandler = (e) => {
        this.setState({
            hname: e.target.value
        })
    }

    adrressHandler = (e) => {
        this.setState({
            adrress: e.target.value
        })
    }

    discriptionHandler = (e) => {
        this.setState({
            discription: e.target.value
        })
    }

    avg_rate_per_dayHandler = (e) => {
        this.setState({
            avg_rate_per_day: e.target.value
        })
    }
    emailHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    phone1Handler = (e) => {
        this.setState({
            phone1: e.target.value
        })
    }
    phone2Handler = (e) => {
        this.setState({
            phone2: e.target.value
        })
    }
    websiteHandler = (e) => {
        this.setState({
            website: e.target.value
        })
    }


    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/hotel/save', this.state)
            .then(response => {
                alert("Hotel Added Successfully");
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { hotel_id, city, hname, adrress, discription, avg_rate_per_day, email, phone1, phone2, website } = this.state
        return (
            <div class="post-bg">
                <form onSubmit={this.submitHandler}>
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">

                            <div class="form-group">
                                <div class="row">
                                        <label for="colFormLabelLg" class=" col-form-label col-form-label-lg  Dark-Line"><b>Hotel Id</b></label>
                                         <input type="number" class="form-control" id="inputHotelId" value={hotel_id} onChange={this.hotelIdHandler} required/>
                                   
                                        <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line" ><b>City</b></label>
                                        <input type="city" class="form-control" id="inputCity"  value={city} onChange={this.cityHandler} required/>
                                   
                                        <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line"  ><b>Hotel Name</b></label>
                                        <input type="hotelName" class="form-control" id="inputHotelName" value={hname} onChange={this.hotelNamedHandler} required/>
                                   
                                        <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line" ><b>Address</b></label>
                                        <input type="text" class="form-control" id="inputAdrress" value={adrress} onChange={this.adrressHandler} required/>
                                   
                                        <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line" ><b>Description</b></label>
                                        <input type="text" class="form-control" id="inputDiscription" value={discription} onChange={this.discriptionHandler} required/>
                                   
                                      <label for="colFormLabelLg" class=" col-form-label col-form-label-lg text-light" ><b>Avg Rate Per day</b></label>
                                      <input type="text" class="form-control" id="inputAvg_rate_per_day" value={avg_rate_per_day} onChange={this.avg_rate_per_dayHandler} required />
                                
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line" ><b>Email</b></label>
                                    <input type="email" class="form-control" id="inputEmail" value={email} onChange={this.emailHandler} required/>
                               
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line" ><b>Phone 1</b></label>
                                    <input type="text" class="form-control" id="inputPhone1" value={phone1} onChange={this.phone1Handler} required />
                                
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line" ><b>Phone 2</b></label>
                                    <input type="text" class="form-control" id="inputPhone2"  value={phone2} onChange={this.phone2Handler} required/>
                                
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg Dark-Line" ><b>Website</b></label>
                                    <input type="text" class="form-control" id="inputWebsite"  value={website} onChange={this.websiteHandler} required/>
                                </div>
                                <br />
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