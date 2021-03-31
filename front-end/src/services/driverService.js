import axios from 'axios';



const DRIVER_API_BASE_URL="http://localhost:7070/api/drivers";


class DriverService{

getDrivers(){
    return axios.get(DRIVER_API_BASE_URL);
}

registerDriver(driver){
    return axios.post(DRIVER_API_BASE_URL,driver);
}

getDriverById(driverId){
    return axios.get(DRIVER_API_BASE_URL+'/'+driverId);
}

updateDriver(drivId){

    return axios.put(DRIVER_API_BASE_URL+'/'+drivId);
}
deleteDriver(driverId){
    return axios.delete(DRIVER_API_BASE_URL+'/'+driverId);
}
getDriverByPincode(pincode){
   // console.log(pincode);
    return axios.get(`${DRIVER_API_BASE_URL}/getpincode/${pincode}`);
   // return axios.get(`${URL}/${pincode}`);

}

}
export default new DriverService();

