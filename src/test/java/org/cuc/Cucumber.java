package org.cuc;

import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Cucumber {
	static WebDriver driver;


@Given("user click add customer link")
public void user_click_add_customer_link() {
	Hook.driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
}

@Given("user click add customer linkopen")
public void user_click_add_customer_linkopen() {
	Hook.driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
}

//SCENERIO
@When("user will provide vaild details")
public void user_will_provide_vaild_details() {
	Hook.driver.findElement(By.xpath("//label[text()='Done']")).click();  
	Hook.driver.findElement(By.id("fname")).sendKeys("vishal");
	Hook.driver.findElement(By.id("lname")).sendKeys("Raj");
	Hook.driver.findElement(By.id("email")).sendKeys("raj@gmail.com");
	Hook.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("Chennai");
	Hook.driver.findElement(By.id("telephoneno")).sendKeys("9865182316");
	Hook.driver.findElement(By.xpath("//input[@name='submit']")).click();  
}

//SCENERIO OUTLINE
@When("user will provide vaild detailsout{string},{string},{string},{string},{string}")
public void user_will_provide_vaild_detailsout(String fname, String lname, String email, String address, String phone) {
	Hook.driver.findElement(By.xpath("//label[text()='Done']")).click();  
	Hook.driver.findElement(By.id("fname")).sendKeys(fname);
	Hook.driver.findElement(By.id("lname")).sendKeys(lname);
	Hook.driver.findElement(By.id("email")).sendKeys(email);
	Hook.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(address);
	Hook.driver.findElement(By.id("telephoneno")).sendKeys(phone);
	Hook.driver.findElement(By.xpath("//input[@name='submit']")).click();
}

//ONE D LIST
@When("user will provide vaild detailslist")
public void user_will_provide_vaild_detailslist(io.cucumber.datatable.DataTable dataTable) {
    List<String> oned = dataTable.asList(String.class);
    //System.out.println(oned);
    Hook.  driver.findElement(By.xpath("//label[text()='Done']")).click();  
    Hook.driver.findElement(By.id("fname")).sendKeys(oned.get(0));
    Hook.driver.findElement(By.id("lname")).sendKeys(oned.get(1));
    Hook.driver.findElement(By.id("email")).sendKeys(oned.get(2));
    Hook.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(oned.get(3));
    Hook.driver.findElement(By.id("telephoneno")).sendKeys(oned.get(4));
    Hook.driver.findElement(By.xpath("//input[@name='submit']")).click();        
}

//ONE D MAP
@When("user will provide vaild detailsmap")
public void user_will_provide_vaild_detailsmap(io.cucumber.datatable.DataTable dataTable) {
Map<String, String> asMap = dataTable.asMap(String.class, String.class);
Hook.driver.findElement(By.xpath("//label[text()='Done']")).click();  
Hook.driver.findElement(By.id("fname")).sendKeys(asMap.get("fname"));
Hook.driver.findElement(By.id("lname")).sendKeys(asMap.get("lname"));
Hook.driver.findElement(By.id("email")).sendKeys(asMap.get("email"));
Hook.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(asMap.get("address"));
Hook.driver.findElement(By.id("telephoneno")).sendKeys(asMap.get("phone"));
Hook.driver.findElement(By.xpath("//input[@name='submit']")).click();

}

//TWO D LIST
@When("user will provide vaild detailtwod")
public void user_will_provide_vaild_detailtwod(io.cucumber.datatable.DataTable dataTable) {
	List<List<String>> twodlist = dataTable.asLists(String.class);
    System.out.println(twodlist);
    Hook.driver.findElement(By.id("rental1")).sendKeys(twodlist.get(0).get(0));
    Hook.driver.findElement(By.id("local_minutes")).sendKeys(twodlist.get(0).get(1));
    Hook.driver.findElement(By.id("inter_minutes")).sendKeys(twodlist.get(0).get(2));
    Hook. driver.findElement(By.id("sms_pack")).sendKeys(twodlist.get(1).get(0));
    Hook.driver.findElement(By.id("minutes_charges")).sendKeys(twodlist.get(1).get(1));
    Hook. driver.findElement(By.id("inter_charges")).sendKeys(twodlist.get(2).get(2));
    Hook.driver.findElement(By.id("sms_charges")).sendKeys(twodlist.get(2).get(1));
    Hook.driver.findElement(By.xpath("//input[@type='submit']")).click();   
}

//TWO D MAP
@When("user will provide vaild detailtwodmap")
public void user_will_provide_vaild_detailtwodmap(io.cucumber.datatable.DataTable dataTable) {
List<Map<String, String>> twodmap = dataTable.asMaps(String.class,String.class);
System.out.println(twodmap);
Hook.driver.findElement(By.id("rental1")).sendKeys(twodmap.get(0).get("rental"));
Hook.driver.findElement(By.id("local_minutes")).sendKeys(twodmap.get(1).get("minutes"));
Hook.driver.findElement(By.id("inter_minutes")).sendKeys(twodmap.get(2).get("international"));
Hook.driver.findElement(By.id("sms_pack")).sendKeys(twodmap.get(2).get("smspack"));
Hook.driver.findElement(By.id("minutes_charges")).sendKeys(twodmap.get(0).get("localperminutes"));
Hook.driver.findElement(By.id("inter_charges")).sendKeys(twodmap.get(1).get("internationalminutes"));
Hook.driver.findElement(By.id("sms_charges")).sendKeys(twodmap.get(0).get("smsper"));
Hook.driver.findElement(By.xpath("//input[@type='submit']")).click();
}

@Then("to verified the customer id is displayed")
public void to_verified_the_customer_id_is_displayed() {
	Assert.assertTrue(Hook.driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
}

@Then("to verified the customer id is displayedss")
public void to_verified_the_customer_id_is_displayeds() {
	Assert.assertTrue(Hook.driver.findElement(By.xpath("//h2[@style='text-align: center;font-weight: 700;font-size:28px;']")).isDisplayed());
}

}
