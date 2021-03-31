package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.ResponseDTO;
import com.app.pojos.Customer;
import com.app.service.ICustomerService;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class CustomerController {
	@Autowired
	private ICustomerService custService;
	//1.save 
	@PostMapping("/customers")
	public ResponseEntity<String> saveCustomer(@RequestBody Customer customer){
		Integer id =custService.saveCustomer(customer);
		return new ResponseEntity<String>("Customer"+id+" saved ",HttpStatus.OK) ;
		
	}
	
	//2.fetch all
	@GetMapping("/customers")
	public ResponseEntity <List<Customer>> getAllCustomer(){
		List<Customer> list=custService.getAllCustomer();
		return new ResponseEntity<List<Customer>>(list,HttpStatus.OK);
	}
	
	//3.fatch one 
	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> getOneCustomer( @PathVariable Integer id ){
		Customer cust =custService.getOneCustomer(id);
		return new ResponseEntity<Customer>(cust,HttpStatus.OK);
	}
	
	//4.delete 
	@DeleteMapping("/customers/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable Integer id){
		custService.deleteCustomer(id);
		return new ResponseEntity<String>("Customer"+id+" Deleted ",HttpStatus.OK);
		
	}
	
	//LOGIN 
	@PostMapping("/customers/login")
	public ResponseDTO<?> authenticateCustomer(@RequestBody LoginRequest loginRequest){
		System.out.println("in authticate User "+ loginRequest);
		try {		
			Customer c = custService.authenticateCustomer(loginRequest);
			System.out.println("Cutomer : "+c);
			return new ResponseDTO<>(HttpStatus.OK, "Customer login sucessfull", c);
		}catch (RuntimeException e) {
			System.out.println("err in authenticateUser : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "User Not Added", null);
		}
	}
	
	
	//5.update 
	@PutMapping("/customers/{id}")
	public ResponseEntity<?> updateCustomer(@PathVariable Integer id, @RequestBody Customer details){
		System.out.println("inupdate product "+ id+ "details :"+details);
		try {
			return new ResponseEntity<>(custService.updateCustomer(id, details), HttpStatus.OK);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
