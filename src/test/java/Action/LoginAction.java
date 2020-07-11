package Action;

import org.openqa.selenium.support.PageFactory;

import Page.LoginPage;
import StepDef.Hooks;



public class LoginAction {

	LoginPage loginpage;

	public LoginAction() {
		loginpage = new LoginPage();
		PageFactory.initElements(Hooks.driver, loginpage);
	}

	public void clickloginlink() {
		loginpage.loginlink.click(); 
	}
	public void UserName(String user) {
		loginpage.username.sendKeys(user);
	}
	public void Password(String passwd) {
		loginpage.passwd.sendKeys(passwd);
	}
	public void Sign() {
		loginpage.signIn.click();
	}


}
