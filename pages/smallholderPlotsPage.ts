import { Page, expect, Locator, selectors } from "@playwright/test"

export default class smallholderPlotsPage {
    readonly smallholderPlotSearch_text: Locator;
    readonly reset_button : Locator;
    readonly applyFilters : Locator;
    readonly shpParentEntity_field : Locator;
    readonly shpLegalEntity_field : Locator;
    readonly smallholderPlotName_filter: Locator;
    readonly smallholderPlotID_filter: Locator;
    readonly ownershipOpen_button: Locator;
    readonly filterResults: Locator;
    readonly resetAlert_label: Locator;

    constructor(public page: Page) {
        this.smallholderPlotSearch_text = page.locator('//input[@id="filterSearch"]');
        this.reset_button = page.locator('//button[@data-testid="form-button-destructive-Reset"]');
        this.applyFilters = page.locator('//button[@data-testid="form-button-primary-Apply filters"]');
        this.shpParentEntity_field = page.locator('//div[@id="filterEntity"]');
        this.shpLegalEntity_field = page.locator('//div[@name="filterLegalEntity"]//input[@id="combobox-filterLegalEntity"]');
        this.smallholderPlotName_filter = page.locator('//div[@id="page-id"]//div[@role="cell"][@data-field="smallholderName"]/p[text()="Small Holder 14/03/25"]');
        this.smallholderPlotID_filter = page.locator('//div[@id="page-id"]//div[@role="cell"][@data-field="smallholderId"]/p[text()="SH25-19481955"]');
        this.ownershipOpen_button = page.locator('//*[@id="filterSection-flex-container"]//button[@title="Open"]');
        this.filterResults = page.locator('//div[@role="row"]//p[text()="Small Holder 14/03/25"]');
        this.resetAlert_label = page.locator('//div[@class="MuiAlert-message css-1xsto0d"][text()="Cleared Filters"]');


    }
}