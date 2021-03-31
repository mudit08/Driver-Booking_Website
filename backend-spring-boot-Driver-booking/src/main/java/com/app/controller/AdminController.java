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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.ResponseDTO;
import com.app.pojos.Admin;
import com.app.pojos.Customer;
import com.app.pojos.Driver;
import com.app.service.IAdminService;
import com.app.service.ICustomerService;
import com.app.service.IDriverService;
@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
	//DI
	@Autowired
	private ICustomerService custService;
	@Autowired
	private IDriverService driverSrevice;
	@Autowired
	private IAdminService adminService;
	
	
	// list of all driver
	@GetMapping("/alldrivers")
	public ResponseEntity <List<Driver>> getAllDriver(){
		List<Driver> list=driverSrevice.getAllDrivers();
		return new ResponseEntity<List<Driver>>(list,HttpStatus.OK);
	}
	// add driver from admin 
	@PostMapping("/adddriver")
	public ResponseEntity<String> saveDriver(@RequestBody Driver driver){
		Integer id =driverSrevice.saveDriver(driver);
		return new ResponseEntity<String>("Driver "+id+" saved ",HttpStatus.OK) ;
		
	}
	//to delte the driver from admin
	@DeleteMapping("/delDriver")
	public ResponseEntity<String> deleteDriver(@PathVariable Integer id){
		driverSrevice.deleteDriver(id);
		return new ResponseEntity<String>("Driver"+id+" Deleted ",HttpStatus.OK);
	}
	// show all customer 
	@GetMapping("/allcustomers")
	public ResponseEntity <List<Customer>> getAllCustomer(){
		List<Customer> list=custService.getAllCustomer();
		return new ResponseEntity<List<Customer>>(list,HttpStatus.OK);
	}
	@PostMapping("/register")
	public ResponseEntity<String> saveAdmin(@RequestBody Admin admin){
		adminService.saveAdmin(admin);
		return new ResponseEntity<String>("Admin saved ",HttpStatus.OK) ;
		
	}
	@PostMapping("/login")
	public ResponseDTO<?> authenticateAdmin(@RequestBody LoginRequest loginRequest){
		System.out.println("in authticate User Admin  "+ loginRequest);
		try {		
			Admin a = adminService.authenticateAdmin(loginRequest);
			System.out.println("Admin : "+a);
			return new ResponseDTO<>(HttpStatus.OK, " Admin login sucessfull", a);
		}catch (RuntimeException e) {
			System.out.println("err in authenticateUser : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Not Valid", null);
		}
	}

	

}
