import { expect, Locator, Page } from "@playwright/test";
import { Base_Page } from "./Base_Page";

export class LoginPage extends Base_Page {
    page: Page;
    emailAdd: Locator
    password: Locator;
    errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.emailAdd = page.getByRole("textbox", { name: "Email address *" });
        this.password = page.getByRole("textbox", { name: "Password " });
        this.errorMessage = page.locator("//div[contains(text(),'Invalid')]/parent::div[@data-test='login-error']");


    }

    async toolshopLogin(userEmail: string, userPassword: string, isLoginExpected: boolean = true, validationMessage?: string) {
        await this.clickElement(this.signIn);
        await this.emailAdd.clear();
        await this.emailAdd.fill(userEmail);
        await this.password.fill(userPassword);
        await this.clickElement(this.login);

        if (isLoginExpected) {

            await Promise.all([
                this.page.waitForURL(/dashboard/),
                this.clickElement(this.login),
            ]);

            await expect(this.page.locator("#menu")).toHaveText("John Doe");

        } else {

            await this.errorMessage.waitFor({ state: "visible" });
            await expect(this.errorMessage).toContainText(validationMessage!);
        }

    }

    async toolshopLogout() {

        await this.dropMenuNav.click();
        await this.signOut.click();


    }

}