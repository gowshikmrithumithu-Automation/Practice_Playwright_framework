import { expect, test } from '../../Fixtures/login-fixtures';
import data from "../../test-data/user_details.json";
import { Base_Page } from "../../Pages/Base_Page";
import { LoginPage } from '../../Pages/Login_Page';
//---------------------------------------------------------------//

//Verify that the User can be able to login with the valid credentials without any interrupt.
test.describe('1.Valid Login-Scenario', () => {


    test('TestCase-01-Customer_Login-Vaild-email & Password', async ({ page, LoginPage }) => {


    });

});

//Login with an Invalid Email.
test.describe('2.Invalid Login-Scenarios', () => {

    test.beforeEach('Basic-Invoke', async ({ page }) => {
        await page.goto(data.appUrl.domain);
    });


    test('TestCase-01-Customer_Login-Invalid-email & valid password', async ({ page }) => {

        //Instance of the Login page class
        const loginPage = new LoginPage(page);
        await loginPage.toolshopLogin(data.accountCredentials.invalidEmail.email,
            data.accountCredentials.invalidPassword.password, false, "Invalid email or password");

        await expect(loginPage.incorrect_errMsg).toContainText("Invalid");

    });

    test('TestCase-02-Customer_login-Both Empty Credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.clickElement(loginPage.signIn);
        await loginPage.clickElement(loginPage.login);


    });

    test('TestCase-03-Customer_login_emptyEmail', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.toolshopLogin("", data.accountCredentials.bothValid.password, false, "Email is required");

        //Verification
        await expect(loginPage.emailErrMsg).toContainText("required");

    })

});