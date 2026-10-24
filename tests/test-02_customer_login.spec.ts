import { expect, test } from '../Fixtures/login-fixtures'
import data from "../test-data/user_details.json";
import { HomePage } from "../Pages/Home_Page";
import { LoginPage } from '../Pages/Login_Page';


//Verify that the User can be able to login with the valid credentials without any interrupt.
test('TestCase-01-Customer_Login-Vaild-email & Password', async ({ page, LoginPage }) => {

    await expect(page.locator("#menu")).toHaveText("John Doe");

});

//Login with an Invalid Email.
test.only('TestCase-02-Customer_Login-Invalid-email & valid password', async ({ page }) => {

    await page.goto(data.appUrl.domain);
    //Instance of the Login page class
    const loginpage = new LoginPage(page);
    await loginpage.toolshopLogin(data.accountCredentials.invalidEmail.email,
        data.accountCredentials.invalidPassword.password, false);

})