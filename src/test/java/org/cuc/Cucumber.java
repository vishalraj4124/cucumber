package org.cuc;

import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Cucumber {
static WebDriver driver;
@Given("user should launch browser")
public void user_should_launch_browser() {
	System.setProperty("webdriver.chrome.driver","C:\\Users\\Vishal\\eclipse-vishalSel\\cucumbernw\\Dr\\chromedriver.exe");
     WebDriver driver=new ChromeDriver();
    driver.get("http://demo.guru99.com/telecom/");
}

@Given("user click add customer link")
public void user_click_add_customer_link() {
	driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();  
   
}

@When("user will provide vaild details")
public void user_will_provide_vaild_details() {
	driver.findElement(By.xpath("//label[text()='Done']")).click();  
	driver.findElement(By.id("fname")).sendKeys("vishal");
	driver.findElement(By.id("lname")).sendKeys("Raj");
	driver.findElement(By.id("email")).sendKeys("raj@gmail.com");
	driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("Chennai");
	driver.findElement(By.id("telephoneno")).sendKeys("9865182316");
	driver.findElement(By.xpath("//input[@name='submit']")).click();  
}

@Then("to verified the customer id is displayed")
public void to_verified_the_customer_id_is_displayed() {
	Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
}


}
