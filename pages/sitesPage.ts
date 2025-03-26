import { Page, expect, Locator, selectors } from "@playwright/test"

export default class SitesPage {

    readonly assetExpanded_button: Locator;
    readonly newSite_button: Locator;
    readonly createNewSite_text: Locator;
    readonly parentEntity_dropdown: Locator;
    readonly parentEntity_list: Locator;
    readonly legalEntity_dropdown: Locator;
    readonly sitesNext: Locator;
    readonly siteSummary_text: Locator;
    readonly siteName_text: Locator;
    readonly country_dropdown: Locator;
    readonly openCountry_list: Locator;
    readonly streetAddress_text: Locator;
    readonly unitNoAddress_text: Locator;
    readonly stateAddress_text: Locator;
    readonly cityAddress_text: Locator;
    readonly zipAddress_text: Locator;
    readonly association_dropdown: Locator;
    readonly openAssociation_list: Locator;
    readonly addSiteBusiness_button: Locator;
    readonly siteBusinessModal_title: Locator;
    readonly siteBusiness_dropdown: Locator;
    readonly latitude_text: Locator;
    readonly longitude_text: Locator;
    readonly millCapacity_text: Locator;
    readonly add_button: Locator;
    readonly addedBusiness: Locator;
    readonly deleteBusiness_button: Locator;
    readonly addnewSiteBusiness_button: Locator;
    readonly cancel_button: Locator;
    readonly back_button: Locator;
    readonly backFromThirdStep: Locator;
    readonly confirm_button: Locator;
    readonly feedbackMessage: Locator;
    readonly sitesSearchBar: Locator;
    readonly applyFilters: Locator;
    readonly siteResult: Locator;
    readonly reset_btn: Locator;
    readonly siteHeader: Locator;
    readonly saveChanges_button: Locator;
    readonly editSiteSummary: Locator;
    readonly editCountry: Locator;
    readonly editStreetAddress_text: Locator;
    readonly editUnitNoAddress_text: Locator;
    readonly editStateAddress_text: Locator;
    readonly editCityAddress_text: Locator;
    readonly editZipAddress_text: Locator;
    readonly siteBusinessTab: Locator;
    readonly editSiteBusiness_button: Locator;
    readonly parentEntity_search: Locator;
    readonly legalEntity_search: Locator;
    readonly filterResults: Locator;
    readonly expandToggle: Locator;
    readonly expandedBusinessTypes: Locator;
    readonly expandedCoordinates: Locator;
    readonly firstCellValue  : Locator;
    readonly ownershipOpen_button : Locator;

    constructor(public page: Page) {

        this.assetExpanded_button = page.locator('//*[@id="side-nav-layout"]//div[@class="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded css-4gz52r"][@aria-expanded="true"]');
        this.newSite_button = page.locator('//button[@data-testid="add-new-site-btn"]');
        this.createNewSite_text = page.locator('//div/h1[text()="Create New Site"]');
        this.parentEntity_dropdown = page.locator('//div[@id="parentEntity"]');
        this.legalEntity_dropdown = page.locator('//div[@id="legalEntity"]');
        this.sitesNext = page.locator('//button[@data-testid="form-button-primary-Next"]');
        this.siteSummary_text = page.locator('//input[@id="siteSummary"]');
        this.siteName_text = page.locator('//input[@id="siteName"]');
        this.country_dropdown = page.locator('//div[@id="countryRegistration"]');
        this.streetAddress_text = page.locator('//input[@id="siteAddress"][@placeholder="Street"]');
        this.unitNoAddress_text = page.locator('//input[@id="unitNo"][@placeholder="Unit No"]');
        this.stateAddress_text = page.locator('//input[@id="stateProvince"][@placeholder="State/Province"]');
        this.cityAddress_text = page.locator('//input[@id="city"][@placeholder="City"]');
        this.zipAddress_text = page.locator('//input[@id="zip"][@placeholder="Zip"]');
        this.association_dropdown = page.locator('//div[@id="association"]');
        this.addSiteBusiness_button = page.locator('//div/button[@data-testid="add-new-business-row-card-stack-btn"]');
        this.siteBusinessModal_title = page.locator('//h4[text()="New Site Business"]');
        this.siteBusiness_dropdown = page.locator('//div[@id="businessType"]');
        this.latitude_text = page.locator('//input[@id="latitude"]');
        this.longitude_text = page.locator('//input[@id="longitude"]');
        this.millCapacity_text = page.locator('//input[@id="millCapacity"]');
        this.add_button = page.locator('//button[@data-testid="form-button-primary-Add"]');
        this.addedBusiness = page.locator('//div[@id="page-id"]//p[@data-testid="business-type"][text()]');
        this.deleteBusiness_button = page.locator('//button[@data-testid="delete-icon-0"]');
        this.addnewSiteBusiness_button = page.locator('//button[@data-testid="add-new-business-row-card-stack-btn"]');
        this.cancel_button = page.locator('//button[@data-testid="form-button-left-Cancel"]');
        this.back_button = page.locator('//button[@data-testid="form-button-left-Back"]');
        this.backFromThirdStep = page.locator('//button[@type="button"][text()="Back"]');
        this.confirm_button = page.locator('//button[@type="button"][text()="Confirm"]');
        this.feedbackMessage = page.locator('//div[@data-testid="feedback-message"]//following-sibling::div[text()="New Site created."]');
        this.sitesSearchBar = page.locator('//input[@id="filterSearch"]');
        this.applyFilters = page.locator('//button[@data-testid="form-button-primary-Apply filters"]');
        this.siteResult = page.locator('//div[@id="page-id"]//div[@role="cell"][@data-field="siteId"]/div[@title="S25-022101"]');
        this.reset_btn = page.getByTestId('form-button-destructive-Reset');
        this.siteHeader = page.locator('//*[@id="page-id"]//h1[text()]');
        this.saveChanges_button = page.locator('//button[@data-testid="form-button-primary-Save changes"]');
        this.editSiteSummary = page.locator('//div[@data-testid="form-text-area-siteSummary"]/textarea[@id="siteSummary"]');
        this.editCountry = page.locator('//div[@id="countryOfRegistration"]');
        this.editStreetAddress_text = page.locator('//input[@id="address.street"][@placeholder="Street"]');
        this.editUnitNoAddress_text = page.locator('//input[@id="address.unitNo"][@placeholder="Unit No"]');
        this.editStateAddress_text = page.locator('//input[@id="address.stateProvince"][@placeholder="State/Province"]');
        this.editCityAddress_text = page.locator('//input[@id="address.city"][@placeholder="City"]');
        this.editZipAddress_text = page.locator('//input[@id="address.zip"][@placeholder="Zip"]');
        this.siteBusinessTab = page.locator('//button[@data-testid="tabs-businessTypes"]');
        this.editSiteBusiness_button = page.locator('//button[@data-testid="edit-icon-0"]');
        this.parentEntity_search = page.locator('//*[@id="page-id"]//div[@data-testid="filterSection"]//div[@data-testid="filterEntity-container"]');
        this.legalEntity_search = page.locator('//*[@id="page-id"]//div[@data-testid="filterSection"]//div[@data-testid="combobox-filterLegalEntity"]//input');
        this.filterResults = page.locator('//div[@role="rowgroup"]//div[@title="Test Site"]');
        this.expandToggle = page.locator('//*[@id="page-id"]//div[@data-field="__detail_panel_toggle__"]/button');
        this.expandedBusinessTypes = page.locator('//div[@id="page-id"]//h6[text()="Business Types"]');
        this.expandedCoordinates = page.locator('//div[@id="page-id"]//h6[text()="Coordinates (Lat, Long)"]');
        this.firstCellValue = page.locator('//table/tbody/tr[1]/td[text()="MILL"]');  //await page.locator('table tbody tr:nth-child(2) td:nth-child(3)').textContent();
        this.ownershipOpen_button = page.locator('//*[@id="filterSection-flex-container"]//div/button[@title="Open"]');
    }

    async clickOnNewSite() {
        const newSite_btn = this.newSite_button
        await newSite_btn.click().then();
        console.log(`-------------Create New Site page is loaded.-----------`);
    }
    async selectParentEntity(parentEntityName: string) {
        const parentEntity_drpdwn = this.parentEntity_dropdown
        await parentEntity_drpdwn.click();
        await this.page.waitForSelector("//ul[@role='listbox']");

        const parentEntityOption = this.page.locator(`li[role='option'] >> text=${parentEntityName}`);
        await parentEntityOption.click();
        console.log(`------------Legal Entity Selected:${parentEntityName}-------------`);
    }
    async selectOwnership(ownership: string) {
        const ownership_drpdwn = this.legalEntity_dropdown
        await ownership_drpdwn.click();
        await this.page.waitForSelector("//ul[@role='listbox']");

        const ownershipOption = this.page.locator(`li[role='option'] >> text=${ownership}`);
        await ownershipOption.click();
        console.log(`------------Legal Entity Selected:${ownership}-------------`);
    }
    async navigatesToNextPage() {
        const sitesNext_btn = this.sitesNext
        await sitesNext_btn.click();
    }

    async fillSiteSummary(summary: string) {
        const siteName_txt = this.siteSummary_text
        await siteName_txt.clear();
        await siteName_txt.fill(summary);
    }

    async fillSiteName(name: string) {
        const siteName_txt = this.siteName_text
        await siteName_txt.clear();
        await siteName_txt.fill(name);
    }

    async selectCountryOfRegistration(country: string) {
        const country_drpdwn = this.country_dropdown
        await country_drpdwn.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const countryOption = this.page.locator(`li[role='option'] >> text=${country}`);
        await countryOption.click();
        console.log(`------------Selected registration country: ${country}------------`);
    }
    async fillSiteAddress(street: string, unitno: string, state: string, city: string, zip: string) {
        const streetAddress_txt = this.streetAddress_text
        await streetAddress_txt.clear();
        await streetAddress_txt.fill(street);

        const unitNoAddress_txt = this.unitNoAddress_text
        await unitNoAddress_txt.clear();
        await unitNoAddress_txt.fill(unitno);

        const stateAddress_txt = this.stateAddress_text
        await stateAddress_txt.clear();
        await stateAddress_txt.fill(state);

        const cityAddress_txt = this.cityAddress_text
        await cityAddress_txt.clear();
        await cityAddress_txt.fill(city);

        const zipAddress_txt = this.zipAddress_text
        await zipAddress_txt.clear();
        await zipAddress_txt.fill(zip);
    }
    async selectAssociation(association: string) {
        const association_drpdwn = this.association_dropdown
        await association_drpdwn.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const associationOption = this.page.locator(`li[role='option'] >> text=${association}`);
        await associationOption.click();
        console.log(`------------Selected association: ${association}------------`);
    }

    async addNewSiteBusiness() {
        const addSiteBusiness_btn = this.addSiteBusiness_button
        await addSiteBusiness_btn.click();
        await expect(this.siteBusinessModal_title).toBeVisible();
        console.log("------------New Site Business modal loaded.------------");
    }
    async selectSiteBusiness(business: string) {
        const siteBusiness_drpdwn = this.siteBusiness_dropdown
        await siteBusiness_drpdwn.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const siteBusinessOption = this.page.locator(`li[role='option'] >> text=${business}`);
        await siteBusinessOption.click();
        console.log(`------------Site Business: ${business} selected.------------`);
    }
    async fillLatitude(latitude: string) {
        const latitude_txt = this.latitude_text
        await latitude_txt.clear();
        await latitude_txt.fill(latitude);
    }
    async fillLongitude(longitude: string) {
        const longitude_txt = this.longitude_text
        await longitude_txt.clear();
        await longitude_txt.fill(longitude);
    }
    async fillMillCapacity(millCapacity: string) {
        const longitude_txt = this.millCapacity_text
        await longitude_txt.clear();
        await longitude_txt.fill(millCapacity);
    }
    async siteBusinessAdd() {
        const add_btn = this.add_button
        await add_btn.click();
    }
    async verifyTheAddedBusiness() {
        const addedBusiness_box = this.addedBusiness
        await expect(addedBusiness_box).toBeVisible();
    }
    async deleteTheAddedBusiness() {
        const deleteBusiness_btn = this.deleteBusiness_button
        await deleteBusiness_btn.click();
    }
    async addNewSiteBusinessForExistingBusiness() {
        const addnewSiteBusiness_btn = this.addnewSiteBusiness_button
        await addnewSiteBusiness_btn.click();
    }

    async clickCancelAndNavigateToThePreviousPage() {
        const cancel_btn = this.cancel_button
        await cancel_btn.click();
        console.log('------------Navigated to the Sites page.------------');
    }

    async clickBackAndNavigateToThePreviousPage() {
        const back_btn = this.back_button
        await back_btn.click();
        console.log('------------Navigated to the previous page.------------');
    }

    async clickBackFromThirdStep() {
        const backFromThirdStep_btn = this.backFromThirdStep
        await backFromThirdStep_btn.click();
        console.log('------------Navigated to the previous page.------------');
    }

    async clickConfirmForSiteCreation() {
        const confirm_btn = this.confirm_button
        await confirm_btn.click();

        const feedbackMsg = this.feedbackMessage
        await feedbackMsg.isVisible();
        console.log('------------Site creation message displayed.------------');
    }

    async searchBySiteID(siteId: string) {
        const sitesSearchBar_txt = this.sitesSearchBar
        await sitesSearchBar_txt.fill(siteId);
        console.log("-------------Site ID " + siteId + " added.-------------");
    }
    async verifySiteFilter (){
        const siteResult_lst = this.siteResult
        await expect(siteResult_lst).toBeVisible();
        console.log("-------------Filtered Site Id displayed.-------------");
    }
    async clickOnFilteredResult() {
        const siteResult_lst = this.siteResult
        await siteResult_lst.click();
        const siteHeader_lbl = this.siteHeader
        await expect(siteHeader_lbl).toBeVisible();
    }
    async updateSiteName(updateSiteName) {
        const siteNameUpdate = this.siteName_text
        await siteNameUpdate.clear();
        await siteNameUpdate.fill(updateSiteName);
    }
    async updateSiteSummary(updateSiteSummary) {
        const editSiteSummary_txt = this.editSiteSummary
        await editSiteSummary_txt.clear();
        await editSiteSummary_txt.fill(updateSiteSummary);
    }
    async updateCountryOfRegistration(updateCountry: string) {
        const editCountry_drp = this.editCountry
        await editCountry_drp.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const countryOption = this.page.locator(`li[role='option'] >> text=${updateCountry}`);
        await countryOption.click();
        console.log(`------------Updated registration country: ${updateCountry}------------`);
    }
    async updateSiteAddress(updateStreet: string, updateunitno: string, updatestate: string, updatecity: string, updatezip: string) {
        const updateStreetAddress_txt = this.editStreetAddress_text
        await updateStreetAddress_txt.clear();
        await updateStreetAddress_txt.fill(updateStreet);

        const updateUnitNoAddress_txt = this.editUnitNoAddress_text
        await updateUnitNoAddress_txt.clear();
        await updateUnitNoAddress_txt.fill(updateunitno);

        const updateStateAddress_txt = this.editStateAddress_text
        await updateStateAddress_txt.clear();
        await updateStateAddress_txt.fill(updatestate);

        const updateCityAddress_txt = this.editCityAddress_text
        await updateCityAddress_txt.clear();
        await updateCityAddress_txt.fill(updatecity);

        const updateZipAddress_txt = this.editZipAddress_text
        await updateZipAddress_txt.clear();
        await updateZipAddress_txt.fill(updatezip);
    }
    async updateAssociation(updateAssociation: string) {
        const updateAssociation_drpdwn = this.association_dropdown
        await updateAssociation_drpdwn.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const associationOption = this.page.locator(`li[role='option'] >> text=${updateAssociation}`);
        await associationOption.click();
        console.log(`------------Selected association: ${updateAssociation}------------`);
    }
    async saveUpdatedChanges() {
        const siteSaveChanges = this.saveChanges_button
        await siteSaveChanges.click();
        console.log('------------Clicked on Save button.------------');
    }
    async verifySavedAlert(){
        const feedbackMsg = this.feedbackMessage
        await feedbackMsg.isVisible();
        console.log('------------New changes saved message displayed.------------');
    }

    async navigationForSiteBusinessTab_UnderSiteDetails() {
        const siteBusinessTab_btn = this.siteBusinessTab
        await siteBusinessTab_btn.click();
        console.log("-------------Navigated to Site Business tab.-----------");
    }

    async editSiteBusinessDetails() {
        const editSiteBusiness_btn = this.editSiteBusiness_button
        await editSiteBusiness_btn.click();
        console.log("-------------Site Business Modal Loaded.-----------");
    }
    async updateLatitude(updateLatitude: string) {
        const latitude_txt = this.latitude_text
        await latitude_txt.clear();
        await latitude_txt.fill(updateLatitude);
    }
    async updateLongitude(updateLongitude: string) {
        const longitude_txt = this.longitude_text
        await longitude_txt.clear();
        await longitude_txt.fill(updateLongitude);
    }
    async updateMillCapacity(updateMillCapacity: string) {
        const longitude_txt = this.millCapacity_text
        await longitude_txt.clear();
        await longitude_txt.fill(updateMillCapacity);
    }
    async searchBySiteName(siteNameSearch: string) {
        const sitesSearchBar_txt = this.sitesSearchBar
        await sitesSearchBar_txt.fill(siteNameSearch);
        console.log("-------------Site Name " + siteNameSearch + " added.-------------");
    }
    async verifyTheFilteredSiteName() {
        const siteResult_lst = this.siteResult
        await expect(siteResult_lst).toBeVisible();
        console.log("-------------Filtered Site Name displayed.-------------");
    }
    async searchByParentEntity(parentEntityName: string) {
        const parentEntity_srch = this.parentEntity_search
        await parentEntity_srch.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const parentEntityOption = this.page.locator(`li[role='option'] >> text=${parentEntityName}`);
        await parentEntityOption.click();
        console.log(`------------Parent Entity: ${parentEntityName} selected.------------`);
    }
    async searchByLegalEntity(legalEntityName: string) {
        const legalEntity_srch = this.legalEntity_search
        await legalEntity_srch.click();
        await legalEntity_srch.fill(legalEntityName);
        await this.page.click("//ul[@role='listbox']/li/div[contains(text(),'Sachini group 1')]");
        await legalEntity_srch.click();
        console.log(`------------Legal Entity: ${legalEntityName} selected.------------`);  
    }
    async applyFilter() {
        await this.applyFilters.click();
        const applyFilters_btn = this.applyFilters
        await applyFilters_btn.click();
    }
    async verifyFilterByLegalAndParentEntities() {
        const filterRslts = this.filterResults
        await expect(filterRslts).toBeVisible();
        console.log("-------------Filtered Result displayed.-------------");
    }
    async expandTheToggleOfSiteName() {
        const expandToggle_btn = this.expandToggle
        await expandToggle_btn.click();
        const expandedBusinessTypes_tb = this.expandedBusinessTypes
        await expect(expandedBusinessTypes_tb).toBeVisible({ timeout: 5000 });
        const expandedCoordinates_tb = this.expandedCoordinates
        await expect(expandedCoordinates_tb).toBeVisible({ timeout: 5000 });
        console.log("-------------Site details expanded.-------------");
    }
    async verifyTableValues(expectedTable: string[][]): Promise<void> {
        const rows = this.page.locator("//div//table/tbody/tr");
        const rowCount = await rows.count();
    
        for (let i = 0; i < rowCount; i++) {
            const columns = rows.nth(i).locator("td");
            const colCount = await columns.count();
    
            for (let j = 0; j < colCount; j++) {
                const cellText = (await columns.nth(j).textContent())?.trim();
                expect(cellText).toBe(expectedTable[i][j]);
                console.log("-------------Business Types and Coordinates are displying correctly.-------------");
            }
        }
    }
}