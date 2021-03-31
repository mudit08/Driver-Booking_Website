package com.app.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Driver;
@Repository
public interface DriverRepository extends JpaRepository<Driver,Integer> {
	Driver findByEmail(String emailAddress);

	List<Driver> findByPincode(int pcode);

}
