import { Page, expect, Locator, selectors } from "@playwright/test"

export default class supplyBasesPage {
    readonly supplyBaseSearch_text: Locator;
    readonly reset_btn : Locator;
    readonly applyFilters : Locator;
    readonly parentEntity_drp : Locator;

    constructor(public page: Page) {
        this.supplyBaseSearch_text = page.locator('//*[@id="entitySection.filterSearch"]');
        this.reset_btn = page.locator('//*[@id="page-id"]//button[@data-testid="form-button-destructive-Reset"]');
        this.applyFilters = page.locator('//*[@data-testid="form-button-primary-Apply filters"]');
        this.parentEntity_drp = page.locator('//*[@id="entitySection.filterEntity"]');
}
}