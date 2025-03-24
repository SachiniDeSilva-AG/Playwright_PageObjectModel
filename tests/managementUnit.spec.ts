import { test, expect } from "../base/myFixture";
import credentials from "../testdata/loginData.json";
import DashboardPage from "../pages/dashboardPage";
import smallholdersData from "../testdata/smallholdersData.json";
import smallholdersPage from "../pages/smallholdersPage";
import UserManagementPage from "../pages/userManagementPage";

test.describe("Management Unit page verifications for RSPO Member", async () => {

    test.beforeEach(async ({ basePage }) => {
      basePage.initialize();
  })

  test('Verify  ', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, managementUnitPage }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToSmallHolderPage(); 
  })

  
})