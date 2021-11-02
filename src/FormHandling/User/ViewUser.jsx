import React, {useEffect,useState} from "react";
import axios from "axios";
export function ViewUser() {

    const [user_id,setUserId] = useState('')
    const [userIdFromBtn,setUserIdFromBtn] = useState('')
    const [user,setUser]= useState({})
    const [error,setError]=useState(false)

    useEffect(()=>
    {
        axios.get(`http://localhost:8080/user/showUser/${user_id}`)
        .then(response=>
            {
                console.log(response.data)
                console.log(response.status)
                setUser(response.data)
                setError(false)
            })
            .catch(error=>
                {
                    console.log("error.msg")
                    setError(true)
                })
    },[userIdFromBtn]
    
    )

   return (
       <div className="container" class="view-bg">
           <h3 class="Dark-Line text-center">Search User</h3>
           <hr/>
           <div className="form-group mt-3">
            <input type="search"value={user_id} onChange={(event)=>setUserId(event.target.value)} className="form-control" required/> 
            <button onClick={()=>setUserIdFromBtn(user_id)}
    className="btn btn-primary mt-3">Search</button>
            </div>
            <br />
         
           {
               error?

               <h5 className="Dark-Line text-center">User Id not Avaliable</h5>
            : 
            <div>
                <h3>User UserId : {user_id}</h3>
                <ul className="list-group">
                    <li>User Id : {user.user_id} </li>
                    <li>User Name : {user.user_name} </li>
                    <li>User Mobile : {user.mobile}</li>
                    <li>User Email : {user.email}</li>
                    <li>User Address : {user.address}</li>
                    <li>User Username : {user.userName}</li>
                    <li>User Password : {user.password}</li>
                </ul>
            </div>
           
           }
       </div>
   )
}
 
export default ViewUser