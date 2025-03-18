import { test, expect } from "../base/myFixture";
import dashboardPage from "../pages/dashboardPage";
import ParentEntitiesPage from "../pages/parentEntitiesPage";
import credentials from "../testdata/loginData.json";
import timeBoundSearch from "../testdata/timeBoundData.json";
import parentEntityData from "../testData/parentEntityData.json";
import sitesData from "../testData/sitesData.json";

test.describe("Supply bases page verifications for RSPO Member", async () => {
    test.beforeEach(async ({ basePage }) => {
      basePage.initialize();
  })

  test('Verify the filteration using supply base name and supply ID ', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
})

 
})