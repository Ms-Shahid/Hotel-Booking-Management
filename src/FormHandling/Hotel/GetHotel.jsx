import { Component } from "react";
import axios from 'axios'

export class GetHotel extends Component{
constructor(props){
    super(props)

    this.state={
             hotel : [],
             errorMsg : ""
    }
}

componentDidMount(){
    axios.get('http://localhost:8080/hotel/showAllHotel')
    .then(response=>{
        console.log(response)
        
        this.setState({
            hotel : response.data
            
        })
    }).catch(error=>{
        console.log(console.error)
        this.setState({
            errorMsg : "Error in retreiving data"
        })
    })
}

    render(){
        const { hotel, errorMsg } = this.state
        return(
            <div class="list-bg">
               <div className="container" >
                    <h2 className="text-primary text-center">Hotel List</h2>
               <hr/>
               <table className ="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th>hotel_id</th>
                            <th>City</th>
                            <th>Hotel Name</th>
                            <th>Address</th>
                            <th>Description</th>
                            <th>Rate Per Day</th>
                            <th>Email</th>
                            <th>Phone 1</th>
                            <th>Phone 2</th>
                            <th>Website</th>
                        
                        </tr>
                    </thead>

                <tbody>
                    {
                        this.state.hotel.length ?
                        this.state.hotel.map(hotel=><div key={hotel.id}>
                            {hotel.hid}
                            <br/>
                            {hotel.city}
                            <br/>
                            {hotel.hname}
                            <br/>
                            {hotel.address}
                            <br/>
                            {hotel.description}
                            <br/>
                            {hotel.avg_rate_per_day}
                            <br/>
                            {hotel.email}
                            <br/>
                            {hotel.phone1}
                            <br/>
                            {hotel.phone2}
                            <br/>
                            {hotel.website}
                            <br/>
                            <hr/>
                            </div> ) :
                        null
                    }
                    {
                        errorMsg ? <div> {errorMsg}</div> : null
                    }
                </tbody>
            </table>
            </div>
            </div>
        )
    }
}