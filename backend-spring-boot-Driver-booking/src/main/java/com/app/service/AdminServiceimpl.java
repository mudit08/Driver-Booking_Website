package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminRepository;
import com.app.dto.LoginRequest;
import com.app.pojos.Admin;
import com.app.pojos.Customer;
@Service
@Transactional
public class AdminServiceimpl implements IAdminService {
	
    @Autowired
    private AdminRepository Adminrepo;
    
    @Override
	public Admin authenticateAdmin(LoginRequest loginRequest) {
    	Admin a=Adminrepo.findByEmail(loginRequest.getEmail());
    	System.out.println(a);
    	if(a==null)
    		
    	{
    		throw new RuntimeException("Admin not found");
    	}
    	if(!a.getPassword().equals(loginRequest.getPassword()))
    	{
    		throw new RuntimeException("Incorrect Password");
    	}
    	return a;
    	}
	@Override
	public Integer saveAdmin(Admin a) {
		Integer id= Adminrepo.save(a).getAdminId();
		return id;
	}

}
