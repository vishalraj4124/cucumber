package org.cuc;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;

public class Hook {
	static WebDriver driver;
	@Given("user should launch browser")
	public void user_should_launch_browser() {
		System.out.println("Given");
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Vishal\\eclipse-vishalSel\\cucumbernw\\Dr\\chromedriver.exe");
	      driver=new ChromeDriver();
	      driver.get("http://demo.guru99.com/telecom/");
	}
	
	@After
	public void browser_close() {
	
		System.out.println("after");
		driver.close();
		driver.quit();
	}
	
	}

