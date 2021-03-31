package com.app.custom_excs;
@SuppressWarnings("serial")
public class CustomerNotFoundException extends RuntimeException {
	public CustomerNotFoundException(String mesg) {
		super(mesg);
	}
}
