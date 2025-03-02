import { expect, Page, Locator } from "@playwright/test";

export default class BasePage{

    page: Page;
    baseURL: string;

    constructor(page:Page, baseURL: string) {
        this.page = page;
        this.baseURL = baseURL;
    }

    async initialize() {
        await this.page.goto(this.baseURL);
        await this.page.evaluate (() => {
            document.documentElement.requestFullscreen();
        });
    }

}