import { Page, expect, Locator } from "@playwright/test"

export default class TimeBoundPlanPage {

    readonly timeboundplanid_text: Locator;
    readonly memebershipNo_text: Locator;
    readonly supplyBasesTab_button: Locator;
    readonly supplyBaseSearchBar_text: Locator;
    readonly millsSearchBar_text: Locator;
    readonly applyFilterButton : Locator;
    readonly supplyBaseReset_button: Locator;
    readonly timeBoundFilterResult: Locator;
    readonly timeBoundSupplyIdFilterResult: Locator;
    readonly millsTab_button: Locator;
    readonly millsApplyFilterButton: Locator;
    readonly millsReset_button: Locator;
    readonly millsSiteNameFilterResult: Locator;
    readonly millsSiteIdFilterResult: Locator;

    constructor(public page: Page) {
        this.timeboundplanid_text = page.locator('//*[@data-testid="timeBoundPlanId-container"]//p[@data-testid="form-text-item-timeBoundPlanId"][text()]');
        this.memebershipNo_text = page.locator('//*[@data-testid="flex-row-container-1"]//p[@data-testid="form-text-item-membershipNumber"][text()]');
        this.supplyBasesTab_button = page.locator('[data-testid="tabs-supplyBases"]');  
        this.supplyBaseSearchBar_text = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div//input[@id="filterSearch"]');
        this.millsSearchBar_text = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div//input[@id="filterSearch"]');
        this.applyFilterButton = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div//button[@data-testid="form-button-primary-Apply filters"]');
        this.supplyBaseReset_button = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div//button[@data-testid="form-button-destructive-Reset"]');
        this.timeBoundFilterResult = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="name"]');
        this.timeBoundSupplyIdFilterResult = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="id"]');
        this.millsTab_button = page.locator('[data-testid="tabs-mills"]');
        this.millsApplyFilterButton = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div//button[@data-testid="form-button-primary-Apply filters"]');
        this.millsReset_button = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div//button[@data-testid="form-button-destructive-Reset"]');
        this.millsSiteNameFilterResult = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="name"]');
        this.millsSiteIdFilterResult = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="id"]');
    }

    async verifyTimeBoundPlanDetails_UnderGeneralInformation(timeboundplanid: string, memebershipNo: string) {
        const timeboundplanid_txt = this.timeboundplanid_text
        await expect(timeboundplanid_txt).toHaveText(timeboundplanid)
        console.log("-------------Time Bound Plan Id displayed.-----------")

        const memebershipNo_text = this.memebershipNo_text
        await expect(memebershipNo_text).toHaveText(memebershipNo)
        console.log("-------------Membership Number is displayed.-----------")
    }

    async navigationForSupplyBasesTab_UnderSupplyBases(){
        const supplyBasesTab_btn  = this.supplyBasesTab_button
        await supplyBasesTab_btn.click();
        console.log("-------------Navigated to Supply Base tab.-----------")
    }

    async verifyFilterSearchUsingSupplyBaseName(supplyName: string) {
        const supplyBaseSearchBar_txt = this.supplyBaseSearchBar_text
        await supplyBaseSearchBar_txt.fill(supplyName)
        console.log("-------------Supply base name " + supplyName + " added.-------------")

        const applyFilterBtn = this.applyFilterButton 
        await applyFilterBtn.click({timeout : 20000});
        const timeBoundFilterRslt = this.timeBoundFilterResult.first();
        await expect(timeBoundFilterRslt).toHaveText(supplyName); 
        console.log("-------------Filtered results displayed.-------------")

        const supplyBaseReset_btn = this.supplyBaseReset_button
        await supplyBaseReset_btn.click();
    }

    async verifyFilterSearchUsingSupplyBaseID(supplyBaseId: string) {
        const supplyBaseSearchBar_txt = this.supplyBaseSearchBar_text
        await supplyBaseSearchBar_txt.fill(supplyBaseId);
        console.log("-------------Supply base ID " + supplyBaseId + " added.-------------");

       const applyFilterBtn = this.applyFilterButton 
       await applyFilterBtn.click();
        const timeBoundSupplyIdFilterRslt = this.timeBoundSupplyIdFilterResult.first();
        await expect(timeBoundSupplyIdFilterRslt).toHaveText(supplyBaseId); 
        console.log("-------------Filtered results displayed.-------------");

        const supplyBaseReset_btn = this.supplyBaseReset_button
        await supplyBaseReset_btn.click();
    }

    async navigationForMillsTab_UnderTimeBoundPlan(){
        const millsTab_btn  = this.millsTab_button
        await millsTab_btn.click();
        console.log("-------------Navigated to Mills tab.-----------");
    }

    async verifyFilterSearchUsingSiteName(siteName: string) {
        const millsSearchBar_txt = this.millsSearchBar_text;
        await millsSearchBar_txt.fill(siteName,{ timeout: 50000});
        console.log("-------------Site name " + siteName + " added.-------------");

        const millsApplyFilterBtn = this.millsApplyFilterButton;
        await millsApplyFilterBtn.click();

        const millsSiteNameFilterRslt = this.millsSiteNameFilterResult.first();
        await expect(millsSiteNameFilterRslt).toHaveText(siteName); 
        console.log("-------------Mills Filtered name result is displayed.-------------");

        const millsReset_btn = this.millsReset_button
        await millsReset_btn.click();
    }

    async verifyFilterSearchUsingSiteId(siteId: string) {
        const millsSearchBar_txt = this.millsSearchBar_text
        await millsSearchBar_txt.fill(siteId)
        console.log("-------------Site Business Id " + siteId + " added.-------------")

        const millsApplyFilterBtn = this.millsApplyFilterButton 
        await millsApplyFilterBtn.click();

        const millsSiteIdFilterRslt = this.millsSiteIdFilterResult.first();
        await expect(millsSiteIdFilterRslt).toHaveText(siteId); 
        console.log("-------------Mills Filtered id result is displayed.-------------");

        const millsReset_btn = this.millsReset_button
        await millsReset_btn.click();
    }

    

}