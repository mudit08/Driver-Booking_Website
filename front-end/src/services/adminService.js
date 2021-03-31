import axios from  'axios'

const BASE_URL_ADMIN="http://localhost:7070/admin";

class AdminService{
    authenticateAdmin(loginRequest){
       
        return axios.post(`${BASE_URL_ADMIN}/login`,loginRequest)
    }
}
export default new AdminService;
