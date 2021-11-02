import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  User
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li><Link class="dropdown-item" to="/getuser" >Display User Details</Link></li>
                  <li><Link class="dropdown-item" to="/postuser">Add User Details</Link></li>
                  <li><Link class="dropdown-item" to="/getuserbyid">Search User Details</Link></li>
                  <li><Link class="dropdown-item" to="/userupdate">Update User</Link></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hotel
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li><Link class="dropdown-item" to="/gethotel">Display Hotel Details</Link></li>
                  <li><Link class="dropdown-item" to="/posthotel">Add Hotel Details</Link></li>
                  <li><Link class="dropdown-item" to="/gethotelbyid">Search Hotel Details</Link></li>
                  <li><Link class="dropdown-item" to="/deletehotel">Delete Hotel Details</Link></li>
                  <li><Link class="dropdown-item" to="/updatehotel">Update Hotel</Link></li>

                </ul>
              </li>
    
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rooms
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li><Link class="dropdown-item" to="/getroom">Display Room Details</Link></li>
                  <li><Link class="dropdown-item" to="/postroom">Add Room Details</Link></li>
                  <li><Link class="dropdown-item" to="/getroombyid">Search Room Details</Link></li>
                  <li><Link class="dropdown-item" to="/updateroom">Update Room Details</Link></li>
                </ul>
              </li>
          
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Bookings
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li><Link class="dropdown-item" to="/getbookings">Display Bookings Details</Link></li>
                  <li><Link class="dropdown-item" to="/postbookings">Add Bookings Details</Link></li>
                  <li><Link class="dropdown-item" to="/updatebooking">Update Booking Details</Link></li>

                  <li><hr></hr> </li>
                  <li><Link class="dropdown-item" to="/payments">Payments</Link></li>
                  <li><Link class="dropdown-item" to="/transcation">Transcation</Link></li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/register">Register</Link>
              </li>
            </ul>

          </div>
              <ul class="nav justify-content-end">
                <li class="nav-item" >
                  <Link class="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/sigin">Admin login</Link>
                </li>
              </ul>   
        </div>
      </nav>
      
    </div>
    )
}
