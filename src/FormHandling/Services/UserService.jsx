import axios from "axios";

class UserService
{
   
    updateUser(user,user_id)
    {
        return axios.put( `http://localhost:8080/user/update/${user_id}`,user)
    }
}

export default new UserService()
