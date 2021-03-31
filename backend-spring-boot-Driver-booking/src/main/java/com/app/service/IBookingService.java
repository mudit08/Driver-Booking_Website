package com.app.service;



import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.pojos.Booking;
import com.app.pojos.Customer;
import com.app.pojos.Driver;


public interface IBookingService {
	
	Integer saveBooking(Booking b);

	List<Booking> getAllBooking();
	
	
	

}
