import { expect, Locator, mergeExpects, Page } from "@playwright/test"

export default class DisclosureGrowerPage {
    readonly disclosure_title: Locator;
    readonly newDisclosure_button : Locator;
    readonly grower_title : Locator;
    readonly newSupplyBase_radiobtn : Locator;
    readonly next_button : Locator;
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
    readonly growerLatitude : Locator;
    readonly growerLongitude : Locator;
    readonly supplyBaseType : Locator;
    readonly dateOfAcquisition_fld : Locator;
    readonly date_calendar : Locator;
    readonly association_dropdown : Locator;
    readonly polygon_radio : Locator;
    readonly url_text : Locator;
    readonly supplyBaseArea_text : Locator;
    readonly totalPlantedArea_text : Locator;
    readonly totalUnplantedArea_text : Locator;
    readonly thirdStepNext: Locator;
    readonly landTitle_text : Locator;
    readonly landTitleArea: Locator;
    readonly fourthStepNext : Locator;
    readonly addNewPlantingData_button : Locator;
    readonly newPlantingData_title : Locator;
    readonly plantedYear_text : Locator;
    readonly newPlantingDataConfirm_button : Locator;
    readonly fifthNext_button : Locator;
    readonly q1_radio : Locator;
    readonly q2_text : Locator;
    readonly non_complaintcalendar : Locator;
    readonly q4_text : Locator;
    readonly q5a_text : Locator;
    readonly q5b_text : Locator;
    readonly q5c_text : Locator;
    readonly q6_text : Locator;
    readonly q7a_text : Locator;
    readonly q7b_text : Locator;
    readonly q7c_text : Locator;
    readonly q7d_text : Locator;
    readonly socialQ1a_text : Locator;
    readonly socialQ2a_text : Locator;
    readonly socialQ3a_text : Locator;
    readonly socialQ4a_text : Locator;
    readonly socialQ4b_text : Locator;
    readonly socialQ4c_text : Locator;
    readonly reviewSubmission_button : Locator;
    readonly socialQ5a_text : Locator;
    readonly socialQ6a_text : Locator;
    readonly socialQ7a_text : Locator;
    readonly socialQ8a_text : Locator;
    readonly socialQ9a_text : Locator;
    readonly socialQ10a_text : Locator;
    readonly socialQ11a_text : Locator;
    readonly submit_button : Locator;
    readonly successAlert : Locator;
    readonly latestDisclosureId : Locator;
    readonly disclosureSearch_text : Locator;
    readonly applyFilter_button : Locator;
    readonly filteredResult : Locator;
    readonly proceedToReview_button : Locator;
    readonly yes_button : Locator;
    readonly verify_button : Locator;
    readonly verifyDisclosure_text :Locator;
    readonly successDisclosureAlert : Locator;
    readonly verifyDisclosureSubmit_button : Locator;

    constructor(public page: Page) {
        this.disclosure_title = page.locator('//h1[text()="Disclosure for Grower"]');
        this.newDisclosure_button = page.locator('//button[@data-testid="new-disclosure-button"]');
        this.grower_title = page.locator('//h1[text()="Disclosure for Grower"]');
        this.newSupplyBase_radiobtn = page.locator('//input[@value="new"]');
       // this.next_button = page.locator('//button[@data-testid="sticky-button-Next"]');
        this.disclosureParentEntity = page.locator('//div[@id="parentEntityId"]');
        this.disclosureOwnership = page.locator('//div[@id="ownershipId"]');
       // this.secondNext_button = page.locator('//button[@id=":r2ff:""][@data-testid="sticky-button-Next"]');
        this.createDraft_title = page.locator('//h2[text()="Create Draft"]');
        this.createDraft_button = page.locator('//button[@title="Yes, Create Draft"]');
        this.secondStepNext_button = page.locator('//button[@data-testid="sticky-button-Next"]');
        this.supplyBaseName_text = page.locator('//input[@id="name"]');
        this.supplyBaseCountry = page.locator('//div[@id="country"]');
        this.growerAddressStreet = page.locator('//input[@id="street"]');
        this.growerAddressUnitNo = page.locator('//input[@id="unitNo"]');
        this.growerAddressState = page.locator('//input[@id="stateProvince"]');
        this.growerAddressCity = page.locator('//input[@id="city"]');
        this.growerAddressZip = page.locator('//input[@id="postalCode"]');
        this.growerLatitude = page.locator('//input[@id="latitude"]');
        this.growerLongitude = page.locator('//input[@id="longitude"]');
        this.supplyBaseType = page.locator('//div[@id="type"]');
        this.dateOfAcquisition_fld = page.locator('//input[@data-testid="date-picker-dateOfAcquisition"]');
        this.date_calendar = page.locator('//input[@name="dateOfAcquisition"]');
        this.association_dropdown = page.locator('//div[@id="associationType"]');
        this.polygon_radio = page.locator('//input[@value="SHAPEFILE_LINK"]');
        this.url_text = page.locator('//input[@id="shapeFileLink"]');
        this.supplyBaseArea_text = page.locator('//input[@id="area"]');
        this.totalPlantedArea_text = page.locator('//input[@id="plantedArea"]');
        this.totalUnplantedArea_text = page.locator('//input[@id="unplantedArea"]');
       // this.thirdStepNext = page.locator('//button[@data-testid="sticky-button-Next"]');
        this.landTitle_text = page.locator('//input[@id="landTitlesMultiFormItems[0].title"]');
        this.landTitleArea = page.locator('//input[@id="landTitlesMultiFormItems[0].area"]');
       // this.fourthStepNext = page.locator('//button[@data-testid="sticky-button-Next"]');
        this.addNewPlantingData_button = page.locator('//button[text()="Add New Planting Data"]');
        this.newPlantingData_title = page.locator('//h2[text()="New Planting Data"]');
        this.plantedYear_text = page.locator('//input[@name="plantedYear"]');
        this.newPlantingDataConfirm_button = page.locator('//button[@title="Confirm"]');
        this.next_button = page.locator('//button[@label="Next"]');
        this.q1_radio = page.locator('//input[@value="true"]');
        this.q2_text = page.locator('//textarea[@id="raw02"]');
        this.non_complaintcalendar = page.locator('//input[@data-testid="date-range-raw03"]');
        this.q4_text = page.locator('//div[@data-testid="form-text-area-raw04"]/textarea[@id="raw04"]');
        this.q5a_text = page.locator('//textarea[@id="raw05a"]');
        this.q5b_text = page.locator('//input[@data-testid="date-picker-raw05b"]');
        this.q5c_text = page.locator('//input[@id="raw05c"]');
        this.q6_text = page.locator('//input[@id="raw06"]');
        this.q7a_text = page.locator('//input[@id="raw07a"]');
        this.q7b_text = page.locator('//input[@id="raw07b"]');
        this.q7c_text = page.locator('//input[@id="raw07c"]');
        this.q7d_text = page.locator('//input[@id="raw07d"]');
        this.socialQ1a_text = page.locator('//textarea[@id="social01"]');
        this.socialQ2a_text = page.locator('//textarea[@id="social02"]');
        this.socialQ3a_text = page.locator('//textarea[@id="social03"]');
        this.socialQ4a_text = page.locator('//textarea[@id="social04a"]');
        this.socialQ4b_text = page.locator('//textarea[@id="social04b"]');
        this.socialQ4c_text = page.locator('//textarea[@id="social04c"]');
        this.socialQ5a_text = page.locator('//textarea[@id="social05"]');
        this.socialQ6a_text = page.locator('//textarea[@id="social06"]');
        this.socialQ7a_text = page.locator('//textarea[@id="social07"]');
        this.socialQ8a_text = page.locator('//textarea[@id="social08"]');
        this.socialQ9a_text = page.locator('//textarea[@id="social09"]');
        this.socialQ10a_text = page.locator('//textarea[@id="social10"]');
        this.socialQ11a_text = page.locator('//textarea[@id="social11"]');
        this.reviewSubmission_button = page.locator('//button[@label="Review Submission"]');
        this.submit_button = page.locator('//button[@label="Submit"]');
        this.successAlert = page.locator('//div[text()="Submit to RSPO for verification."]');
        this.latestDisclosureId = page.locator('//div[@class="MuiDataGrid-row MuiDataGrid-row--lastVisible"]/div[@data-field="disclosureId"]');
        this.disclosureSearch_text = page.locator('//input[@id="search"]');
        this.applyFilter_button = page.locator('//button[text()="Apply filters"]');
        this.filteredResult = page.locator('//div[@class="MuiDataGrid-virtualScrollerRenderZone css-1inm7gi"]');
        this.proceedToReview_button = page.locator('//button[@label="Proceed to Review"]');
        this.yes_button = page.locator('//button[text()="Yes"]');
        this.verify_button = page.locator('//button[@label="Verify"]');
        this.verifyDisclosure_text = page.locator('//textarea[@id="comments"]');
        this.successDisclosureAlert = page.locator('//div[text()="Disclosure Verified"]');
        this.verifyDisclosureSubmit_button = page.locator('//button[text()="Submit"]');
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
        const next_btn = this.next_button
        await next_btn.click();
        console.log(`-------------Next button is selected.-----------`);
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
    async addSupplyBaseName(){
        const supplyBaseName_txt = this.supplyBaseName_text
        const getCurrentTimestamp = (): string => {
            const now = new Date();
            return `${now.getFullYear()}${(now.getMonth() + 1)
              .toString()
              .padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}_${now
              .getHours()
              .toString()
              .padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now
              .getSeconds()
              .toString()
              .padStart(2, '0')}`;
          };
          
        const uniqueName = `SupplyBase_Automation_${getCurrentTimestamp()}`;
        await supplyBaseName_txt.fill(uniqueName)
        console.log(`-------------Supply Base name: ${uniqueName}-----------`);
    }
    async selectCountry(country: string) {
        const supplyBaseCountry_drp = this.supplyBaseCountry
        await supplyBaseCountry_drp.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const countryOption = this.page.locator(`li[role='option'] >> text=${country}`);
        await countryOption.click();
        console.log(`------------Selected registration country: ${country}------------`);
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
    async fillLatitude(latitude: string) {
        const latitude_txt = this.growerLatitude
        await latitude_txt.clear();
        await latitude_txt.fill(latitude);
    }
    async fillLongitude(longitude: string) {
        const longitude_txt = this.growerLongitude
        await longitude_txt.clear();
        await longitude_txt.fill(longitude);
    }
    async selectSupplyBaseType (supplyBaseType){
        const supplyBaseType_drp = this.supplyBaseType
        await supplyBaseType_drp.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const supplyBaseOption = this.page.locator(`li[role='option'] >> text=${supplyBaseType}`);
        await supplyBaseOption.click();
        console.log(`------------Supplybase Type: ${supplyBaseType} selected.------------`);
    }
    async fillDateOfAcquisition(daysBefore: number) : Promise<void>{
        const dateCalendar = this.date_calendar
            const today = new Date();
            today.setDate(today.getDate() - daysBefore); 
            const day = String(today.getDate()).padStart(2, "0"); 
            const month = today.toLocaleString('en-US', { month: 'short' });
            const year = today.getFullYear();
            const date = `${day}-${month}-${year}`; 
        await dateCalendar.click();
        await dateCalendar.fill(date); 
        console.log(`------------Date Of Acquisition: ${date} added.------------`); 

    }
    async selectAssociation(association: string) {
        const association_drpdwn = this.association_dropdown
        await association_drpdwn.click();
        await this.page.waitForSelector("//ul[@role='listbox']");
        const associationOption = this.page.locator(`li[role='option'] >> text=${association}`);
        await associationOption.click();
        console.log(`------------Selected association: ${association}------------`);
    }
    async selectPolygon() {
        const polygon_radiobtn = this.polygon_radio
        await polygon_radiobtn.click();
        console.log(`------------Polygon selected.------------`);
    }
    async addingURLForPolygon(URL){
        const url_txt = this.url_text
        await url_txt.fill(URL);
        console.log(`------------Polygon URL added.------------`);
    }
    async addingSupplyBaseArea(supplyBaseArea){
        const supplyBaseArea_txt = this.supplyBaseArea_text
        await supplyBaseArea_txt.fill(supplyBaseArea);
        console.log(`------------Supply Base area added.------------`);
    }
    async addingTotalPlantedArea(totalPlantedArea){
        const totalPlantedArea_txt = this.totalPlantedArea_text
        await totalPlantedArea_txt.fill(totalPlantedArea);
        console.log(`------------Total planted area added.------------`);
    }
    async addingTotalUnPlantedArea(totalUnPlantedArea){
        const totalUnplantedArea_txt = this.totalUnplantedArea_text
        await totalUnplantedArea_txt.fill(totalUnPlantedArea);
        console.log(`------------Total Unplanted area added.------------`);
    }
    async fillLandTitle(landTitle) {
        const landTitle_txt = this.landTitle_text
        await landTitle_txt.clear();
        await landTitle_txt.fill(landTitle);
        console.log(`------------Land title added.------------`);
    }
    async fillLandTitleArea(landTitleArea) {
        const landTitleArea_txt = this.landTitleArea
        await landTitleArea_txt.clear();
        await landTitleArea_txt.fill(landTitleArea);
        console.log(`------------Land area added.------------`);
    }
    async addNewPlantingData(){
        const addNewPlantingData_btn = this.addNewPlantingData_button
        await addNewPlantingData_btn.click();
        console.log(`------------Add New Planting Data button clicked.------------`);
    }
    async fillPlantedYear(plantedYear){
        const plantedYear_txt = this.plantedYear_text
        await plantedYear_txt.clear();
        await plantedYear_txt.fill(plantedYear);
        console.log(`------------Planted year added.------------`);
    }
    async clickConfirm(){
        const newPlantingDataConfirm_btn = this.newPlantingDataConfirm_button
        await newPlantingDataConfirm_btn.scrollIntoViewIfNeeded();
        await newPlantingDataConfirm_btn.click();
        console.log(`------------Confirm button clicked.------------`);
    }
    async selectQ1(){
        const q1_radio = this.q1_radio
        await q1_radio.click();
        console.log(`------------Question 1 selected.------------`);
    }
    async fillQuestion2(q2text){
        const q2_txt = this.q2_text
        await q2_txt.clear();
        await q2_txt.fill(q2text);
        console.log(`------------Question 2 filled.------------`);
    }
    async fillCalendarField1(startDate){
        const non_complaintcalendar = this.non_complaintcalendar
        await non_complaintcalendar.first().click();
        await non_complaintcalendar.first().fill(startDate);
        console.log(`------------Start Date added.------------`);  
        await this.page.click('body');
    }
    async fillCalendarField2(endDate){
        const non_complaintcalendar = this.non_complaintcalendar
        await non_complaintcalendar.nth(1).click();
        await non_complaintcalendar.nth(1).fill(endDate);
        console.log(`------------End Date added.------------`);
        await this.page.click('body');
    }
    async fillQuestion4(q4text){
        const q4_txt = this.q4_text
        await q4_txt.clear();
        await q4_txt.fill(q4text);
        console.log(`------------Question 4 filled.------------`);
    }
    async fillQuestion5a(q5atext){
        const q5a_txt = this.q5a_text
        await q5a_txt.clear();
        await q5a_txt.fill(q5atext);
        console.log(`------------Question 5a filled.------------`);
    }
    async fillQuestion5b(q5btext){
        const q5b_txt = this.q5b_text
        await q5b_txt.clear();
        await q5b_txt.fill(q5btext);
        console.log(`------------Question 5b filled.------------`);
    }
    async fillQuestion5c(q5ctext){
        const q5c_txt = this.q5c_text
        await q5c_txt.clear();
        await q5c_txt.fill(q5ctext);
        console.log(`------------Question 5c filled.------------`);
    }
    async fillQuestion6(q6text){
        const q6_txt = this.q6_text
        await q6_txt.clear();
        await q6_txt.fill(q6text);
        console.log(`------------Question 6 filled.------------`);
    }
    async fillQuestion7a(q7atext){
        const q7a_txt = this.q7a_text
        await q7a_txt.clear();
        await q7a_txt.fill(q7atext);
        console.log(`------------Question 7a filled.------------`);
    }
    async fillQuestion7b(q7btext){
        const q7b_txt = this.q7b_text
        await q7b_txt.clear();
        await q7b_txt.fill(q7btext);
        console.log(`------------Question 7b filled.------------`);
    }
    async fillQuestion7c(q7ctext){
        const q7c_txt = this.q7c_text
        await q7c_txt.clear();
        await q7c_txt.fill(q7ctext);
        console.log(`------------Question 7c filled.------------`);
    }
    async fillQuestion7d(q7dtext){
        const q7d_txt = this.q7d_text
        await q7d_txt.clear();
        await q7d_txt.fill(q7dtext);
        console.log(`------------Question 7d filled.------------`);
    }
    async fillSocialQuestion1a(socialQ1aText){
        const socialQ1a_txt = this.socialQ1a_text
        await socialQ1a_txt.clear();
        await socialQ1a_txt.fill(socialQ1aText);
        console.log(`------------Social Question 1a filled.------------`);
    }
    async fillSocialQuestion2a(socialQ2aText){
        const socialQ2a_txt = this.socialQ2a_text
        await socialQ2a_txt.clear();
        await socialQ2a_txt.fill(socialQ2aText);
        console.log(`------------Social Question 2a filled.------------`);
    }
    async fillSocialQuestion3a(socialQ3aText){
        const socialQ3a_txt = this.socialQ3a_text
        await socialQ3a_txt.clear();
        await socialQ3a_txt.fill(socialQ3aText);
        console.log(`------------Social Question 1a filled.------------`);
    }
    async fillSocialQuestion4a(socialQ4aText){
        const socialQ4a_txt = this.socialQ4a_text
        await socialQ4a_txt.clear();
        await socialQ4a_txt.fill(socialQ4aText);
        console.log(`------------Social Question 4a filled.------------`);
    }
    async fillSocialQuestion4b(socialQ4bText){
        const socialQ4b_txt = this.socialQ4b_text
        await socialQ4b_txt.clear();
        await socialQ4b_txt.fill(socialQ4bText);
        console.log(`------------Social Question 1a filled.------------`);
    }
    async fillSocialQuestion4c(socialQ4cText){
        const socialQ4c_txt = this.socialQ4c_text
        await socialQ4c_txt.clear();
        await socialQ4c_txt.fill(socialQ4cText);
        console.log(`------------Social Question 4c filled.------------`);
    }
    async fillSocialQuestion5a(socialQ5aText){
        const socialQ5a_txt = this.socialQ5a_text
        await socialQ5a_txt.clear();
        await socialQ5a_txt.fill(socialQ5aText);
        console.log(`------------Social Question 5a filled.------------`);
    }
    async fillSocialQuestion6a(socialQ6aText){
        const socialQ6a_txt = this.socialQ6a_text
        await socialQ6a_txt.clear();
        await socialQ6a_txt.fill(socialQ6aText);
        console.log(`------------Social Question 6a filled.------------`);
    }
    async fillSocialQuestion7a(socialQ7aText){
        const socialQ7a_txt = this.socialQ7a_text
        await socialQ7a_txt.clear();
        await socialQ7a_txt.fill(socialQ7aText);
        console.log(`------------Social Question 7a filled.------------`);
    }
    async fillSocialQuestion8a(socialQ8aText){
        const socialQ8a_txt = this.socialQ8a_text
        await socialQ8a_txt.clear();
        await socialQ8a_txt.fill(socialQ8aText);
        console.log(`------------Social Question 8a filled.------------`);
    }
    async fillSocialQuestion9a(socialQ9aText){
        const socialQ9a_txt = this.socialQ9a_text
        await socialQ9a_txt.clear();
        await socialQ9a_txt.fill(socialQ9aText);
        console.log(`------------Social Question 9a filled.------------`);
    }
    async fillSocialQuestion10a(socialQ10aText){
        const socialQ10a_txt = this.socialQ10a_text
        await socialQ10a_txt.clear();
        await socialQ10a_txt.fill(socialQ10aText);
        console.log(`------------Social Question 10a filled.------------`);
    }
    async fillSocialQuestion11a(socialQ11aText){
        const socialQ11a_txt = this.socialQ11a_text
        await socialQ11a_txt.clear();
        await socialQ11a_txt.fill(socialQ11aText);
        console.log(`------------Social Question 11a filled.------------`);
    }
    async clickReviewSubmission(){
        const reviewSubmission_btn = this.reviewSubmission_button
        await reviewSubmission_btn.click();
        console.log(`------------Review Submission button clicked.------------`);
    }
    async clickSubmit(){
        const submit_btn = this.submit_button
        await submit_btn.click();
        console.log("-------------Submit button clicked.------------");
    }
    async verifyTheSuccessAlert(){
        const successAlert_txt = this.successAlert
        await expect(successAlert_txt).toBeVisible();
        console.log("-------------Submit to RSPO for Verification alert displayed.------------");
    }
    async getLatestIdFromList() {
        const idElements =  this.latestDisclosureId.nth(0); 
        const latestId = await idElements.textContent();
        console.log("--------------Latest ID founded --------------");
        return latestId;  
    }
    async searchByDisclosureId(disclosureId: string) {
        const disclosureSearch_txt = this.disclosureSearch_text.nth(0)
        await disclosureSearch_txt.fill(disclosureId);
        console.log("-------------DisclosureID " + disclosureId + " added.-------------");
    }
    async applyFilter() {
        const applyFilter_btn = this.applyFilter_button.nth(0);
        await applyFilter_btn.click();
        console.log("--------------Apply button clicked.--------------");
    }
    async openFilteredResult(){
        const filteredResult = this.filteredResult.first()
        await filteredResult.click();
        console.log("--------------Open the details page of the disclosure.--------------");
    }
    async verifyTheDisclosureByVerifyButton(){
        const verify_btn = this.verify_button
        await verify_btn.click();
        console.log("--------------Verify button clicked.--------------");
    }
    async navigate_ProceedToReview(){
        const proceedToReview_btn = this.proceedToReview_button
        await proceedToReview_btn.click();
        console.log("--------------Proceed To Review button clicked.--------------");
    }
    async modal_ProceedToReview(){
        const yes_btn = this.yes_button
        await yes_btn.click();
        console.log("--------------Proceed To Review clicked.--------------");
    }
    async verifyTheDisclosureComment(comment){
        const verifyDisclosure_txt = this.verifyDisclosure_text
        await verifyDisclosure_txt.fill(comment);
        console.log("--------------Verification comment passed.--------------");
    }
    async submitVerificationComment(){
        const verifyDisclosureSubmit_btn = this.verifyDisclosureSubmit_button
        await verifyDisclosureSubmit_btn.click();
        console.log("--------------Submit button clicked.--------------");
    }
    async verifyTheDisclosureSuccessAlert(){
        const successDisclosureAlrt = this.successDisclosureAlert
        await expect(successDisclosureAlrt).toBeVisible();
        console.log("--------------Success alert displayed.--------------");
    }



    
    

}