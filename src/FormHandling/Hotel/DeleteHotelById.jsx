import { Component } from "react";
import axios from "axios";

export class DeleteHotelById extends Component{
    constructor(props){
        super(props)

        this.state = {
            hotel : [],
            errorMsg : ''
        }
    }


    componentDidMount(){
        axios.get('http://localhost:8080/hotel/showAllHotel')
        .then(response=>{
            console.log(response)
            this.setState({
                hotel : response.data,
            })
        }).catch(error=>{
            console.log(error)
            this.setState({
                errorMsg : "Hotel doesn't exist!!"
            })
        })
    }

    deleteHotel=(hotel_id)=>{
       
        axios.delete('http://localhost:8080/hotel/'+hotel_id,this.state)
        .then((response) =>{
            if(response.data!=null){
             
                this.setState({
                    hotel:this.state.hotel.filter(hotel=>hotel.hotel_id!==hotel_id)
    
                    });
                }
            });
        }

        getHotel(hotel_id){

            
        }

    render(){
        return (
        <div class="list-bg">
        <div className="container">
        <h2 className="text-primary text-center">Hotel List</h2>
        <hr/>

        <table className = "table table-bordered border-primary">
            <thead>
                <tr>
                    <th>Hotel id</th>
                    <th>City</th>
                    <th>hname</th>
                    <th>Address</th>
                    <th>Discription</th>
                    <th>Avg Rate Per day</th>
                    <th>Email</th>
                    <th>Phone1</th>  
                    <th>Phone2</th>
                    <th>Website</th>

                    
                </tr>
            </thead>

            <tbody>
                {
                    this.state.hotel.map(
                        hotel =>
                        <tr key = {hotel.hotel_id}>
                            <td>{hotel.hotel_id}</td>
                            <td>{hotel.city}</td>
                            <td>{hotel.hname}</td>
                            <td>{hotel.address}</td>
                            <td>{hotel.discription}</td>
                            <td>{hotel.avg_rate_per_day}</td>
                            <td>{hotel.email}</td>
                            <td>{hotel.phone1}</td>
                            <td>{hotel.phone2}</td>
                            <td>{hotel.website}</td>
                            <td><button className="btn btn-warning" onClick={() => this.deleteHotel(hotel.hotel_id)}>Delete</button></td>
                            
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
