import axios from 'axios';

const BASE_URL_CUSTOMER="http://localhost:7070/api/customers";

class CustomerService{

    getCustomer(){
        return axios.get(BASE_URL_CUSTOMER);
    }
    
    registerCustomer(customer){
        return axios.post(BASE_URL_CUSTOMER,customer);
    }
    
    getCustomerById(customerId){
        return axios.get(BASE_URL_CUSTOMER+'/'+customerId);
    }
    
    updateCustomer(customer,customerId){
    
        return axios.put(BASE_URL_CUSTOMER+'/'+customerId,customer);
    }
    deleteCustomer(customerId){
        return axios.delete(BASE_URL_CUSTOMER+'/'+customerId);
    }
    
    authenticateCustomer(loginRequest){
        console.log(loginRequest)
        return axios.post(`${BASE_URL_CUSTOMER}/login`,loginRequest)
    }
    
    }

    export default new CustomerService();
