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
import com.app.pojos.Driver;
import com.app.service.IDriverService;

@RestController
@CrossOrigin()
@RequestMapping("/api")
public class DriverController {
	@Autowired
	private IDriverService service;
	
	//save 
	@PostMapping("/drivers")
	public ResponseEntity<String> saveDriver(@RequestBody Driver driver){
		Integer id =service.saveDriver(driver);
		return new ResponseEntity<String>("Driver "+id+" saved ",HttpStatus.OK) ;
		
	}

	//2.fetch all
		@GetMapping("/drivers")
		public ResponseEntity <List<Driver>> getAllDriver(){
			List<Driver> list=service.getAllDrivers();
			return new ResponseEntity<List<Driver>>(list,HttpStatus.OK);
		}
	//3.fatch one 
	@GetMapping("/drivers/{id}")
	public ResponseEntity<Driver> getOneDriver( @PathVariable Integer id ){
		Driver driver =service.getOneDriver(id);
		return new ResponseEntity<Driver>(driver,HttpStatus.OK);
	}
	//4.delete 
	@DeleteMapping("/drivers/{did}")
	public ResponseEntity<String> deleteDriver(@PathVariable Integer did){
		service.deleteDriver(did);
		return new ResponseEntity<String>("Driver"+did+" Deleted ",HttpStatus.OK);
	}

	@PutMapping("/drivers/{id}")
	public ResponseEntity<?> updateDriver(@PathVariable Integer id, @RequestBody Driver driver){
		System.out.println("in update Prodcut "+ id+ "details"+ driver);
		try {
			 return new ResponseEntity<>(service.updateDriver(id, driver),HttpStatus.OK);
			
		} catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@GetMapping("/drivers/getpincode/{pincode}")
	public List<Driver> getDriverByPincode(@PathVariable int pincode) {
		System.out.println(" area pincode "+pincode );
		return  service.getDriverByPincode(pincode);
	}
	
	
	
	
	
	
}
