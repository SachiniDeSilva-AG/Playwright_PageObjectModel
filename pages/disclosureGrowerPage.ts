import { expect, Locator, mergeExpects, Page } from "@playwright/test"

export default class DisclosureGrowerPage {
    readonly disclosure_title: Locator;
    readonly newDisclosure_button : Locator;
    readonly grower_title : Locator;
    readonly newSupplyBase_radiobtn : Locator;
    readonly firstNext_button : Locator;
    readonly disclosureParentEntity : Locator;
    readonly disclosureOwnership : Locator;
    readonly secondNext_button : Locator;
    readonly createDraft_title : Locator;
    readonly createDraft_button : Locator;
    readonly secondStepNext_button : Locator;
    readonly supplyBaseName_text : Locator;
    readonly supplyBaseCountry : Locator;
    readonly growerAddressStreet : Locator;
    readonly growerAddressUnitNo : Locator;
    readonly growerAddressState : Locator;
    readonly growerAddressCity : Locator;
    readonly growerAddressZip : Locator;
    readonly supplyBaseType : Locator;
    readonly dateOfAcquisition_fld : Locator;
    readonly date_calendar : Locator;

    constructor(public page: Page) {
        this.disclosure_title = page.locator('//h1[text()="Disclosure for Grower"]');
        this.newDisclosure_button = page.locator('//button[@data-testid="new-disclosure-button"]');
        this.grower_title = page.locator('//h1[text()="Disclosure for Grower"]');
        this.newSupplyBase_radiobtn = page.locator('//input[@value="new"]');
        this.firstNext_button = page.locator('//button[@id=":r17s:"][@data-testid="sticky-button-Next"]');
        this.disclosureParentEntity = page.locator('//div[@id="parentEntityId"]');
        this.disclosureOwnership = page.locator('//div[@id="ownershipId"]');
        this.secondNext_button = page.locator('//button[@id=":r2ff:""][@data-testid="sticky-button-Next"]');
        this.createDraft_title = page.locator('//h2[text()="Create Draft"]');
        this.createDraft_button = page.locator('//button[@id=":r2fl:"][@title="Yes, Create Draft"]');
        this.secondStepNext_button = page.locator('//button[@data-testid="sticky-button-Next"]');
        this.supplyBaseName_text = page.locator('//input[@id="name"]');
        this.supplyBaseCountry = page.locator('//div[@id="country"]');
        this.growerAddressStreet = page.locator('//input[@id="street"]');
        this.growerAddressUnitNo = page.locator('//input[@id="unitNo"]');
        this.growerAddressState = page.locator('//input[@id="stateProvince"]');
        this.growerAddressCity = page.locator('//input[@id="city"]');
        this.growerAddressZip = page.locator('//input[@id="postalCode"]');
        this.supplyBaseType = page.locator('//div[@id="type"]');
        this.dateOfAcquisition_fld = page.locator('//input[@data-testid="date-picker-dateOfAcquisition"]');
        this.date_calendar = page.locator('');
    }

    async verifyTheTitleOfDisclosure() {
        const disclosure_txt = this.disclosure_title
        await expect(disclosure_txt).toBeVisible();
        console.log(`-------------Disclosure page is loaded.-----------`);
    }
    async clickOnNewDisclosure() {
        const newDisclosure_btn = this.newDisclosure_button
        await newDisclosure_btn.click().then();
        console.log(`-------------Disclosure for Grower page is loaded.-----------`);
    }
    async verifyDisclosureforGrower() {
        const newDisclosure_btn = this.newDisclosure_button
        await newDisclosure_btn.click().then();
        console.log(`-------------Disclosure for Grower page is loaded.-----------`);
    }
    async verifyTheTitleOfGrower() {
        const grower_ttl = this.grower_title
        await expect(grower_ttl).toBeVisible();
        console.log(`-------------Disclosure for grower page is loaded.-----------`);
    }
    async selectNewSupplyBase() {
        const newSupplyBase_btn = this.newSupplyBase_radiobtn
        await newSupplyBase_btn.click();
        console.log(`-------------New Supply Base page is selected.-----------`);
    }
    async clickOnNext() {
        const firstNext_btn = this.firstNext_button
        await firstNext_btn.click();
        console.log(`-------------New Supply Base page is selected.-----------`);
    }
    async selectParentEntity(parentEntityName){
        const disclosureParentEntity = this.disclosureParentEntity
        await disclosureParentEntity.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const parentEntityOption = this.page.locator(`li[role='option'] >> text=${parentEntityName}`);
        await parentEntityOption.click();
        console.log(`------------Parent Entity: ${parentEntityName} selected.------------`);
    }
    async selectLegalEntity(legalEntity: string) {
        const muOwnership_fld = this.disclosureOwnership
        await muOwnership_fld.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const muLegalEntityOption = this.page.locator(`li[role='option'] >> text=${legalEntity}`);
        await muLegalEntityOption.click();
        console.log(`------------Legal Entity: ${legalEntity} selected.------------`);
    }
    async clickCreateDraft() {
        const createDraft_btn = this.createDraft_button
        await createDraft_btn.click();
        console.log(`-------------Disclosure Draft created.-----------`);
    }
    async clickOnNextFromSecondStep() {
        const firstNext_btn = this.firstNext_button
        await firstNext_btn.click();
        console.log(`-------------New Supply Base page is selected.-----------`);
    }
    async fillGrowerAddress(street: string, unitno: string, state: string, city: string, zip: string) {
        const growerAddressStreet_txt = this.growerAddressStreet
        await growerAddressStreet_txt.clear();
        await growerAddressStreet_txt.fill(street);
        console.log(`------------Street name added: ${street}------------`);
    
        const growerAddressUnitNo_txt = this.growerAddressUnitNo
        await growerAddressUnitNo_txt.clear();
        await growerAddressUnitNo_txt.fill(unitno);
        console.log(`------------Unit Number added: ${unitno}------------`);
    
        const growerAddressState_txt = this.growerAddressState
        await growerAddressState_txt.clear();
        await growerAddressState_txt.fill(state);
        console.log(`------------State added: ${state}------------`);
    
        const growerAddressCity_txt = this.growerAddressCity
        await growerAddressCity_txt.clear();
        await growerAddressCity_txt.fill(city);
        console.log(`------------City added: ${city}------------`);
    
        const growerAddressZip_txt = this.growerAddressZip
        await growerAddressZip_txt.clear();
        await growerAddressZip_txt.fill(zip);
        console.log(`------------Postal code added: ${zip}------------`);
    }
    async selectSupplyBaseType (supplyBaseType){
        const supplyBaseType_drp = this.supplyBaseType
        await supplyBaseType_drp.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const supplyBaseOption = this.page.locator(`li[role='option'] >> text=${supplyBaseType}`);
        await supplyBaseOption.click();
        console.log(`------------Supplybase Type: ${supplyBaseType} selected.------------`);
    }

}