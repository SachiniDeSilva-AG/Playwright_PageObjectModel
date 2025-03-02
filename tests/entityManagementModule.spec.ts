import { test, expect } from "../base/myFixture";
import dashboardPage from "../pages/dashboardPage";
import credentials from "../testdata/loginData.json";
import EntityManagementModule from "../pages/entityManagementModule";

test.describe("User Management page verifications for RSPO Member", async () => {

    test.beforeEach(async ({ basePage }) => {
        basePage.initialize();
    })

    // test('Verify the details in the membership page', async ({ page, loginPage, dashboardPage, userManagementPage, entityManagementModule, membershipPage }) => {
    //     await loginPage.userlogin(credentials.userName, credentials.passWord)
    //     await dashboardPage.verifytheDashboardTitle("Dashboard")
    //     await dashboardPage.navigatestoEntityModule()
    //     await entityManagementModule.navigationToMembershipPage();
    //     await membershipPage.verifyMembershipNo("Membership No 9-5638-24-000-00");
    // });

})