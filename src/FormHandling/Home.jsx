import React from 'react'
import Marquee from "react-fast-marquee";


export default function Home() {
    return (
        
        <div class="reg-bg">
            <img src="./images/img2.jpg" alt="" />
            <div> 
                <h1 className="Container" style={{textAlign:'center', color:'white', padding:2, backgroundColor: "black"}}><b>Welcome To Hotel Bookings Management System</b></h1>
            </div>
            <Marquee style={{color:'green'}}>
                The restrictions surrounding COVID-19 change often. Please stay informed before traveling. Stay safe. To help you further, Bookings of Hotel available 24*7.
            </Marquee>
            <hr/>
        
            <footer class="footer-distributed">
            <h3>About Us</h3>
                    <p>
                        This modern Hotel Center offers a restaurant, rooftop bar and rooms with great city views. Guests can also work out in the fitness center.<br/>
                        All soundproofed rooms have private bathrooms with guest amenities. Each room has a flat-screen TV, small refrigerator and tea/coffee making facilities. Free high-speed internet access is available in all rooms.
                    </p>
		    </footer>
        </div> 
    )
}
