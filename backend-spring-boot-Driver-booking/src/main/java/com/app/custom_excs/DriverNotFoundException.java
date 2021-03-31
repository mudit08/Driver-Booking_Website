package com.app.custom_excs;
@SuppressWarnings("serial")
public class DriverNotFoundException extends RuntimeException {
	public DriverNotFoundException(String mesg) {
		super(mesg);
	}
}
