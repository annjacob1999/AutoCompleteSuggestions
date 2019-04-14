package Steps;

import Base.BaseUtil;
import com.google.common.base.Verify;
import cucumber.api.DataTable;

import java.util.List;
import java.lang.Float;
import java.util.ArrayList;
import java.lang.String;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.pagefactory.ByAll;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



public class MyStepdefs extends BaseUtil {

    public BaseUtil base;
    String term;
    ArrayList<String> ActAutoSuggestions = new ArrayList<String>();
    ArrayList<String> AutoSuggestionsBckspace = new ArrayList<String>();
    ArrayList<String> ExpBold = new ArrayList<String>();
    WebElement links;
    WebDriverWait wait;

    public MyStepdefs(BaseUtil base) {
        this.base = base;
    }
    @Given("^WebPage is displayed$")
    public void webpageIsDisplayed() {
        base.driver.navigate().to("https://www.staples.com/");
        wait = new WebDriverWait(base.driver, 20);
        Assert.assertEquals("Staples page is displayed", base.driver.findElement(By.id("staples-logo-hdr")).isDisplayed(), true);

    }
    @And("^AutoCompletionSearch is  available$")
    public void autocompletionsearchIsAvailable() {
        Assert.assertEquals("Staples page is displayed", base.driver.findElement(By.id("search-products-txt-box")).isDisplayed(), true);
    }


    @Then("^List is filtered on the Search term and the term is bold in the list$")
    public void listIsFilteredOnTheSearchTermAndIsBold() {
        for (int i = 0; i < ActAutoSuggestions.size(); i++)
            Assert.assertEquals("The term matches and is bold",ExpBold.get(i), term);
    }

    @When("^enter the search term \"([^\"]*)\"$")
    public void enter_the_search_term(String SearchTerm) {

        term=SearchTerm;
        base.driver.findElement(By.id("search-products-txt-box")).sendKeys(term);
        base.driver.findElement(By.id("search-products-txt-box")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div.autocomplete-data >ul")));
        WebElement AutoSuggestions = base.driver.findElement(By.cssSelector("div.autocomplete-data >ul"));
        List<WebElement> links = AutoSuggestions.findElements(By.xpath("./*"));
        for (int i = 0; i < links.size(); i++) {
            if (links.get(i).getAttribute("href") != null) {
                ActAutoSuggestions.add(links.get(i).getAttribute("href"));
                ExpBold.add(links.get(i).findElement(By.tagName("strong")).getText());
            }
        }

    }
}
