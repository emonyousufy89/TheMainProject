package Page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;



public class LoginPage {

	

	@FindBy(how=How.XPATH,using="//a[contains(text(),'Register / Sign In')]")
	public WebElement loginlink;
	
	@FindBy(how=How.XPATH,using="//input[@name='username']")
	public WebElement username;
	
	@FindBy(how=How.XPATH,using="//input[@name='password']")
	public WebElement passwd;
	
	@FindBy(how=How.XPATH,using="//button[@id='btn-submit']")
	public WebElement signIn;
	
	
	

}
