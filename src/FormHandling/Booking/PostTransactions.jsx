import React, { Component } from "react";
import axios from "axios";

export class PostTransaction extends Component{
constructor(props){
    super(props)
    
    this.state={
     
      transaction_id:'',
      amount:''


    }
}

transaction_idHandler=(e)=>{
    this.setState({
        transaction_id:e.target.value
})
}
amountHandler=(e)=>{
    this.setState({
        amount:e.target.value
})
}

submitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:8080/room_Details/add',this.state)
    .then(response => {
        console.log(response)
        alert('Transcation Done Sucessfully')
    })
    .catch(error=>{
        console.log(error)
    })
}

    render(){
        const {transaction_id,amount} = this.state
        return(
            <div class="amt">
                <form onSubmit={this.submitHandler} class="align-items-center">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    
                            <div class="form-group">
                                <div class="row">
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-danger" >Transaction Id</label>
                                    <input type="transaction_id" class="form-control" id="inputTransaction_Id" value = {transaction_id}  onChange={this.transaction_idHandler} required/>
                                    
                                    <label for="colFormLabelLg" class="col-form-label col-form-label-lg text-danger" >Amount</label>
                                    <input type="amount" class="form-control" id="inputmount"  value = {amount} onChange={this.amountHandler} required/>
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