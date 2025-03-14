import { test, expect } from "../base/myFixture";
import dashboardPage from "../pages/dashboardPage";
import ParentEntitiesPage from "../pages/parentEntitiesPage";
import credentials from "../testdata/loginData.json";
import timeBoundSearch from "../testdata/timeBoundData.json";
import parentEntityData from "../testData/parentEntityData.json";

test.describe("Parent Entities verifications for RSPO Member", async () => {

  test.beforeEach(async ({ basePage }) => {
    basePage.initialize();
})

test('Verify the Parent Entity Details under General Information -> PQ-1190', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, parentEntitiesPage}) => {
  await loginPage.userlogin(credentials.userName, credentials.passWord);
  await dashboardPage.verifytheDashboardTitle("Dashboard");
  await dashboardPage.navigatestoEntityModule();
  await userManagementPage.verifyUserManagementTitle("User management");
  await entityManagementModule.navigationToParentEntitiesPage();
  await parentEntitiesPage.verifyParentEntitiesDetails_UnderGeneralInformation(parentEntityData.parentEntityName, parentEntityData.parentEntityID, parentEntityData.membershipNo, parentEntityData.parentEntityType);
  await parentEntitiesPage.verifyUpdatingOfTheSstRegistrationNumberAndMailingAddress(parentEntityData.sstRegistrationNo,parentEntityData.mailingAddressStreet, parentEntityData.mailingAddressUnitNo, parentEntityData.mailingAddressCity, parentEntityData.mailingAddressState, parentEntityData.mailingAddressZip);
  await parentEntitiesPage.verifyUpdatingOfTheBillingAddress(parentEntityData.billingAddressStreet, parentEntityData.billingAddressUnitNo, parentEntityData.billingAddressCity, parentEntityData.billingAddressState, parentEntityData.billingAddressZip);
  await parentEntitiesPage.verifyUpdatingBillingCountry(parentEntityData.billingCountry);
  await parentEntitiesPage.verifyUpdatingTaxAndBillingPerson(parentEntityData.taxNumber, parentEntityData.billingPersonName, parentEntityData.billingPersonEmail);

});

})

