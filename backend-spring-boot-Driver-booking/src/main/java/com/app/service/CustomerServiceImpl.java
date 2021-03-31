package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.CustomerNotFoundException;
import com.app.dao.CustomerRepository;
import com.app.dto.LoginRequest;
import com.app.pojos.Customer;
@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {
	@Autowired
	private CustomerRepository custRepo;
	@Override
	public Customer authenticateCustomer(LoginRequest loginRequest) {
		//return custRepo.authenticateCustomer(loginRequest.getEmail(), loginRequest.getPassword());
		Customer c=custRepo.findByEmail(loginRequest.getEmail());
	System.out.println(c);
	if(c==null)
		
	{
		throw new RuntimeException("customer not found");
	}
	if(!c.getPassword().equals(loginRequest.getPassword()))
	{
		throw new RuntimeException("Incorrect Password");
	}
	return c;
	}
	

	@Override
	public Integer saveCustomer(Customer c) {
		Integer id= custRepo.save(c).getCustId();
		return id;
	}

	@Override
	public List<Customer> getAllCustomer() {
		List<Customer> list= custRepo.findAll();
		return list;
	}

	@Override
	public Customer getOneCustomer(Integer Id) {
		Optional<Customer> opt = custRepo.findById(Id);
	   Customer cust=opt.orElseThrow(()-> new CustomerNotFoundException("Cusotmer Not Found !!"+Id));
		return cust;
	}

	@Override
	public Customer deleteCustomer(Integer Id) {
		Optional<Customer> opt = custRepo.findById(Id);
		Customer cust=opt.orElseThrow(()-> new CustomerNotFoundException("invalid Customer Id "+Id));
		custRepo.deleteById(Id);
		return cust;
	}
	
	@Override
	public Customer updateCustomer(int id, Customer c) {
		Optional<Customer> opt = custRepo.findById(id);
		Customer cust=opt.orElseThrow(()-> new CustomerNotFoundException("invalid Customer Id "+id));
		return custRepo.save(c);
	}

	
	
}
