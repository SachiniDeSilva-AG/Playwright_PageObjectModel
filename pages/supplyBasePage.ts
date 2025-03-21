import { Page, expect, Locator, selectors } from "@playwright/test"

export default class supplyBasePage {
    readonly supplyBaseSearch_text: Locator;
    readonly reset_button : Locator;
    readonly applyFilters : Locator;
    readonly parentEntity_field : Locator;
    readonly legalEntity_field : Locator;
    readonly supplyBaseName_filter: Locator;
    readonly supplyBaseID_filter: Locator;
    readonly ownershipOpen_button: Locator;
    readonly filterResults: Locator;
    readonly resetAlert_label : Locator;

    constructor(public page: Page) {
        this.supplyBaseSearch_text = page.locator('//*[@id="entitySection.filterSearch"]');
        this.reset_button = page.locator('//*[@id="page-id"]//button[@data-testid="form-button-destructive-Reset"]');
        this.applyFilters = page.locator('//button[@data-testid="form-button-primary-Apply filters"]');
        this.parentEntity_field = page.locator('//div[@id="entitySection.filterEntity"]');
        this.legalEntity_field = page.locator('//div[@name="entitySection.filterLegalEntity"]//div/input[@role="combobox"]');
        this.supplyBaseName_filter = page.locator('//div[@id="page-id"]//div[@role="cell"][@data-field="name"]/div[@title="Supply Base 14/03/25"]');
        this.supplyBaseID_filter = page.locator('//div[@role="cell"][@data-field="supplyBaseId"]/div[@title="SB25-015100"]');
        this.ownershipOpen_button = page.locator('//*[@id="entitySection-flex-container"]//div/button[@title="Open"]');
        this.filterResults = page.locator('//div[@role="cell"]//div[@title="Supply Base 28/02/25"]');
        this.resetAlert_label = page.locator('//div[@class="MuiAlert-message css-1xsto0d"][text()="Cleared Filters"]');

}

    async searchBySupplyBaseName (supplyBaseName){
        const supplyBaseSearch_txt = this.supplyBaseSearch_text
        await supplyBaseSearch_txt.fill(supplyBaseName);
        console.log("-------------Supply Base Name " + supplyBaseName + " added.-------------");
    }
    async verifySupplyBaseNameFilter(){
        const supplyBaseName_fltr = this.supplyBaseName_filter
        await expect(supplyBaseName_fltr).toBeVisible();
        console.log("-------------Filtered Supply Base Name displayed.-------------");
    }    
    async searchBySupplyBaseID (supplyBaseID){
        const supplyBaseSearch_txt = this.supplyBaseSearch_text
        await supplyBaseSearch_txt.fill(supplyBaseID);
        console.log("-------------Supply Base Id " + supplyBaseID + " added.-------------");
    }
    async verifySupplyBaseIdFilter(){
        const supplyBaseID_fltr = this.supplyBaseID_filter
        await expect(supplyBaseID_fltr).toBeVisible();
        console.log("-------------Filtered Supply Base ID displayed.-------------");
    }
    async resetTheFilter (){
        const reset_btn = this.reset_button
        await reset_btn.click();
        const resetAlert_lbl = this.resetAlert_label
        await expect(resetAlert_lbl).toBeVisible();
   }
    async searchByParentEntity(parentEntityName: string) {
        const parentEntity_srch = this.parentEntity_field
        await parentEntity_srch.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const parentEntityOption = this.page.locator(`li[role='option'] >> text=${parentEntityName}`);
        await parentEntityOption.click();
        console.log(`------------Parent Entity: ${parentEntityName} selected.------------`);
    }
    async searchByLegalEntity(legalEntity: string) {
        const legalEntity_fld = this.legalEntity_field
        await legalEntity_fld.click();
        await legalEntity_fld.fill(legalEntity);
        await this.page.click("//ul[@role='listbox']/li/div[contains(text(),'Sachini Go Live Pte Ltd')]");
        await legalEntity_fld.click();
        console.log(`------------Legal Entity: ${legalEntity} selected.------------`);
    }
    async applyFilter() {
        await this.applyFilters.click();
        const applyFilters_btn = this.applyFilters
        await applyFilters_btn.click();
    }
    async verifyFilteredBasedOnParentAndLegalEntities() {
        const filterRslts = this.filterResults
        await expect(filterRslts).toBeVisible();
        console.log("-------------Filtered Result displayed.-------------");
    }
}