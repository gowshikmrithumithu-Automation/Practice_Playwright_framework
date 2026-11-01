import { expect, test } from '../../Fixtures/login-fixtures';
import data from "../../test-data/user_details.json";
import { Base_Page } from "../../Pages/Base_Page";
import { LoginPage } from '../../Pages/Login_Page';
//---------------------------------------------------------------//
test.beforeEach('Basic-Invoke', async ({ page }) => {
    await page.goto(data.appUrl.domain);
});

//Verify that the User can be able to login with the valid credentials without any interrupt.
test.describe('1.Valid Login-Scenario', () => {

    test('TestCase-01-Customer_Login-Vaild-email & Password', async ({ page, LoginPage }) => {

    });


    test('TestCase-02-Customer_Login after Log-out', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.toolshopLogin(data.accountCredentials.bothValid.email,
            data.accountCredentials.bothValid.password, true);
        await loginpage.toolshopLogout();


    });

});

//Login with an Invalid Email.
test.describe('2.Invalid Login-Scenarios', () => {

    test('TestCase-01-Customer_Login-Invalid-email & valid password', async ({ page }) => {

        //Instance of the Login page class
        const loginpage = new LoginPage(page);
        await loginpage.toolshopLogin(data.accountCredentials.invalidEmail.email,
            data.accountCredentials.invalidPassword.password, false, "Invalid email or password");

    });

    test('TestCase-02-Customer_login-Both Empty Credentials', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.clickElement(loginpage.signIn);
        await loginpage.clickElement(loginpage.login);

    });

    test('TestCase-03-Customer_login_emptyEmail', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.toolshopLogin("", data.accountCredentials.bothValid.password, false, "Email is required");



    })

});