package StepDef;
import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.GherkinKeyword;
import com.aventstack.extentreports.gherkin.model.Feature;
import com.aventstack.extentreports.gherkin.model.Scenario;

import ReporterUtils.ExtentReportListner;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination extends ExtentReportListner{
	ExtentTest test = null;
	ExtentTest featureNode = null;
	ExtentTest scenarioNode = null;

	Action.LoginAction LoginAction= new Action.LoginAction();

	@Given("customer is on Homepage")

	public void customer_is_on_Homepage() throws IOException {

		featureNode = extent.createTest(Feature.class,"Login Feature");
		scenarioNode = featureNode.createNode(Scenario.class,"Successful login with valid username and password");

		ExtentTest logInfo = null; //step defn
		try{
			logInfo = scenarioNode.createNode(new GherkinKeyword("Given"), "customer is on Homepage");

			System.out.println("Title of the homepage is : "+Hooks.driver.getTitle());
			logInfo.pass("User is on homepage");
		}

		catch(AssertionError|Exception e){
			logInfo.fail("Homepage could not be found");
			logInfo.addScreenCaptureFromPath(captureScreenShot(Hooks.driver));}
			//testStepHandle("FAIL", Hooks.driver, logInfo, e);
		}
		//	@When("Customer clicks Register\\SignIn link on the top of homepage")
		//	public void customer_clicks_Register_SignIn_link_on_the_top_of_homepage() {
		//		LoginAction.clickloginlink();
		//	}
		//	@When("^Customer clicks Register\\SignIn link on the top of homepage$")
		//	public void customer_clicks_Register_SignIn_link_on_the_top_of_homepage() throws Throwable {
		//		LoginAction.clickloginlink();
		//	}
		@When("^Customer clicks SignIn link on the top of homepage$")
		public void customer_clicks_Register_SignIn_link_on_the_top_of_homepage() throws Throwable {

			LoginAction.clickloginlink();
		}

		@When("^Customer enters \"([^\"]*)\" and Customer enters \"([^\"]*)\"$")
		public void customer_enters_and_Customer_enters(String username, String password) throws Throwable {
			System.out.println("UserName" + username + "Password" + password);
			LoginAction.UserName(username);
			LoginAction.Password(password);
		}

		//	@When("Customer enters {string} and Customer enters {string}")
		//	public void customer_enters_and_Customer_enters(String username, String password) {
		//		System.out.println("UserName" + username + "Password" + password);
		//		LoginAction.UserName(username);
		//		LoginAction.Password(password);
		//	}
		@When("Custoemr clicks sign in")

		public void custoemr_clicks_sign_in() throws InterruptedException {
			LoginAction.Sign();
		}
		@Then("Homepage should be shown")
		public void homepage_should_be_shown() {
			System.out.println("passed");

		}


}
