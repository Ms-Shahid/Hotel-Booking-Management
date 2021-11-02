import logo from './logo.svg';
import './App.css';
import Menu from './FormHandling/Menu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useHistory } from 'react-router';
import { Register } from './FormHandling/Register';
import Home from './FormHandling/Home';
import { Login } from './FormHandling/Login';
import { Sigin } from './FormHandling/Sigin';

import { GetRoomDetails } from './FormHandling/Room/GetRoomDetails';
import { PostRoomDetails } from './FormHandling/Room/PostRoomDetails';
import ViewRoomDetails from './FormHandling/Room/ViewRoomDetails';
import RoomUpdate from './FormHandling/Room/RoomUpdate';

import { PostUser } from './FormHandling/User/PostUser';
import ViewUser from './FormHandling/User/ViewUser';
import UserUpdate from './FormHandling/User/UserUpdate';


import ViewHotel from './FormHandling/Hotel/ViewHotel';
import { DeleteHotelById } from './FormHandling/Hotel/DeleteHotelById';



import { PostTransaction } from './FormHandling/Booking/PostTransactions';
import { PostPayment } from './FormHandling/Booking/PostPayment';
import { GetHotel } from './FormHandling/Hotel/GetHotel';
import UpdateHotel from './FormHandling/Hotel/UpdateHotel';


import { BookingGet } from './FormHandling/Booking/BookingGet';
import { GetUserById } from './FormHandling/User/GetUserById ';

import PostHotel from './FormHandling/Hotel/PostHotel';
import { BookingSave } from './FormHandling/Booking/BookingSave';
import BookingUpdate from './FormHandling/Booking/BookingUpdate';







function App() {
  return (
    <div>
    
      <Router>
      <Menu/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/sigin" component={Sigin}/>

      <Route exact path="/register" component={Register}/>

      <Route exact path="/postuser" component={PostUser}/>
      <Route exact path="/getuser" component={GetUserById}/>
      <Route exact path="/getuserbyid" component={ViewUser}/>
      <Route exact path="/userupdate" component={UserUpdate}/>

      <Route exact path="/gethotel" component={GetHotel}/>
      <Route exact path="/posthotel" component={PostHotel}/>
      <Route exact path="/gethotelbyid" component={ViewHotel}/>
      <Route exact path="/deletehotel" component={DeleteHotelById}/>
      <Route exact path="/updatehotel" component={UpdateHotel}/>

      <Route exact path="/getroom" component={GetRoomDetails}/>
      <Route exact path="/postroom" component={PostRoomDetails}/>
      <Route exact path="/getroombyid" component={ViewRoomDetails}/>
      <Route exact path="/updateroom" component={RoomUpdate}/>

      <Route exact path="/getbookings" component={BookingGet}/>
      <Route exact path="/postbookings" component={BookingSave}/> 
      <Route exact path="/updatebooking" component={BookingUpdate} />
     
      <Route exact path="/payments" component={PostPayment}/>
      <Route exact path="/transcation" component={PostTransaction}/>


      </Router>

  
    </div>
  );
}

export default App;
