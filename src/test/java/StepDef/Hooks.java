package StepDef;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
//import io.cucumber.java.After;
//import io.cucumber.java.Before;

public class Hooks {

	public static WebDriver driver;

	@Before
	public void setUp() {

		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver");
		driver =new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.navigate().to("https://www.usps.com/");
		driver.manage().window().maximize();	
	}
	@After
	public void tearDown() {
		driver.quit();
	}


}
