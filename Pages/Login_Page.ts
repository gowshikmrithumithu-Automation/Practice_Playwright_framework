import { expect, Locator, Page } from "@playwright/test";
import { Base_Page } from "./Base_Page";

export class LoginPage extends Base_Page {
    page: Page;
    emailAdd: Locator
    password: Locator;
    incorrect_errMsg: Locator;
    emailErrMsg: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;
        this.emailAdd = page.getByRole("textbox", { name: "Email address *" });
        this.password = page.getByRole("textbox", { name: "Password " });
        this.incorrect_errMsg = page.locator("//div[contains(text(),'Invalid')]/parent::div[@data-test='login-error']");
        this.emailErrMsg = page.locator("//div[normalize-space()='Email is required']//parent::div[@data-test='email-error']");


    }

    async toolshopLogin(userEmail: string, userPassword: string, isLoginExpected: boolean = true, expectedErrorType?: string) {
        await this.clickElement(this.signIn);
        await this.emailAdd.clear();
        await this.emailAdd.fill(userEmail);
        await this.password.fill(userPassword);
        await this.clickElement(this.login);

        if (isLoginExpected) {
            
        } else if (expectedErrorType === 'Invalid email or password') {
            await this.incorrect_errMsg.waitFor({ state: "visible" });
        } else if (expectedErrorType === 'Email is required') {
            await this.emailErrMsg.waitFor({ state: "visible" });
        } else {
            throw new Error("Unknown error type");
        }
    }


    // async toolshopLogout() {
    //     await this.dropMenuNav.click();
    //     await this.signOut.click();


}

