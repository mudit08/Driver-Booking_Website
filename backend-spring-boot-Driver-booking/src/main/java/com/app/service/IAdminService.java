package com.app.service;

import com.app.dto.LoginRequest;
import com.app.pojos.Admin;
import com.app.pojos.Customer;


public interface IAdminService {
	Integer saveAdmin(Admin a);
	Admin authenticateAdmin(LoginRequest loginRequest);

}
