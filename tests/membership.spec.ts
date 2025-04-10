import { test, expect } from "../base/myFixture";
import dashboardPage from "../pages/dashboardPage";
import MembershipPage from "../pages/membershipsPage";
import credentials from "../testdata/loginData.json";
import userSearch from "../testdata/userData.json"

test.describe("Memberships page verifications for RSPO Member", async () => {

    test.beforeEach(async ({ basePage }) => {
        basePage.initialize();
    })

    test('Verify the Membership Details -> PQ-1183', async ({ page, loginPage , dashboardPage, userManagementPage, membershipPage, entityManagementModule}) => {

        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await userManagementPage.verifyUserManagementTitle("User management");
        await entityManagementModule.navigationToMembershipPage();
        await membershipPage.verifyMembershipPage("Membership Details");
        await membershipPage.verifyTheMembershipCategory("ORDINARY");
        await membershipPage.verifyTheParentEntity("Sachini Go Live Pte Ltd");
        await membershipPage.verifyTheParentEntityId("9-5638-24-000-00");
      });

})