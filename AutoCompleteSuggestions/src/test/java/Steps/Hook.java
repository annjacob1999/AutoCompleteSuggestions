package Steps;

import Base.BaseUtil;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;



import java.util.concurrent.TimeUnit;

public class Hook extends BaseUtil {

    private BaseUtil base;
    private BaseUtil wait;

    public Hook(BaseUtil base) {

        this.base = base;

    }

    @Before
    public void InitializeTest(){
        System.out.println("Opening the browser");
        base.driver = new ChromeDriver();
        base.driver.manage().window().maximize();
        base.driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

    }

    @After
    public void TearDownTest() throws InterruptedException {
        base.driver.quit();
    }

}
