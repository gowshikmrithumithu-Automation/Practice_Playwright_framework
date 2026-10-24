import { expect, Locator, Page } from "@playwright/test";

export class HomePage {

    page: Page;
    signIn: Locator;
    registerLink: Locator;
    registerBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signIn = page.getByRole("link", { name: "Sign in" });
        this.registerLink = page.getByRole("link", { name: "Register your account" });
        this.registerBtn = page.getByRole("button", { name: "Register" });
    }

    async clickSignIn() {
        await this.signIn.click();
    }

    async clickRegisterLink() {
        await this.registerLink.click();
    }

    async toolshopSignUp() {
        await this.clickSignIn();
        await this.clickRegisterLink();

        await expect(this.page.getByRole("heading", { name: "Customer registration" })).toBeVisible();

        await this.registerBtn.click();



    }
}
