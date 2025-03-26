import { Page, expect, Locator } from "@playwright/test"

export default class ParentEntitiesPage {

    readonly parentEntities_text: Locator;
    readonly parentEntityName_text: Locator;
    readonly parentEntityID_text: Locator;
    readonly parentMembershipNo_text: Locator;
    readonly parentEntityType_text : Locator;
    readonly sstRegistrationNum_textBox: Locator;
    readonly mailingAddressStreet_textBox: Locator;
    readonly mailingAddressUnitNo_textBox: Locator;
    readonly mailingAddressCity_textBox: Locator;
    readonly mailingAddressState_textBox: Locator;
    readonly mailingAddressZip_textBox: Locator;
    readonly saveChanges_button: Locator;
    readonly saveChangesSuccessAlert: Locator;
    readonly billingAddressStreet_textBox: Locator;
    readonly billingAddressUnitNo_textBox: Locator;
    readonly billingAddressCity_textBox: Locator;
    readonly billingAddressState_textBox: Locator;
    readonly billingAddressZip_textBox: Locator;
    readonly billingCountry_dropdown: Locator;
    readonly billingCountry_list: Locator;
    readonly taxNumber_text: Locator;
    readonly billingPersonName_text: Locator;
    readonly billingPersonEmail_text: Locator;
    readonly successAlertClose_button: Locator;
  

    constructor(public page: Page) {
        this.parentEntities_text = page.locator('//*[@id="page-id"]//h1[text()]');
        this.parentEntityName_text = page.locator('//*[@id="entityDetails-flex-container"]//p[@data-testid="form-text-item-entityDetails.name"]');
        this.parentEntityID_text = page.locator('//*[@id="entityDetails-flex-container"]//p[@data-testid="form-text-item-entityDetails.id"]');
        this.parentMembershipNo_text = page.locator('//*[@id="entityDetails-flex-container"]//p[@data-testid="form-text-item-entityDetails.membershipNumber"]');
        this.parentEntityType_text = page.locator('//*[@id="entityDetails-flex-container"]//p[@data-testid="form-text-item-entityDetails.type"]');
        this.sstRegistrationNum_textBox = page.locator('//*[@id="entityDetails.sstRegistrationNumber"]');
        this.mailingAddressStreet_textBox = page.locator('//*[@id="entityDetails.mailingAddress.street"]');
        this.mailingAddressUnitNo_textBox = page.locator('//input[@id="entityDetails.mailingAddress.unitNo"]');
        this.mailingAddressCity_textBox = page.locator('//input[@id="entityDetails.mailingAddress.city"]');
        this.mailingAddressState_textBox = page.locator('//input[@id="entityDetails.mailingAddress.stateProvince"]');
        this.mailingAddressZip_textBox = page.locator('//input[@id="entityDetails.mailingAddress.zip"]');
        this.saveChanges_button = page.locator('//button[@data-testid="form-button-primary-Save changes"]');
        this.saveChangesSuccessAlert = page.locator('//*[@class="MuiAlert-message css-1xsto0d"]/text()');
        this.billingAddressStreet_textBox = page.locator('//*[@id="entityDetails.billingAddress.street"]');
        this.billingAddressUnitNo_textBox = page.locator('//input[@id="entityDetails.billingAddress.unitNo"]');
        this.billingAddressCity_textBox = page.locator('//input[@id="entityDetails.billingAddress.city"]');
        this.billingAddressState_textBox = page.locator('//input[@id="entityDetails.billingAddress.stateProvince"]');
        this.billingAddressZip_textBox = page.locator('//input[@id="entityDetails.billingAddress.zip"]');
        this.billingCountry_dropdown = page.locator('//div[@id="entityDetails.billingCountry"]');
        this.billingCountry_list = page.locator('//ul[@class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"]/li');
        this.taxNumber_text = page.locator('//input[@id="entityDetails.tin"]');
        this.billingPersonName_text = page.locator('//input[@id="billingContactPerson.name"]');
        this.billingPersonEmail_text = page.locator('//input[@id="billingContactPerson.email"]');
        this.successAlertClose_button = page.locator('//button[@data-testid="feedback-message-close"]');

    }

    async verifyParentEntitiesTitle(parententitiestxt: string) {
        const parentEntities_ttl = this.parentEntities_text
        await expect(parentEntities_ttl).toHaveText(parententitiestxt, { timeout: 50000 });
        console.log("-------------Parent Entities page loaded.-----------");
    }


    async verifyParentEntitiesDetails_UnderGeneralInformation(parentEntityName: string, memebershipNo: string, parentEntityID: string, parentEntityType: string) {
        const parentEntityName_txt = this.parentEntityName_text;
        await expect(parentEntityName_txt).toHaveText(parentEntityName);
        console.log("-------------Parent Entity Name displayed.-----------");

        const parentEntityID_txt = this.parentEntityID_text;
        await expect(parentEntityID_txt).toHaveText(parentEntityID);
        console.log("-------------Parent Entity ID displayed.-----------");

        const parentMembershipNo_txt = this.parentMembershipNo_text;
        await expect(parentMembershipNo_txt).toHaveText(memebershipNo);
        console.log("-------------Membership Number displayed.-----------");

        const parentEntityType_txt = this.parentEntityType_text;
        await expect(parentEntityType_txt).toHaveText(parentEntityType);
        console.log("-------------Parent Entity Type displayed.-----------");
    }

    async verifyTheUpdateOfTheSstRegistrationNumber(sstRegistrationNo: string) {
        const sstRegistrationNum_txt = this.sstRegistrationNum_textBox;
        await sstRegistrationNum_txt.clear();
        await sstRegistrationNum_txt.fill(sstRegistrationNo);
        console.log("-------------Enter SSTRegistration Number.-----------");
    }
    async verifyTheUpdateOfTheMailingAddress(mailingAddressStreet: string, mailingAddressUnitNo: string, mailingAddressCity: string, mailingAddressState: string, mailingAddressZip: string) {
        const mailingAddressStreet_txt = this.mailingAddressStreet_textBox
        await mailingAddressStreet_txt. clear();
        await mailingAddressStreet_txt.fill(mailingAddressStreet);

        const mailingAddressUnitNo_txt = this.mailingAddressUnitNo_textBox
        await mailingAddressUnitNo_txt.clear();
        await mailingAddressUnitNo_txt.fill(mailingAddressUnitNo);

        const mailingAddressCity_txt = this.mailingAddressCity_textBox
        await mailingAddressCity_txt.clear();
        await mailingAddressCity_txt.fill(mailingAddressCity);

        const mailingAddressState_txt = this.mailingAddressState_textBox
        await mailingAddressState_txt.clear();
        await mailingAddressState_txt.fill(mailingAddressState);

        const mailingAddressZip_txt = this.mailingAddressZip_textBox
        await mailingAddressZip_txt.clear();
        await mailingAddressZip_txt.fill(mailingAddressZip);
        console.log("-------------Enter Mailing street, UnitNo, City, State, Zip.-----------");
    }
    async verifyTheSuccessAlert() {
        const saveChangesSuccessMsg = this.saveChangesSuccessAlert;
        await saveChangesSuccessMsg.isVisible();
        console.log("-------------Success message is displayed.-----------");

        await this.successAlertClose_button.click();
    }

    async verifyUpdatingOfTheBillingAddress(billingAddressStreet: string, billingAddressUnitNo: string, bilingAddressCity: string, bilingAddressState: string, billingAddressZip: string) {
        const billingAddressStreet_txt = this.billingAddressStreet_textBox
        await billingAddressStreet_txt. clear();
        await billingAddressStreet_txt.fill(billingAddressStreet);

        const billingAddressUnitNo_txt = this.billingAddressUnitNo_textBox
        await billingAddressUnitNo_txt.clear();
        await billingAddressUnitNo_txt.fill(billingAddressUnitNo);

        const billingAddressCity_txt = this.billingAddressCity_textBox
        await billingAddressCity_txt.clear();
        await billingAddressCity_txt.fill(bilingAddressCity);

        const billingAddressState_txt = this.billingAddressState_textBox
        await billingAddressState_txt.clear();
        await billingAddressState_txt.fill(bilingAddressState);

        const billingAddressZip_txt = this.billingAddressZip_textBox
        await billingAddressZip_txt.clear();
        await billingAddressZip_txt.fill(billingAddressZip);
        console.log("-------------Enter Billing street, UnitNo, City, State, Zip.-----------");
    }

    async verifyUpdatingBillingCountry(billingCountry: string) {
        const billingCountrydrp = this.billingCountry_dropdown;
        await billingCountrydrp.click();
        await this.page.waitForSelector("//ul[@role='listbox']");

        const countryOption = this.page.locator(`li[role='option'] >> text=${billingCountry}`);
        await countryOption.click();
        console.log(`-------------Selected billing country:${billingCountry}-------------`);
    }
        async verifyUpdatingTaxNumber(taxNumber: string) {
        const taxNumber_txt = this.taxNumber_text
        await taxNumber_txt.fill(taxNumber);
        console.log(`-------------Updated the Tax Number:${taxNumber}-------------`);
        }
        async verifyUpdatingTheBillingPersonName(billingPersonName: string) {
        const billingPersonName_txt = this.billingPersonName_text
        await billingPersonName_txt.fill(billingPersonName);
        console.log(`-------------Updated the Tax Number:${billingPersonName}-------------`);
        }
        async verifyUpdatingTheBillingPersonEmail(bilingPersonEmail: string) {
        const billingPersonEmail_txt = this.billingPersonEmail_text
        await billingPersonEmail_txt.fill(bilingPersonEmail);
        console.log(`-------------Updated the Tax Number:${bilingPersonEmail}-------------`);
        }
        async verifySavingTheUpdatedChanges() {
        const saveChanges_btn = this.saveChanges_button;
        await saveChanges_btn.scrollIntoViewIfNeeded();
        await saveChanges_btn.click();
        console.log(`-------------Saved the updated changes.-------------`);
        }

}