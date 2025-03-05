import { Page, expect, Locator } from "@playwright/test"

export default class TimeBoundPlanPage {

    readonly prismatimeboundplanid_text: Locator;
    readonly memebershipNo_text: Locator;
    readonly timeboundplanStaus:Locator;
    readonly dateOfApprival:Locator;
    readonly updatePlan_button: Locator;
    readonly timeBoundPlanId: Locator;
    readonly updateTBPsupplyBases: Locator;
    readonly updateTBPmills: Locator;
    readonly editSupplyBase_button: Locator;
    readonly editExistingSupplyBase: Locator;
    readonly editProposedYear_text: Locator;
    readonly editJustifiChanges_text: Locator;
    readonly confirmUpdates_button: Locator;
    readonly successToastmessage: Locator;
    readonly supplyBasesTab_button: Locator;
    readonly supplyBaseSearchBar_text: Locator;
    readonly millsSearchBar_text: Locator;
    readonly applyFilterButton : Locator;
    readonly supplyBaseReset_button: Locator;
    readonly timeBoundFilterResult: Locator;
    readonly timeBoundSupplyIdFilterResult: Locator;
    readonly timeBoundSiteNameFilterResult: Locator;
    readonly millsTab_button: Locator;
    readonly millsApplyFilterButton: Locator;
    readonly millsReset_button: Locator;
    readonly millsSiteNameFilterResult: Locator;
    readonly millsSiteIdFilterResult: Locator;
    readonly millsTypeFilterResult: Locator;
    readonly millsAssetTypeContainer: Locator;
    readonly millsType_list: Locator;
    readonly supplyAssetTypeContainer: Locator;
    readonly timeBoundSupplTypeFilterResult:Locator;
    readonly supplyJustificationFilterResult: Locator;
    readonly justificationSupplyBaseIdText:Locator;
    readonly justificationSupplyBaseNameText:Locator;
    readonly justificationDialogClose_button: Locator;
    readonly millsJustificationFilterResult: Locator;
    readonly justificationSiteBusinessIdText: Locator;
    readonly justificationPlanYearText:Locator;
    readonly noDataAvailable_text: Locator;

    constructor(public page: Page) {
        this.prismatimeboundplanid_text = page.locator('//*[@data-testid="timeBoundPlanId-container"]//p[@data-testid="form-text-item-timeBoundPlanId"][text()]');
        this.memebershipNo_text = page.locator('//*[@data-testid="flex-row-container-1"]//p[@data-testid="form-text-item-membershipNumber"][text()]');
        this.timeboundplanStaus = page.locator('//*[@id="generalInfo-flex-container"]//p[@data-testid="form-text-item-status"]');
        this.dateOfApprival = page.locator('//*[@id="generalInfo-flex-container"]//p[@data-testid="form-text-item-rspoApprovalDate"]');
        this.timeBoundPlanId = page.locator('//*[@id="page-id"]/div[1]/h1[text()]');
        this.updatePlan_button = page.locator('//*[@id="page-id"]//div/h4[@data-testid="time-bound-plan-details"]/following-sibling::button');
        this.updateTBPsupplyBases = page.locator('//button[normalize-space()="Supply Bases"]');
        this.editSupplyBase_button = page.locator('//div[@class="MuiBox-root css-zsz8fb"]//button[@type="button"][@data-testid="edit-asset-button"]');
        this.editExistingSupplyBase = page.locator('//*[@class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthMd MuiDialog-paperFullWidth css-19xjj5i"]//h4');
        this.editProposedYear_text = page.locator('//*[@name="proposedCertificationYear"]');
        this.editJustifiChanges_text = page.locator('//*[@id="justificationForChange"]');
        this.confirmUpdates_button = page.locator('//button[@data-testid="form-button-primary-Confirm"]');
        this.successToastmessage = page.locator('//*[@data-testid="feedback-message"]//following-sibling::div[text()]');
        this.updateTBPmills = page.locator('//button[normalize-space()="Mills"]');
        this.supplyBasesTab_button = page.locator('[data-testid="tabs-supplyBases"]');  
        this.supplyBaseSearchBar_text = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div//input[@id="filterSearch"]');
        this.millsSearchBar_text = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div//input[@id="filterSearch"]');
        this.applyFilterButton = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div//button[@data-testid="form-button-primary-Apply filters"]');
        this.supplyBaseReset_button = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div//button[@data-testid="form-button-destructive-Reset"]');
        this.timeBoundFilterResult = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="name"]');
        this.timeBoundSupplyIdFilterResult = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="id"]');
        this.timeBoundSupplTypeFilterResult = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="type"]');
        this.supplyJustificationFilterResult = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div//div[@data-field="justificationForChange"]/button');
        this.timeBoundSiteNameFilterResult = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="name"]');
        this.millsTab_button = page.locator('[data-testid="tabs-mills"]');
        this.millsApplyFilterButton = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div//button[@data-testid="form-button-primary-Apply filters"]');
        this.millsReset_button = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div//button[@data-testid="form-button-destructive-Reset"]');
        this.millsSiteNameFilterResult = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="name"]');
        this.millsSiteIdFilterResult = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="id"]');
        this.millsTypeFilterResult = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div/div[@class="MuiBox-root css-0"]//div[@role="grid"]//div[@class="MuiDataGrid-virtualScroller css-1pzb349"]//div[@data-field="type"]');
        this.millsType_list = page.locator('//*[@class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"][@role="listbox"]/li');
        this.millsAssetTypeContainer = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div/form//div[@data-testid="assetType-container"]');
        this.supplyAssetTypeContainer = page.locator('//h6/parent::div[@data-testid="supply-bases-tab-heading"]/following-sibling::div/form//div[@data-testid="assetType-container"]');
        this.justificationSupplyBaseIdText = page.locator('//*[@id="justification-flex-container"]//p[@data-testid="form-text-item-id"]');
        this.justificationSupplyBaseNameText = page.locator('//*[@id="justification-flex-container"]//p[@data-testid="form-text-item-name"]');
        this.justificationDialogClose_button = page.locator('//div[@class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthMd MuiDialog-paperFullWidth css-19xjj5i"]/button[@data-testid="close-dialog-btn"]');
        this.millsJustificationFilterResult = page.locator('//h6/parent::div[@data-testid="mills-tab-heading"]/following-sibling::div//div[@data-field="justificationForChange"]/button');
        this.justificationSiteBusinessIdText = page.locator('//*[@id="justification-flex-container"]//p[@data-testid="form-text-item-id"]');
        this.justificationPlanYearText = page.locator('//*[@id="justification-flex-container"]//p[@data-testid="form-text-item-planYearForCertification"]');
        this.noDataAvailable_text = page.locator('//*[@id="page-id"]//h6[@data-testid="typography-subtitle1"][text()]');
    }

    async verifyTimeBoundPlanDetails_UnderGeneralInformation(prismatimeboundplanid: string, memebershipNo: string, status: string) {
        const prismatimeboundplanid_txt = this.prismatimeboundplanid_text
        await expect(prismatimeboundplanid_txt).toHaveText(prismatimeboundplanid)
        console.log("-------------Time Bound Plan Id displayed.-----------")

        const memebershipNo_text = this.memebershipNo_text
        await expect(memebershipNo_text).toHaveText(memebershipNo)
        console.log("-------------Membership Number is displayed.-----------")

        const timeboundplanStaus_txt = this.timeboundplanStaus
        await expect(timeboundplanStaus_txt).toHaveText(status)
        console.log("-------------Time Bound Plan Status is displayed.-----------")

        const dateOfApprival_txt = this.dateOfApprival
        await expect(dateOfApprival_txt).toBeVisible();
        console.log("-------------Approval Date is displayed.-----------")
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

    async verifyFilterSearchUsingSupplyBaseIDAndType(supplyBaseId: string, type: string) {
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

        const supplyAssetTypeCnt = this.supplyAssetTypeContainer
        await supplyAssetTypeCnt.click();

        await this.page.locator('//*[@class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"][@role="listbox"]/li',{hasText:'New'}).click({ timeout: 60000 });
        await applyFilterBtn.click();
        const timeBoundSupplTypeFilterRslt = this.timeBoundSupplTypeFilterResult.first();
        await expect(timeBoundSupplTypeFilterRslt).toHaveText('New'); 
        console.log("-------------Filtered type result is displayed.-------------");

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

    async verifyFilterSearchUsingSiteIdAndType(siteId: string, type: string) {
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

        const millsAssetTypeCnt = this.millsAssetTypeContainer
        await millsAssetTypeCnt.click();

        await this.page.locator('//*[@class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"][@role="listbox"]/li',{hasText:'New'}).click({ timeout: 60000 });
        await millsApplyFilterBtn.click();
        const millsTypeFilterResult = this.millsTypeFilterResult.first();
        await expect(millsTypeFilterResult).toHaveText('New'); 
        console.log("-------------Mills Filtered type result is displayed.-------------");

        await millsReset_btn.click();

    }

    async verifyUpdateTMPlanID(tbpId) {
        const updatePlan_btn = this.updatePlan_button
        await updatePlan_btn.click();
        console.log("-------------Update Time Bound section is displayed.-------------");

        const timeBoundPlanId_txt = this.timeBoundPlanId
        await expect(timeBoundPlanId_txt).toHaveText(tbpId);
        console.log("-------------Time Bound section is displayed.-------------");
    }

    async verifyUpdatingOfSupplyBase(tbpSupplyBase, nameOftheExistingSupplyBase, year:string, changes) {
        const updateTBPsupplyBases = this.updateTBPsupplyBases
        await updateTBPsupplyBases.click();
        console.log("-------------Reditrect to Supply Bases.-------------");

        const updateTBPsupplyBaseSearchBar_txt = this.supplyBaseSearchBar_text
        await updateTBPsupplyBaseSearchBar_txt.fill(tbpSupplyBase);
        console.log("-------------Supply base name " + tbpSupplyBase + " added.-------------")

        const updateTbPapplyFilterBtn = this.applyFilterButton 
        await updateTbPapplyFilterBtn.click({timeout : 20000});
        const updateTbPtimeBoundFilterRslt = this.timeBoundFilterResult.first();
        await expect(updateTbPtimeBoundFilterRslt).toHaveText(tbpSupplyBase); 
        console.log("-------------Filtered results displayed.-------------");

        const editSupplyBase_btn = this.editSupplyBase_button
        await editSupplyBase_btn.click();

        const editExistingSupplyBase_dialog = this.editExistingSupplyBase
        await expect(editExistingSupplyBase_dialog).toHaveText(nameOftheExistingSupplyBase);
        console.log("-------------Edit Existing Supply Base window displayed.-------------");

        const editProposedYear_txt = this.editProposedYear_text;
        await editProposedYear_txt.clear();
        await editProposedYear_txt.fill(year);
        console.log("-------------Proposed year added.-------------");

        const editJustifiChanges_txt = this.editJustifiChanges_text;
        await editJustifiChanges_txt.clear();
        await editJustifiChanges_txt.fill(changes);
        console.log("-------------New changes added.-------------");

        const confirmUpdates_btn = this.confirmUpdates_button;
        await confirmUpdates_btn.click();
        const successToastmsg = this.successToastmessage;
        await successToastmsg.isVisible();
        console.log("-------------Success toast message displayed.-------------");
    }

    async verifyUpdatingOfMills(tbpMills, nameOftheExistingMill, year:string, changes) {
        const updateTBPmills_btn = this.updateTBPmills
        await updateTBPmills_btn.click();
        console.log("-------------Reditrect to Mills.-------------");

        const updateTBPmills_txt = this.millsSearchBar_text
        await updateTBPmills_txt.fill(tbpMills);
        console.log("-------------Site name " + tbpMills + " added.-------------");

        const updateTbPapplyFilterBtn = this.millsApplyFilterButton 
        await updateTbPapplyFilterBtn.click({timeout : 20000});
        const timeBoundSiteNameFilterRslt = this.timeBoundSiteNameFilterResult.first();
        await expect(timeBoundSiteNameFilterRslt).toHaveText(tbpMills); 
        console.log("-------------Filtered results displayed.-------------");

        const editMills_btn = this.editSupplyBase_button
        await editMills_btn.click();

        const editExistingMills_dialog = this.editExistingSupplyBase
        await expect(editExistingMills_dialog).toHaveText(nameOftheExistingMill);
        console.log("-------------Edit Existing Mill window displayed.-------------");

        const editProposedYear_txt = this.editProposedYear_text;
        await editProposedYear_txt.clear();
        await editProposedYear_txt.fill(year);
        console.log("-------------Proposed year added.-------------");

        const editJustifiChanges_txt = this.editJustifiChanges_text;
        await editJustifiChanges_txt.clear();
        await editJustifiChanges_txt.fill(changes);
        console.log("-------------New changes added.-------------");

        const confirmUpdates_btn = this.confirmUpdates_button;
        await confirmUpdates_btn.click();
        const successToastmsg = this.successToastmessage;
        await successToastmsg.isVisible();
        console.log("-------------Success toast message displayed.-------------");
    }

    async verifyTheJustificationForChangesForSupplyBaseAfterUpdatingTBP(supplyBaseId: string, justificationSupplyBaseId: string, justificationSupplyBaseName: string) {
        const supplyBaseSearchBar_txt = this.supplyBaseSearchBar_text
        await supplyBaseSearchBar_txt.fill(supplyBaseId);
        console.log("-------------Supply base ID " + supplyBaseId + " added.-------------");

       const applyFilterBtn = this.applyFilterButton 
       await applyFilterBtn.click();
        const supplyJustificationFilterRslt = this.supplyJustificationFilterResult.first();
        await supplyJustificationFilterRslt.click();
        console.log("-------------Justification for Changes dialog displayed.-------------");

        const justificationSupplyBaseIdTxt = this.justificationSupplyBaseIdText
        await expect(justificationSupplyBaseIdTxt).toHaveText(justificationSupplyBaseId); 

        const justificationSupplyBaseNameTxt = this.justificationSupplyBaseNameText
        await expect(justificationSupplyBaseNameTxt).toHaveText(justificationSupplyBaseName);
        console.log("-------------Supply Base name and ID displayed in the justification modal.-------------");

        const justificationDialogClose_btn = this.justificationDialogClose_button
        await justificationDialogClose_btn.click();
        console.log("-------------Justification dialog is closed.-------------");
    }

    async verifyTheJustificationForChangesForMillsAfterUpdatingTBP(siteName: string, justificationSiteBusinessId: string, justificationPlanYear: string) {
        const millsSearchBar_txt = this.millsSearchBar_text;
        await millsSearchBar_txt.fill(siteName,{ timeout: 50000});
        console.log("-------------Site name " + siteName + " added.-------------");

        const millsApplyFilterBtn = this.millsApplyFilterButton;
        await millsApplyFilterBtn.click();

        const millsSiteNameFilterRslt = this.millsSiteNameFilterResult.first();
        const millsJustificationFilterRslt = this.millsJustificationFilterResult.first();
        await millsJustificationFilterRslt.click();
        console.log("-------------Justification for Changes dialog displayed.-------------");

        const justificationSiteBusinessIdTxt = this.justificationSiteBusinessIdText
        await expect(justificationSiteBusinessIdTxt).toHaveText(justificationSiteBusinessId); 

        const justificationPlanYearTxt = this.justificationPlanYearText
        await expect(justificationPlanYearTxt).toHaveText(justificationPlanYear);
        console.log("-------------Site Business Id and Plan Year are displayed in the justification modal.-------------");

        const justificationDialogClose_btn = this.justificationDialogClose_button
        await justificationDialogClose_btn.click();
        console.log("-------------Justification dialog is closed.-------------");
    }

    async verifySearchForNonExistingSupplyBaseIDAndSupplyBaseName(nonExistSupplyBaseId: string,nonExistSupplyBaseName: string ) {
        const supplyBaseSearchBar_txt = this.supplyBaseSearchBar_text
        await supplyBaseSearchBar_txt.fill(nonExistSupplyBaseId);
        console.log("-------------Supply base ID " + nonExistSupplyBaseId + " added.-------------");

       const applyFilterBtn = this.applyFilterButton 
       await applyFilterBtn.click();
        const noDataAvailable_txt = this.noDataAvailable_text;
        await expect(noDataAvailable_txt).toBeVisible; 
        console.log("-------------No data available message displayed.-------------");

        const supplyBaseReset_btn = this.supplyBaseReset_button
        await supplyBaseReset_btn.click();

        await supplyBaseSearchBar_txt.fill(nonExistSupplyBaseName)
        console.log("-------------Supply base name " + nonExistSupplyBaseName + " added.-------------")

        await applyFilterBtn.click({timeout : 20000});
        await expect(noDataAvailable_txt).toBeVisible; 
        console.log("-------------No data available message displayed.-------------");
    }
    async verifySearchForNonExistingSiteBusinessIDAndSiteName(nonExistSiteID: string,nonExistSiteName: string) {
        const millsSearchBar_txt = this.millsSearchBar_text;
        await millsSearchBar_txt.fill(nonExistSiteName,{ timeout: 50000});
        console.log("-------------Site name " + nonExistSiteName + " added.-------------");

        const millsApplyFilterBtn = this.millsApplyFilterButton;
        await millsApplyFilterBtn.click();

        const noDataAvailable_txt = this.noDataAvailable_text;
        await expect(noDataAvailable_txt).toBeVisible; 
        console.log("-------------No data available message displayed.-------------");

        const millsReset_btn = this.millsReset_button
        await millsReset_btn.click();

        await millsSearchBar_txt.fill(nonExistSiteID,{ timeout: 50000});
        console.log("-------------Site Business Id " + nonExistSiteID + " added.-------------");

        await millsApplyFilterBtn.click();
        await expect(noDataAvailable_txt).toBeVisible; 
        console.log("-------------No data available message displayed.-------------");


    }


}