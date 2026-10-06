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


}