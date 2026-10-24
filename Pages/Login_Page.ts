<<<<<<< HEAD
import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    signIn: Locator;
    emailAdd: Locator
    password: Locator;
    login: Locator;
    errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signIn = page.getByRole("link", { name: "Sign in" });
        this.emailAdd = page.getByRole("textbox", { name: "Email address *" });
        this.password = page.getByRole("textbox", { name: "Password " });
        this.login = page.getByRole("button", { name: "Login" });

        this.errorMessage = page.locator("//div[contains(text(),'Invalid')]/parent::div[@data-test='login-error']");

    }

    async toolshopLogin(userEmail: string, userPassword: string, isLoginExpected: boolean = true) {
        await this.signIn.click();
        await this.emailAdd.clear();
        await this.emailAdd.fill(userEmail);
        await this.password.fill(userPassword);
        await this.login.click();

        if (isLoginExpected) {

            await Promise.all([
                this.page.waitForURL(/dashboard/),
                this.login.click()
            ]);
        } else {

            await this.errorMessage.scrollIntoViewIfNeeded();
            await this.errorMessage.waitFor({ state: "visible" });
        }

    }
=======
import { Locator, Page } from "@playwright/test";
import element from "../resources/testData.json";

export class LoginPage {

  page: Page;
  EmailAddress: Locator;
  Password: Locator;
  Login: Locator;


  constructor(page: Page) {
    this.page = page;
    this.EmailAddress = page.locator(element.Locators["Login-Email"]);
    this.Password = page.locator(element.Locators["Login-Password"]);
    this.Login = page.getByRole("button", { name: "Login" });

  }

  async loginWebPage(username: string, password: string) {
    await this.EmailAddress.fill(username);
    await this.Password.fill(password);
    await this.Login.click();

  }


>>>>>>> ef41aab70033b6f78f819b9b9c0a14440708144c
}