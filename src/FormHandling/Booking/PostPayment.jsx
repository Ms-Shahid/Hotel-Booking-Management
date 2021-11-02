import React, { Component } from "react";
import axios from "axios";

export class PostPayment extends Component{
constructor(props){
    super(props)
    
    this.state={
      payment_id:'',
      booking_id:'',
      transaction_id:''

    }
}

payment_idHandler=(e)=>{
    this.setState({
    payment_id:e.target.value,
    })
}

booking_idHandler=(e)=>{
    this.setState({
        booking_id:e.target.value
})
}
transaction_idHandler=(e)=>{
    this.setState({
        transaction_id:e.target.value
})
}

submitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:8080/payment/payment/save',this.state)
    .then(response => {
        console.log(response)
        alert('Payment Done Succesfully')
    })
    .catch(error=>{
        console.log(error)
    })
}

    render(){
        const {payment_id,booking_id,transaction_id} = this.state
        return(
            <div class="amt">
                <form onSubmit={this.submitHandler} class="align-items-center">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    
                            <div class="form-group">
                                <div class="row">
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-danger" >Payment Id</label>
                                    <input type="payment_id" class="form-control" id="inputTransaction_Id" value = {payment_id}  onChange={this.payment_idHandler} required/>
                                    
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-danger" >Booking Id</label>
                                    <input type="booking_id" class="form-control" id="inputEmail4" value={booking_id} onChange={this.booking_idHandler} required/>
                                
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-danger"  >Transaction Id</label>
                                    <input type="transaction_id" class="form-control" id="inputPassword4" value={transaction_id} onChange={this.transaction_idHandler} required/>  
                                </div> 
                                <br/>    
                                <div class="d-grid gap-2 col-6  mx-auto">
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

