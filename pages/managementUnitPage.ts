import { Page, expect, Locator, selectors } from "@playwright/test"

export default class managementUnitPage {
    readonly newManagementUnit_button: Locator;
    readonly createNewManagementUnit_title: Locator;
    readonly muParentEntity_field: Locator;
    readonly muOwnership_field: Locator;
    readonly muName_field: Locator;
    readonly muAddressStreet: Locator;
    readonly muAddressUnitNo: Locator;
    readonly muAddressState: Locator;
    readonly muAddressCity: Locator;
    readonly muAddressZip: Locator;
    readonly muFirstNext_button: Locator;
    readonly muCancel_button: Locator;
    readonly muLinkSiteBusinessOwn_button: Locator;
    readonly muLinkSupplyBase_button: Locator;
    readonly muLinkThirdPartySupplyBase_button: Locator;
    readonly muLinkSmallholderPlot_button: Locator;
    readonly muLinkThirdPartySmallholderPlot_button: Locator;
    readonly muBack_button: Locator;
    readonly muConfirm: Locator;
    readonly muSearchBar: Locator;
    readonly muParentEntity_filter: Locator;
    readonly muOwnership_filter: Locator;
    readonly muSuccessAlert: Locator;
    readonly reset_button: Locator;
    readonly resetAlert_label: Locator;
    readonly applyFilters_button: Locator;
    readonly muSearchBar_text : Locator;
    readonly muNameFilter_result : Locator;
    readonly muIdFilter_result : Locator;
    readonly muLinkSupplyBase_title : Locator;
    readonly muLinkSupplyBaseSearch_bar : Locator;
    readonly applyFilters_supplyBaseModal : Locator;
    readonly supplyBaseCheckbox : Locator;
    readonly confirm_linkSupplyBase : Locator;

    constructor(public page: Page) {
        this.newManagementUnit_button = page.locator('//button[text()="New Management Unit"]');
        this.createNewManagementUnit_title = page.locator('//h1[text()="Create New Management Unit"]');
        this.muParentEntity_field = page.locator('//div[@id="entityDetails.groupEntity"]');
        this.muOwnership_field = page.locator('//div[@id="entityDetails.legalEntity"]');
        this.muName_field = page.locator('//input[@id="managementUnitDetails.muName"]');
        this.muAddressStreet = page.locator('//input[@id="managementUnitDetails.address.street"]');
        this.muAddressUnitNo = page.locator('//input[@id="managementUnitDetails.address.unitNo"]');
        this.muAddressState = page.locator('//input[@id="managementUnitDetails.address.stateProvince"]');
        this.muAddressCity = page.locator('//input[@id="managementUnitDetails.address.city"]');
        this.muAddressZip = page.locator('//input[@id="managementUnitDetails.address.zip"]');
        this.muFirstNext_button = page.locator('//button[@data-testid="form-button-primary-Next"]');
        this.muCancel_button = page.locator('//button[@data-testid="form-button-left-Cancel"]');
        this.muLinkSiteBusinessOwn_button = page.locator('//button[@data-testid="section-link-site-action-btn"]');
        this.muLinkSupplyBase_button = page.locator('//button[@data-testid="section-link-supply-base-action-btn"]');
        this.muLinkThirdPartySupplyBase_button = page.locator('//button[@data-testid="section-link-tp-supply-base-action-btn"]');
        this.muLinkSmallholderPlot_button = page.locator('//button[@data-testid="section-link-smallholder-plot-action-btn"]');
        this.muLinkThirdPartySmallholderPlot_button = page.locator('//button[@data-testid="section-link-tp-smallholder-plot-action-btn"]');
        this.muBack_button = page.locator('//button[@data-testid="form-button-back"]');
        this.muConfirm = page.locator('//button[@data-testid="form-button-submit"]');
        this.muSearchBar = page.locator('//input[@id="filterSearch"]');
        this.muParentEntity_filter = page.locator('//div[@id="filterEntity"]');
        this.muOwnership_filter = page.locator('combobox-filterLegalEntity');
        this.muSuccessAlert = page.locator('//div[text()="New Management Unit created."]');
        this.reset_button = page.locator('//button[@data-testid="form-button-destructive-Reset"]');
        this.resetAlert_label = page.locator('//div[text()="Cleared Filters"]');
        this.applyFilters_button = page.locator('//button[@data-testid="form-button-primary-Apply filters"]');
        this.muSearchBar_text = page.locator('//div[@data-testid="form-input-filterSearch"]');
        this.muNameFilter_result = page.locator('//div[@id="page-id"]//div[@role="cell"][@data-field="name"]/div[@title="MU Automation"]');
        this.muIdFilter_result = page.locator('//div[@role="cell"][@data-field="managementUnitId"]/div[@title="MU25-014314"]');
        this.muLinkSupplyBase_title = page.locator('//h2[text()="Link Supply Base"]');
        this.muLinkSupplyBaseSearch_bar = page. locator('//input[@id="search"]');
        this.applyFilters_supplyBaseModal = page.locator('//button[@id=":rli:"]');
        this.supplyBaseCheckbox = page.locator('//input[@type="checkbox"]');
        this.confirm_linkSupplyBase = page.locator('//button[@id=":rln:"][@data-testid="confirmation-dialog-primary-button"]');

    }
    async clickOnNewManagementUnit() {
        const newManagementUnit_btn = this.newManagementUnit_button
        await newManagementUnit_btn.click().then();
        console.log(`-------------Create Management Units page is loaded.-----------`);
    }
    async selectParentEntity(parentEntityName) {
        const muParentEntity_fld = this.muParentEntity_field
        await muParentEntity_fld.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const parentEntityOption = this.page.locator(`li[role='option'] >> text=${parentEntityName}`);
        await parentEntityOption.click();
        console.log(`------------Parent Entity: ${parentEntityName} selected.------------`);
    }
    async selectLegalEntity(legalEntity: string) {
        const muOwnership_fld = this.muOwnership_field
        await muOwnership_fld.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const muLegalEntityOption = this.page.locator(`li[role='option'] >> text=${legalEntity}`);
        await muLegalEntityOption.click();
        console.log(`------------Legal Entity: ${legalEntity} selected.------------`);
    }
    async fillManagementUnitName(managementUnitName: string) {
        const muName_fld = this.muName_field
        await muName_fld.clear();

        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const nameWithDateTime = `${managementUnitName}_${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;

        await muName_fld.waitFor();
        await muName_fld.fill(nameWithDateTime);
        console.log(`Filled name: ${nameWithDateTime}`);
    }
    async fillManagementUnitAddress(street: string, unitno: string, state: string, city: string, zip: string) {
        const muAddressStreet_txt = this.muAddressStreet
        await muAddressStreet_txt.clear();
        await muAddressStreet_txt.fill(street);
        console.log(`------------Street name added: ${street}------------`);

        const muAddressUnitNo_txt = this.muAddressUnitNo
        await muAddressUnitNo_txt.clear();
        await muAddressUnitNo_txt.fill(unitno);
        console.log(`------------Unit Number added: ${unitno}------------`);

        const muAddressState_txt = this.muAddressState
        await muAddressState_txt.clear();
        await muAddressState_txt.fill(state);
        console.log(`------------State added: ${state}------------`);

        const muAddressCity_txt = this.muAddressCity
        await muAddressCity_txt.clear();
        await muAddressCity_txt.fill(city);
        console.log(`------------City added: ${city}------------`);

        const muAddressZip_txt = this.muAddressZip
        await muAddressZip_txt.clear();
        await muAddressZip_txt.fill(zip);
        console.log(`------------Zip code added: ${zip}------------`);
    }
    async clickFirstNext() {
        const muFirstNext_button_btn = this.muFirstNext_button
        await muFirstNext_button_btn.click();
        console.log(`------------Navigated to the second step.------------`);
    }
    async clickCancelFromFirstStep() {
        const muCancel_button_btn = this.muCancel_button
        await muCancel_button_btn.click();
        console.log(`------------Navigated to the Management unit page.------------`);
    }
    async clickBackFromSecondStep() {
        const muBack_btn = this.muBack_button
        await muBack_btn.click();
        console.log(`------------Navigated back to First step.------------`);
    }
    async clickConfirmForMUCreation() {
        const muConfirm_btn = this.muConfirm
        await muConfirm_btn.click();
        console.log(`------------Confirm the second step.------------`);
    }
    async successAlertDisplayed() {
        const muSuccessAlert = this.muSuccessAlert
        await muSuccessAlert.isVisible();
        console.log(`------------Management Unit creation message displayed.------------`);
    }
    async resetTheFilter() {
        const reset_btn = this.reset_button
        await reset_btn.click();
        const resetAlert_lbl = this.resetAlert_label
        await expect(resetAlert_lbl).toBeVisible();
    }
    async searchByParentEntity(parentEntityName: string) {
        const muParentEntity_fltr = this.muParentEntity_filter
        await muParentEntity_fltr.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const parentEntityOption = this.page.locator(`li[role='option'] >> text=${parentEntityName}`);
        await parentEntityOption.click();
        console.log(`------------Parent Entity: ${parentEntityName} selected.------------`);
    }
    async searchByLegalEntity(legalEntity: string) {
        const muOwnership_fltr = this.muOwnership_filter
        await muOwnership_fltr.click();
        await muOwnership_fltr.fill(legalEntity);
        await this.page.click("//ul[@role='listbox']/li/div[contains(text(),'Sachini Go Live Pte Ltd')]");
        await muOwnership_fltr.click();
        console.log(`------------Legal Entity: ${legalEntity} selected.------------`);
    }
    async applyFilter() {
        await this.applyFilters_button.click();
        const applyFilters_btn = this.applyFilters_button
        await applyFilters_btn.click();
        console.log(`------------Apply Filters button selected.------------`);
    }
    async searchByManagementUnitName (managementUnitName){
        const muSearchBar_txt = this.muSearchBar_text
        await muSearchBar_txt.fill(managementUnitName);
        console.log("-------------Supply Base Name " + managementUnitName + " added.-------------");
    }
    async verifyManagementUnitNameFilter(){
        const muNameFilter_rslt = this.muNameFilter_result
        await expect(muNameFilter_rslt).toBeVisible();
        console.log("-------------Filtered Management Unit Name displayed.-------------");
    } 
     async searchByManagementUnitID (managementUnitId){
        const muSearchBar_txt = this.muSearchBar_text
        await muSearchBar_txt.fill(managementUnitId);
        console.log("-------------Supply Base Name " + managementUnitId + " added.-------------");
    }
    async verifyManagementUnitIdFilter(){
        const muIdFilter_rslt = this.muIdFilter_result
        await expect(muIdFilter_rslt).toBeVisible();
        console.log("-------------Filtered Management Unit ID displayed.-------------");
    } 
    async clickLinkSupplyBase() {
        const muLinkSupplyBase_btn = this.muLinkSupplyBase_button
        await muLinkSupplyBase_btn.waitFor({ state: 'visible' });
        await muLinkSupplyBase_btn.click();
        console.log("---------Link SupplyBase popup displayed.---------");
    }
    async searchByMUnitIDForLinkingSupplyBase (supplyBaseSearch){
        const muLinkSupplyBaseSearch_txt = this.muLinkSupplyBaseSearch_bar
        await muLinkSupplyBaseSearch_txt.fill(supplyBaseSearch);
        console.log("-------------Supply Base Id " + supplyBaseSearch + " added.-------------");
    }
    async applyFilterFromLinkSupplyBase() {
        await this.applyFilters_supplyBaseModal.click();
        const applyFilters_supplyBaseModal = this.applyFilters_supplyBaseModal
        await applyFilters_supplyBaseModal.click();
        console.log(`------------Apply Filters button clicked.------------`);
    }
    async clickCheckbox() {
        const supplyBaseCheck = this.supplyBaseCheckbox
        await supplyBaseCheck.check();
        console.log(`------------Supply Base checkbox clicked.------------`);
    }
    async clickConfirmForLinkSupplyBase() {
        const confirm_linkSupplyBase_btn = this.confirm_linkSupplyBase
        await confirm_linkSupplyBase_btn.click();
        console.log(`------------Confirm to link the supply base.------------`);
    }
    async clearLinkSupplyBaseSearch() {
        const muLinkSupplyBaseSearch_txt = this.muLinkSupplyBaseSearch_bar
        await muLinkSupplyBaseSearch_txt.clear();
        console.log(`------------Clear the supply base search bar.------------`);
    }

}