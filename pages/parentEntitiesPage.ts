import { Page, expect, Locator } from "@playwright/test"

export default class ParentEntitiesPage {

    readonly parentEntities_text: Locator;
  

    constructor(public page: Page) {
        this.parentEntities_text = page.locator('//*[@id="page-id"]//h1[text()]');
    }

    async verifyParentEntitiesTitle(parententitiestxt: string) {
        const parentEntities_ttl = this.parentEntities_text
        await expect(parentEntities_ttl).toHaveText(parententitiestxt, { timeout: 50000 })
        console.log("-------------Parent Entities page loaded.-----------");
    }


    async verifyParentEntitiesDetails_UnderGeneralInformation(timeboundplanid: string, memebershipNo: string) {
        const parentEntities_txt = this.parentEntities_text
        await expect(parentEntities_txt).toHaveText(timeboundplanid)
        console.log("-------------Time Bound Plan Id displayed.-----------")
    }
}