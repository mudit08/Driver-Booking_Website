package com.app.service;

import java.util.List;

import com.app.pojos.Driver;

public interface IDriverService {
	Integer saveDriver(Driver d);
	Driver getDriverByEmailPass(String email, String password);
	List<Driver>getAllDrivers();
	Driver getOneDriver(Integer Id);
	Driver  deleteDriver(Integer  Id);
	Driver updateDriver(int id,Driver d);
	List<Driver>getDriverByPincode(int pincode);
}
