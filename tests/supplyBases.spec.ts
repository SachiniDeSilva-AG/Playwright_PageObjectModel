import { test, expect } from "../base/myFixture";
import credentials from "../testdata/loginData.json";
import supplyBaseData from "../testData/supplyBaseData.json";
import supplyBasePage from "../pages/supplyBasePage";

test.describe("Supply bases page verifications for RSPO Member", async () => {
    test.beforeEach(async ({ basePage }) => {
      basePage.initialize();
  })

  test('Verify the filteration using supply base name and supply ID ', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, supplyBasePage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToSupplyBasePage(); 
    await supplyBasePage.searchBySupplyBaseName(supplyBaseData.supplyName);
    await supplyBasePage.applyFilter();
    await supplyBasePage.verifySupplyBaseNameFilter();
    await supplyBasePage.resetTheFilter();
    await supplyBasePage.searchBySupplyBaseID(supplyBaseData.supplyId);
    await supplyBasePage.applyFilter();
    await supplyBasePage.verifySupplyBaseIdFilter();
    await supplyBasePage.resetTheFilter();
})
test('Verify the filteration using parent entity and legal entity ', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, supplyBasePage}) => {
  await loginPage.userlogin(credentials.userName, credentials.passWord);
  await dashboardPage.verifytheDashboardTitle("Dashboard");
  await dashboardPage.navigatestoEntityModule();
  await userManagementPage.verifyUserManagementTitle("User management");
  await entityManagementModule.navigationToSupplyBasePage(); 
  await supplyBasePage.searchBySupplyBaseID(supplyBaseData.supplyBaseId);
  await supplyBasePage.searchByParentEntity(supplyBaseData.parentEntityName);
  await supplyBasePage.searchByLegalEntity(supplyBaseData.legalEntity);
  await supplyBasePage.applyFilter();
  await supplyBasePage.verifyFilteredBasedOnParentAndLegalEntities();
  await supplyBasePage.resetTheFilter();
})

 
})