package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.DriverNotFoundException;
import com.app.dao.DriverRepository;
import com.app.pojos.Driver;
@Service
@Transactional
public class DriverServiceImpl implements IDriverService {
	@Autowired
	private DriverRepository repo;
	
	@Override
	public Integer saveDriver(Driver d) {
		Integer id= repo.save(d).getDrivId();
		return id;
	}

	@Override
	public List<Driver> getAllDrivers() {
		List<Driver> list= repo.findAll();
		return list;
	}

	@Override
	public Driver getOneDriver(Integer Id) {

		Optional<Driver> opt = repo.findById(Id);
		Driver driver=opt.orElseThrow(()-> new DriverNotFoundException("Cusotmer Not Found !!"+Id));
		return driver;
		}	

	@Override
	public Driver deleteDriver(Integer Id) {
		Optional<Driver> opt = repo.findById(Id);
		Driver driver=opt.orElseThrow(()-> new DriverNotFoundException("Invalid Id "+Id));
		repo.deleteById(Id);
		return driver;
	}

	@Override
	public Driver updateDriver(int id, Driver d) {
		Optional<Driver> opt = repo.findById(id);
		opt.orElseThrow(()-> new DriverNotFoundException("Cusotmer Not Found !!"+id));
		return repo.save(d);
	}

	@Override
	public Driver getDriverByEmailPass(String email, String password) {
		Driver d =repo.findByEmail(email);
		System.out.println(d);
		if(d==null)
			
		{
			throw new RuntimeException("customer not found");
		}
		if(!d.getPassword().equals(password))
		{
			throw new RuntimeException("Incorrect Password");
		}
		return d;
	}

	@Override
	public List<Driver> getDriverByPincode(int pincode) {
		 List<Driver> list =repo.findByPincode(pincode);
		return list;
	}

	
	
	

}
