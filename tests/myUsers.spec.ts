import { test, expect } from "../base/myFixture";
import dashboardPage from "../pages/dashboardPage";
import credentials from "../testdata/loginData.json";
import userSearch from "../testdata/userData.json"

test.describe("User Management page verifications for RSPO Member", async () => {

  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('https://prisma-dev.agridence.com/auth/login')
  })

  test('Verify the navigation to user management page -> PQ-1177', async ({ loginPage, dashboardPage, userManagementPage }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord)
    await dashboardPage.verifytheDashboardTitle("Dashboard")
    await dashboardPage.navigatestoEntityModule()
    await userManagementPage.verifyUserManagementTitle("User management")
  });

  test('Verify the search bar using email,prisma_user_id,full_name -> PQ-1178', async ({ loginPage, dashboardPage, userManagementPage }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord)
    await dashboardPage.verifytheDashboardTitle("Dashboard")
    await dashboardPage.navigatestoEntityModule()
    await userManagementPage.verifyFilterSearchUsingEmail(userSearch.emailSearch)
    await userManagementPage.verifyFilterSearchUsingEmail("qatstprisma+golivesachini@gmail.com");
    await userManagementPage.verifyFilterSearchUsingPrismaId(userSearch.prismaIdSearch)
    await userManagementPage.verifyFilterSearchUsingPrismaId("U25-1875384")
    await userManagementPage.verifyFilterSearchUsingFullName(userSearch.nameSearch)
    await userManagementPage.verifyFilterSearchUsingFullName("Sachini_golive deSilva")
  });

  test('Verify adding the existing user by email -> PQ-1179', async ({ loginPage, userManagementPage, dashboardPage }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifytheAddExistingUserUsingEmail("Add existing user");
  });

  test('Verify adding the existing user by PrismaID -> PQ-1180', async ({ loginPage, userManagementPage, dashboardPage }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifytheAddExistingUserUsingEmail("Add existing user");
  });

  test('Verify inviting a new user -> PQ-1181', async ({ loginPage, userManagementPage, dashboardPage }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyInvitingNewUser("Invite New User");
  });

  test('Verify removing added user -> PQ-1182', async ({ loginPage, userManagementPage, dashboardPage }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await userManagementPage.selectLastEmailAndRemove();
  });

})
