import { Page, expect, Locator, selectors } from "@playwright/test"

export default class smallholdersPage {
    readonly smallholderSearch_text: Locator;
    readonly reset_button : Locator;
    readonly applyFilters : Locator;
    readonly shParentEntity_field : Locator;
    readonly shLegalEntity_field : Locator;
    readonly smallholderName_filter: Locator;
    readonly smallholderID_filter: Locator;
    readonly ownershipOpen_button: Locator;
    readonly filterResults: Locator;
    readonly resetAlert_label: Locator;
    readonly newSmallholder_button: Locator;
    readonly createNewSmallholder_title : Locator;
    readonly smallholderParentEntity_field: Locator;
    readonly smallholderLegalEntity_field : Locator;
    readonly smallholderFirstNext_button : Locator;
    readonly smallholderCancel_button : Locator;
    readonly smallholderName : Locator;
    readonly smallholderEmail : Locator;
    readonly smallholderIdNumber : Locator;
    readonly smallholderCountryPhoneNumber : Locator;
    readonly smallholderPhoneNumber: Locator;
    readonly smallholderCountryOfRegistration : Locator;
    readonly smallholderAddressStreet : Locator;
    readonly smallholderAddressUnitNo : Locator;
    readonly smallholderAddressState : Locator;
    readonly smallholderAddressCity : Locator;
    readonly smallholderAddressZip : Locator;
    readonly smallholderSecondNext_button : Locator;
    readonly smallholderBack_button : Locator;
    readonly successAlert : Locator;

    constructor(public page: Page) {
        this.smallholderSearch_text = page.locator('//*[@id="filterSearch"]');
        this.reset_button = page.locator('//button[@data-testid="form-button-destructive-Reset"]');
        this.applyFilters = page.locator('//*[@data-testid="form-button-primary-Apply filters"]');
        this.shParentEntity_field = page.locator('//*[@id="filterEntity"]');
        this.shLegalEntity_field = page.locator('//div[@name="filterLegalEntity"]//input[@id="combobox-filterLegalEntity"]');
        this.smallholderName_filter = page.locator('//div[@id="page-id"]//div[@role="cell"][@data-field="smallholderName"]/p[text()="Small Holder 14/03/25"]');
        this.smallholderID_filter = page.locator('//div[@id="page-id"]//div[@role="cell"][@data-field="smallholderId"]/p[text()="SH25-19481955"]');
        this.ownershipOpen_button = page.locator('//*[@id="filterSection-flex-container"]//button[@title="Open"]');
        this.filterResults = page.locator('//div[@role="row"]//p[text()="Small Holder 14/03/25"]');
        this.resetAlert_label = page.locator('//div[@class="MuiAlert-message css-1xsto0d"][text()="Cleared Filters"]');
        this.newSmallholder_button = page.locator('//div/button[text()="New Smallholder"]');
        this.createNewSmallholder_title = page.locator('//h1[text()="Create New Smallholder"]');
        this.smallholderParentEntity_field = page.locator('//*[@id="groupEntity"]');
        this.smallholderLegalEntity_field = page.locator('//*[@id="legalEntity"]');
        this.smallholderFirstNext_button = page.locator('//*[@data-testid="form-button-primary-Next"]');
        this.smallholderCancel_button = page.locator('//div/button[@data-testid="form-button-left-Cancel"]');
        this.smallholderName = page.locator('//input[@id="smallholderName"]');
        this.smallholderEmail = page.locator('//input[@id="emailAddress"]');
        this.smallholderIdNumber = page.locator('//input[@id="idNumber"]');
        this.smallholderCountryPhoneNumber = page.getByLabel('Phone number country'); 
        this.smallholderPhoneNumber = page.locator('//input[@name="telephoneNumber"]');
        this.smallholderAddressStreet = page.locator('//input[@id="address.street"]');
        this.smallholderAddressUnitNo = page.locator('//input[@id="address.unitNo"]');
        this.smallholderAddressState = page.locator('//input[@id="address.stateProvince"]');
        this.smallholderAddressCity = page.locator('//input[@id="address.city"]');
        this.smallholderAddressZip = page.locator('//input[@id="address.zip"]');
        this.smallholderSecondNext_button = page.locator('//button[@data-testid="form-button-primary-Next"]');
        this.successAlert = page.locator('//div[@class="MuiAlert-message css-1xsto0d"][text()]');
        this.smallholderCancel_button = page.locator('//button[@data-testid="form-button-left-Cancel"]');
        this.smallholderBack_button = page.locator('//button[@data-testid="form-button-left-Back"]');
}

async searchBySmallHolderName (smallHolderName){
    const smallholderSearch_txt = this.smallholderSearch_text
    await smallholderSearch_txt.fill(smallHolderName);
    console.log("-------------Small holder Name " + smallHolderName + " added.-------------");
}
async verifyFilterBySmallholderName() {
    const smallholderName_fltr = this.smallholderName_filter
    await expect(smallholderName_fltr).toBeVisible();
    console.log("-------------Filtered by Small holder name is displayed.-------------");
}   
async searchBySmallHolderID (smallholderId){
    const smallholderSearch_txt = this.smallholderSearch_text
    await smallholderSearch_txt.fill(smallholderId);
    console.log("-------------Small holder Id " + smallholderId + " added.-------------");
}
async verifyFilterBySmallholderId() {
    const smallholderID_fltr = this.smallholderID_filter
    await expect(smallholderID_fltr).toBeVisible();
    console.log("-------------Filtered by Small holder ID is displayed.-------------");
}
async resetTheFilter (){
    const reset_btn = this.reset_button
    await reset_btn.click();
    const resetAlert_lbl = this.resetAlert_label
    await expect(resetAlert_lbl).toBeVisible();
}
async searchByParentEntity(parentEntityName: string) {
    const shParentEntity_fld = this.shParentEntity_field
    await shParentEntity_fld.click();
    await this.page.waitForSelector("//ul[@role='listbox']");
    const parentEntityOption = this.page.locator(`li[role='option'] >> text=${parentEntityName}`);
    await parentEntityOption.click();
    console.log(`------------Parent Entity: ${parentEntityName} selected.------------`);
}
async searchByLegalEntity(legalEntity: string) {
    const shlegalEntity_fld = this.shLegalEntity_field
    await shlegalEntity_fld.click();
    await shlegalEntity_fld.fill(legalEntity);
    await this.page.click("//ul[@role='listbox']/li/div[contains(text(),'Sachini group 1')]");
    await shlegalEntity_fld.click();
    console.log(`------------Legal Entity: ${legalEntity} selected.------------`);
}
async applyFilter() {
    await this.applyFilters.click();
    const applyFilters_btn = this.applyFilters
    await applyFilters_btn.click();
}
async filteredResults() {
    const filterRslts = this.filterResults
    await expect(filterRslts).toBeVisible();
    console.log("-------------Filtered Result displayed.-------------");
}
async addNewSmallholder() {
    const newSmallholder_btn = this.newSmallholder_button
    await newSmallholder_btn.click();
    await expect(this.createNewSmallholder_title).toBeVisible();
    console.log("------------Create New Smallholder page loaded.------------");
}
async selectParentEntity(parentEntityName){
    const smallholderParentEntity_fld = this.smallholderParentEntity_field
    await smallholderParentEntity_fld.click();
    await this.page.waitForSelector("//ul[@role='listbox']");
    const parentEntityOption = this.page.locator(`li[role='option'] >> text=${parentEntityName}`);
    await parentEntityOption.click();
    console.log(`------------Parent Entity: ${parentEntityName} selected.------------`);
}
async selectLegalEntity(legalEntity: string) {
    const smallholderLegalEntity_fld = this.smallholderLegalEntity_field
    await smallholderLegalEntity_fld.click();
    await this.page.waitForSelector("//ul[@role='listbox']");
    const smallholderLegalEntityOption = this.page.locator(`li[role='option'] >> text=${legalEntity}`);
    await smallholderLegalEntityOption.click();
    console.log(`------------Legal Entity: ${legalEntity} selected.------------`);
}
async clickFirstNext() {
    const smallholderFirstNext_btn = this.smallholderFirstNext_button
    await smallholderFirstNext_btn.click();
    console.log(`------------Navigated to the second step.------------`);
}
async clickCancelFromFirstStep() {
    const smallholderCancel_btn = this.smallholderCancel_button
    await smallholderCancel_btn.click();
    console.log(`------------Navigated to the Smallholers page.------------`);
}
async fillSmallholderName(smallholderName : string) {
    const smallholderName_txt = this.smallholderName
    await smallholderName_txt.clear();

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const nameWithDateTime = `${smallholderName}_${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;

    await smallholderName_txt.waitFor();
    await smallholderName_txt.fill(nameWithDateTime);
    console.log(`Filled name: ${nameWithDateTime}`);
}
async fillEmailAddress(smallholderEmail){
    const smallholderEmail_txt = this.smallholderEmail
    await smallholderEmail_txt.clear();
    await smallholderEmail_txt.fill(smallholderEmail);
    console.log(`------------Email address added.------------`);
}
async fillIDNumber(smallholderID){
    const smallholderIdNumber_txt = this.smallholderIdNumber
    await smallholderIdNumber_txt.clear();
    await smallholderIdNumber_txt.fill(smallholderID);
    console.log(`------------Smallholder ID added.------------`);
}
async selectCountryOfRegistration(country: string) {
    const smallholderCountryOfRegistration_drpdwn = this.smallholderCountryOfRegistration
    await smallholderCountryOfRegistration_drpdwn.click();
    await this.page.waitForSelector("//ul[@role='listbox']");
    const countryOption = this.page.locator(`li[role='option'] >> text=${country}`);
    await countryOption.click();
    console.log(`------------Selected registration country: ${country}------------`);
}
async selectTpNumber(country, phoneNumber) {
    const smallholderTpNumber_drp = this.smallholderCountryPhoneNumber
    await smallholderTpNumber_drp.click();
    await smallholderTpNumber_drp.selectOption(country);
    console.log(`------------Country selected: ${country}------------`);

    const smallholderPhoneNumber_txt = this.smallholderPhoneNumber
    await smallholderPhoneNumber_txt.clear();
    await smallholderPhoneNumber_txt.fill(phoneNumber);
    console.log(`------------Telephone Number added: ${phoneNumber}------------`);
}
async fillSmallholderAddress(street: string, unitno: string, state: string, city: string, zip: string) {
    const streetAddress_txt = this.smallholderAddressStreet
    await streetAddress_txt.clear();
    await streetAddress_txt.fill(street);
    console.log(`------------Street name added: ${street}------------`);

    const unitNoAddress_txt = this.smallholderAddressUnitNo
    await unitNoAddress_txt.clear();
    await unitNoAddress_txt.fill(unitno);
    console.log(`------------Unit Number added: ${unitno}------------`);

    const stateAddress_txt = this.smallholderAddressState
    await stateAddress_txt.clear();
    await stateAddress_txt.fill(state);
    console.log(`------------State added: ${state}------------`);

    const cityAddress_txt = this.smallholderAddressCity
    await cityAddress_txt.clear();
    await cityAddress_txt.fill(city);
    console.log(`------------City added: ${city}------------`);

    const zipAddress_txt = this.smallholderAddressZip
    await zipAddress_txt.clear();
    await zipAddress_txt.fill(zip);
    console.log(`------------Zip code added: ${zip}------------`);
}
async clickSecondNext(){
    const smallholderSecondNext_btn = this.smallholderSecondNext_button
    await smallholderSecondNext_btn.click();
    console.log("------------New Smallholder created.------------");
}
async verifyCreationOfNewSmallholder(){
    const successAlert_txt = this.successAlert
    await successAlert_txt.isVisible();
    console.log("------------New Smallholder creation alert displayed.------------");
}
async clickBackFromSecondStep (){
    const smallholderBack_btn = this.smallholderBack_button
    await smallholderBack_btn.click();
    console.log("------------Navigated back to First step.------------");
}
}