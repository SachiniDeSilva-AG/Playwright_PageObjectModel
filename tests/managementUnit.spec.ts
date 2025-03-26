import { test, expect } from "../base/myFixture";
import credentials from "../testdata/loginData.json";
import DashboardPage from "../pages/dashboardPage";
import managementUnitData from "../testdata/managementUnitData.json";
import smallholdersPage from "../pages/smallholdersPage";
import UserManagementPage from "../pages/userManagementPage";

test.describe("Management Unit page verifications for RSPO Member", async () => {

    test.beforeEach(async ({ basePage }) => {
      basePage.initialize();
  })

  test('Verify New Outgrower Management Unit PQ-223', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, managementUnitPage }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToManagementUnitPage(); 
    await managementUnitPage.clickOnNewManagementUnit();
    await managementUnitPage.selectParentEntity(managementUnitData.parentEntityName);
    await managementUnitPage.selectLegalEntity(managementUnitData.legalEntityName);
    await managementUnitPage.fillManagementUnitName(managementUnitData.managementUnitName);
    await managementUnitPage.fillManagementUnitAddress(managementUnitData.muAddressStreet,managementUnitData.muAddressUnitNo, managementUnitData.muAddressState,managementUnitData.muAddressCity, managementUnitData.muAddressZip);
    await managementUnitPage.clickFirstNext();
    await managementUnitPage.clickLinkSupplyBase();
    await managementUnitPage.searchByMUnitIDForLinkingSupplyBase(managementUnitData.supplyBaseSearch1);
    await managementUnitPage.applyFilterFromLinkSupplyBase();
    await managementUnitPage.clickCheckbox();
    await managementUnitPage.clearLinkSupplyBaseSearch();
    await managementUnitPage.searchByMUnitIDForLinkingSupplyBase(managementUnitData.supplyBaseSearch2);
    await managementUnitPage.clickCheckbox();
    await managementUnitPage.applyFilterFromLinkSupplyBase();
    await managementUnitPage.clickConfirmForLinkSupplyBase();
 })

  
})