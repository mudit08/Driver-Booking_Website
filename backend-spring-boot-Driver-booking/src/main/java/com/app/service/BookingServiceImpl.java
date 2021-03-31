package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookingRepository;
import com.app.pojos.Booking;
import com.app.pojos.Customer;
import com.app.pojos.Driver;
@Service
@Transactional
public class BookingServiceImpl implements IBookingService {
	@Autowired
	private BookingRepository bookingRepo;

	
	@Override
	public Integer saveBooking(Booking b) {
		// TODO Auto-generated method stub
		Integer id= bookingRepo.save(b).getBookingId();
		Driver d=b.getDriver();
		d.setStatus(false);
		return id;
	}


	@Override
	public List<Booking> getAllBooking() {
		// TODO Auto-generated method stub
		List<Booking> list= bookingRepo.findAll();
		System.out.println("hi");
		return list;
	}    

}
