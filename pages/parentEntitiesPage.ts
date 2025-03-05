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

    async verifyUpdatingOfTheSstRegistrationNumberAndMailingAddress(sstRegistrationNo: string, mailingAddressStreet: string, mailingAddressUnitNo: string, mailingAddressCity: string, mailingAddressState: string, mailingAddressZip: string) {
        const sstRegistrationNum_txt = this.sstRegistrationNum_textBox;
        await sstRegistrationNum_txt.clear();
        await sstRegistrationNum_txt.fill(sstRegistrationNo);
        console.log("-------------Enter SSTRegistration Number.-----------");

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

        const saveChanges_btn = this.saveChanges_button;
        await saveChanges_btn.scrollIntoViewIfNeeded();
        await saveChanges_btn.click();

        const saveChangesSuccessMsg = this.saveChangesSuccessAlert;
        await saveChangesSuccessMsg.isVisible();
        console.log("-------------Success message is displayed.-----------");
    }
}