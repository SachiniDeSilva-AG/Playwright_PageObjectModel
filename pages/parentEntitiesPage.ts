import { Page, expect, Locator } from "@playwright/test"

export default class ParentEntitiesPage {

    readonly timeboundplanid_text: Locator;
  

    constructor(public page: Page) {
        this.timeboundplanid_text = page.locator('//*[@data-testid="timeBoundPlanId-container"]//p[@data-testid="form-text-item-timeBoundPlanId"][text()]');
    }

    async verifyTimeBoundPlanDetails_UnderGeneralInformation(timeboundplanid: string, memebershipNo: string) {
        const timeboundplanid_txt = this.timeboundplanid_text
        await expect(timeboundplanid_txt).toHaveText(timeboundplanid)
        console.log("-------------Time Bound Plan Id displayed.-----------")
    }
}