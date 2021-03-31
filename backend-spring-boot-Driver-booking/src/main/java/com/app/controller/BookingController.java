package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Booking;
import com.app.service.IBookingService;
@RestController
@CrossOrigin
@RequestMapping("/booking")
public class BookingController {
	@Autowired
private IBookingService service;
	@PostMapping("/add")
	public ResponseEntity<String>saveEntity(@RequestBody Booking b)
	{
		System.out.println(b);
		Integer bid=service.saveBooking(b);
		return new ResponseEntity<String>("booking"+bid+"save",HttpStatus.OK);
		
	}
	@GetMapping("/getall")
	public ResponseEntity <List<Booking>> getAllBooking(){
		List<Booking> list=service.getAllBooking();
		return new ResponseEntity<List<Booking>>(list,HttpStatus.OK);
	}

}
