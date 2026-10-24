import { expect, test } from '@playwright/test';
import element from "../resources/testData.json";
import { LoginPage } from '../Pages/Login_Page';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    await page.goto(element.BaseUrl.automation_practiceBaseUrl);
    loginPage = new LoginPage(page);

});

//1.Verify that the User can be able to Login the respective valid credentials.
test.describe('Login-Valid Scenario', async () => {

    test("Testcase-01-LoginPage with valid credentials", async ({ page }) => {

        await loginPage.loginWebPage(process.env.automation_excercise_email as string,
            process.env.automation_excercise_password as string);

        const homePageVerify = page.locator(element.Locators['Home-loginPage']);

        await homePageVerify.highlight();

        //Verification after reach to the Login page.
        await expect(homePageVerify, "Login is not happended due to some issue").toBeVisible();


    })
})

//2.Verify that the User can see the Validation Message when entered the Invalid UserName and Invalid Password.
test.describe("Login-Invalid Scenario", async () => {

    test("Testcase-02-LoginPage with Invalid credentials", async ({ page }) => {

        await loginPage.loginWebPage(element.TestDataCredentials.InvalidUserName,
            element.TestDataCredentials.InvalidPassword);

        const invalidMessageVerify = page.locator(element.Locators['Invalid-Login']);

        await invalidMessageVerify.highlight();

        await expect(invalidMessageVerify).toBeEnabled();


    })


})