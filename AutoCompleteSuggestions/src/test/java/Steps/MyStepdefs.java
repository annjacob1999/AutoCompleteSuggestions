package Steps;

import Base.BaseUtil;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;


public class MyStepdefs extends BaseUtil {

    public BaseUtil base;
    String term;
    ArrayList<String> ActAutoSuggestions = new ArrayList<String>();
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
            Assert.assertEquals("The term matches and is bold", ExpBold.get(i), term);
    }

    @When("^I enter the search term \"([^\"]*)\"$")
    public void enter_the_search_term(String SearchTerm) {

        term = SearchTerm;
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

    @Then("^List has less than or equal to (\\d+) enries$")
    public void listHasLessThanOrEqualToEnries(int entries) {
        Assert.assertTrue("The list has less than 10 entries which is " + ActAutoSuggestions.size(), ActAutoSuggestions.size() <= entries);

    }
}
