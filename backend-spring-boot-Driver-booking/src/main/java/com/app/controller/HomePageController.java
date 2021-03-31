package com.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class HomePageController {
	public HomePageController() {
		System.out.println("in home page".getClass().getName());
	}
	
	@RequestMapping("/")
	public String showHomePage() {
		return "/index";
	}

}
