import { test, expect } from "../base/myFixture";
import credentials from "../testdata/loginData.json";
import sitesData from "../testData/sitesData.json";
import disclosureData from "../testData/disclosureGrowerData.json";
import DisclosureGrowerPage from "../pages/disclosureGrowerPage";

test.describe("Supply Base verifications for RSPO Member", async () => {

    test.beforeEach(async ({ basePage }) => {
      basePage.initialize();
  })
  test('Create new disclosure for small holder and after verified by secretariat -it should display in EM-Smallholder plots -> PQ-1208', async ({ page, loginPage, dashboardPage, disclosureGrowerPage}) => {
  await loginPage.userlogin(credentials.userName, credentials.passWord);
  await dashboardPage.verifytheDashboardTitle("Dashboard");
  await dashboardPage.navigatestoDisclosureModule();
  await disclosureGrowerPage.verifyTheTitleOfDisclosure();
  await disclosureGrowerPage.clickOnNewDisclosure();
  await disclosureGrowerPage.selectNewSupplyBase();
  await disclosureGrowerPage.clickOnNext();
  await disclosureGrowerPage.selectParentEntity(disclosureData.parentEntityName);
  await disclosureGrowerPage.selectLegalEntity(disclosureData.ownership);
  await disclosureGrowerPage.clickOnNext();
  await disclosureGrowerPage.clickCreateDraft();
  await disclosureGrowerPage.clickOnNext();
  await disclosureGrowerPage.addSupplyBaseName();
  await disclosureGrowerPage.selectCountry(disclosureData.country);
  await disclosureGrowerPage.fillGrowerAddress(disclosureData.growerAddressStreet,disclosureData.growerAddressUnitNo,disclosureData.growerAddressState,disclosureData.growerAddressCity,disclosureData.growerAddressZip);
  await disclosureGrowerPage.fillLatitude(disclosureData.longitude);
  await disclosureGrowerPage.fillLongitude(disclosureData.latitude);
  await disclosureGrowerPage.selectSupplyBaseType(disclosureData.supplyBaseType);
  await disclosureGrowerPage.fillDateOfAcquisition(disclosureData.daysBefore);
  await disclosureGrowerPage.selectAssociation(disclosureData.association);
  await disclosureGrowerPage.selectPolygon();
  await disclosureGrowerPage.addingURLForPolygon(disclosureData.url);
  await disclosureGrowerPage.addingSupplyBaseArea(disclosureData.supplyBaseArea);
  await disclosureGrowerPage.addingTotalPlantedArea(disclosureData.totalPlannedArea);
  await disclosureGrowerPage.addingTotalUnPlantedArea(disclosureData.totalUnPlanted);
  await disclosureGrowerPage.clickOnNext();
  await disclosureGrowerPage.fillLandTitle(disclosureData.landTitle);
  await disclosureGrowerPage.fillLandTitleArea(disclosureData.landTitleArea);
  await disclosureGrowerPage.clickOnNext();
  await disclosureGrowerPage.addNewPlantingData();
  await disclosureGrowerPage.fillPlantedYear(disclosureData.plantedYear);
  await disclosureGrowerPage.clickConfirm();
  await disclosureGrowerPage.clickOnNext();
  await disclosureGrowerPage.selectQ1();
  await disclosureGrowerPage.fillQuestion2(disclosureData.q2Text);
  await disclosureGrowerPage.fillCalendarField1(disclosureData.startDate);
  await disclosureGrowerPage.fillCalendarField2(disclosureData.endDate);
  await disclosureGrowerPage.fillQuestion4(disclosureData.q4Text);
  await disclosureGrowerPage.fillQuestion5a(disclosureData.q5aText);
  await disclosureGrowerPage.fillQuestion5b(disclosureData.q5bText);
  await disclosureGrowerPage.fillQuestion5c(disclosureData.q5cText);
  await disclosureGrowerPage.fillQuestion6(disclosureData.q6Text);
  await disclosureGrowerPage.fillQuestion7a(disclosureData.q7aText);
  await disclosureGrowerPage.fillQuestion7b(disclosureData.q7bText);
  await disclosureGrowerPage.fillQuestion7c(disclosureData.q7cText);
  await disclosureGrowerPage.fillQuestion7d(disclosureData.q7dText);
  await disclosureGrowerPage.clickOnNext();
  await disclosureGrowerPage.fillSocialQuestion1a(disclosureData.socialQ1a_text);
  await disclosureGrowerPage.fillSocialQuestion2a(disclosureData.socialQ1a_text);
  await disclosureGrowerPage.fillSocialQuestion3a(disclosureData.socialQ3a_text);
  await disclosureGrowerPage.fillSocialQuestion4a(disclosureData.socialQ4a_text);
  await disclosureGrowerPage.fillSocialQuestion4b(disclosureData.socialQ4b_text);
  await disclosureGrowerPage.fillSocialQuestion4c(disclosureData.socialQ4c_text);
  await disclosureGrowerPage.fillSocialQuestion5a(disclosureData.socialQ5a_text);
  await disclosureGrowerPage.fillSocialQuestion6a(disclosureData.socialQ6a_text);
  await disclosureGrowerPage.fillSocialQuestion7a(disclosureData.socialQ7a_text);
  await disclosureGrowerPage.fillSocialQuestion8a(disclosureData.socialQ8a_text);
  await disclosureGrowerPage.fillSocialQuestion9a(disclosureData.socialQ9a_text);
  await disclosureGrowerPage.fillSocialQuestion10a(disclosureData.socialQ10a_text);
  await disclosureGrowerPage.fillSocialQuestion11a(disclosureData.socialQ11a_text);
  await disclosureGrowerPage.clickReviewSubmission();
  await disclosureGrowerPage.clickSubmit();
  await disclosureGrowerPage.verifyTheSuccessAlert(); 
  const disclosureId:string| null = await disclosureGrowerPage.getLatestIdFromList();
  await loginPage.verifyTheLogout();
  await loginPage.userlogin(credentials.secretatriatUserName, credentials.secretatriatpassWord);
  await page.waitForLoadState('load',{timeout:50000})
  await dashboardPage.verifytheDashboardTitle("Dashboard");
  await dashboardPage.navigatestoDisclosureModule();
  await disclosureGrowerPage.verifyTheTitleOfDisclosure();
  await page.waitForLoadState('load',{timeout:50000})
  await disclosureGrowerPage.searchByDisclosureId(disclosureId!);
  await page.waitForLoadState('networkidle',{timeout:50000});
  await disclosureGrowerPage.applyFilter();
  await page.waitForLoadState('networkidle',{timeout:50000});
  await disclosureGrowerPage.openFilteredResult();
  await disclosureGrowerPage.navigate_ProceedToReview();
  await disclosureGrowerPage.modal_ProceedToReview();
  await disclosureGrowerPage.verifyTheDisclosureByVerifyButton();
  await disclosureGrowerPage.verifyTheDisclosureComment(disclosureData.comment);
  await disclosureGrowerPage.submitVerificationComment();
  await disclosureGrowerPage.verifyTheDisclosureSuccessAlert();
});
})