package com.app.service;

import java.util.List;

import com.app.dto.LoginRequest;
import com.app.pojos.Customer;

public interface ICustomerService {
	Customer authenticateCustomer(LoginRequest loginRequest);
	Integer saveCustomer(Customer c);
	
	List<Customer>getAllCustomer();
	 Customer getOneCustomer(Integer Id);
	 Customer  deleteCustomer(Integer  Id);
	 Customer updateCustomer(int id,Customer c);
	
	

}
