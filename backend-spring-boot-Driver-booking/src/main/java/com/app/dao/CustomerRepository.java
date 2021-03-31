package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Customer;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	 Customer findByEmail(String emailAddress);
	
}
