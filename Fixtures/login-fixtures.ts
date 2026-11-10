import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Login_Page';
import data from '../test-data/user_details.json';

// Declare the types of your fixtures.
type MyFixtures = {
    LoginPage: LoginPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    LoginPage: async ({ page }, use) => {
        // Set up the fixture.

        const loginPage = new LoginPage(page);
        await page.goto(data.appUrl.domain);

        await loginPage.toolshopLogin(data.accountCredentials.bothValid.email, data.accountCredentials.bothValid.password);

        await expect(loginPage.dropMenuNav)
            .toHaveText("John Doe");

        await use(loginPage);

    },

});
export { expect } from '@playwright/test';