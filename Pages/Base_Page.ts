import { expect, Locator, Page } from "@playwright/test";

export class Base_Page {

    page: Page;
    signIn: Locator;
    signOut: Locator;
    login: Locator;
    registerLink: Locator;
    registerBtn: Locator;
    homeMenu: Locator;
    dropMenuNav: Locator;


    constructor(page: Page) {
        this.page = page;
        this.signIn = page.getByRole("link", { name: "Sign in" });
        this.login = page.getByRole("button", { name: "Login" });
        this.dropMenuNav = page.locator("//button[@data-test='nav-menu']/parent::li[@role='menuitem']");
        this.signOut = page.locator("//a[@data-test='nav-sign-out']/parent::li");
        this.registerLink = page.getByRole("link", { name: "Register your account" });
        this.registerBtn = page.getByRole("button", { name: "Register" });
        this.homeMenu = page.getByRole("menuitem", { name: "Home" });


    }

    async clickElement(element: Locator) {
        await element.click();
    }


    async toolshopSignUp() {
        await this.clickElement(this.signIn);
        await this.clickElement(this.registerLink);
    }

    async toolshopRegSubmit() {
        await this.clickElement(this.registerBtn);

    }
}
