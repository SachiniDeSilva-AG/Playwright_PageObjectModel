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
    readonly country_dropdown : Locator;
    readonly openCountry_list: Locator;
    readonly streetAddress_text : Locator;
    readonly unitNoAddress_text : Locator;
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



    }

    async clickOnNewSite(){
        const newSite_btn = this.newSite_button
        await newSite_btn.click().then();
        console.log(`-------------Create New Site page is loaded.-----------`);
    }
    async selectParentEntityAndOwnership(parentEntityName: string, ownership: string) {
        const parentEntity_drpdwn = this.parentEntity_dropdown
        await parentEntity_drpdwn.click();
        await this.page.waitForSelector("//ul[@role='listbox']");

        const parentEntityOption = this.page.locator(`li[role='option'] >> text=${parentEntityName}`);
        await parentEntityOption.click();
        console.log(`------------Legal Entity Selected:${parentEntityName}-------------`);

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

    async fillSiteSummary(summary: string){
        const siteName_txt = this.siteName_text
        await siteName_txt.clear();
        await siteName_txt.fill(summary);
    }

    async fillSiteName(name: string){
        const siteName_txt = this.siteName_text
        await siteName_txt.clear();
        await siteName_txt.fill(name);
    }

    async selectCountryOfRegistration(country: string){
        const country_drpdwn = this.country_dropdown
        await country_drpdwn.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const countryOption = this.page.locator(`li[role='option'] >> text=${country}`);
        await countryOption.click();
        console.log(`------------Selected registration country: ${country}------------`);
    }
    async fillSiteAddress(street: string, unitno: string, state:string, city:string, zip:string){
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

        const zipAddress_txt = this.cityAddress_text
        await zipAddress_txt.clear();
        await zipAddress_txt.fill(zip);
    }
    async selectAssociation(association: string){
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
    async fillLatitude(latitude: string){
        const latitude_txt = this.latitude_text
        await latitude_txt.clear();
        await latitude_txt.fill(latitude);
    }
    async fillLongitude(longitude: string){
        const longitude_txt = this.longitude_text
        await longitude_txt.clear();
        await longitude_txt.fill(longitude);
    }
    async fillMillCapacity(millCapacity: string){
        const longitude_txt = this.longitude_text
        await longitude_txt.clear();
        await longitude_txt.fill(millCapacity);
    }
    async siteBusinessAdd(){
        const add_btn = this.add_button
        await add_btn.click();
    }
    async verifyTheAddedBusiness(){
        const addedBusiness_box = this.addedBusiness
        await expect(addedBusiness_box).toBeVisible();
    }
    async deleteTheAddedBusiness(){
        const deleteBusiness_btn = this.deleteBusiness_button
        await deleteBusiness_btn.click();
    }






}