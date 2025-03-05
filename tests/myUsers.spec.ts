import { test, expect } from "../base/myFixture";
import credentials from "../testdata/loginData.json";
import userSearch from "../testdata/userData.json"

test.describe("User Management page verifications for RSPO Member", async () => {

  test.beforeEach(async ({ basePage }) => {
    basePage.initialize();
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
    await userManagementPage.verifytheAddExistingUserUsingEmail("Add existing user", userSearch.emailSearch);
  });

  test('Verify adding the existing user by PrismaID -> PQ-1180', async ({ loginPage, userManagementPage, dashboardPage }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifytheAddExistingUserUsingPrismaId("Add existing user", userSearch.prismaIdSearch);
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

  test('Verify leave this page in the add existing user dialog, after adding the email address -> PQ-686', async ({loginPage, userManagementPage, dashboardPage, page }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await userManagementPage.verifyCloseAndLeaveThePageOfAddExistingUserUsingEmailID("Add existing user", userSearch.emailSearch);
    await userManagementPage.verifyUserManagementTitle("User management");
  })

  test('Verify stay on this page in the add existing user dialog, after adding the email address -> PQ-685', async ({loginPage, userManagementPage, dashboardPage, page }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await userManagementPage.verifyCloseAndStayOnThePageOfAddExistingUserUsingEmailID("Add existing user", userSearch.emailSearch);
    await userManagementPage.verifyUserManagementTitle("User management");
  })

  test('Verify leave this page in the inviting new user dialog, after adding the email address -> PQ-676', async ({loginPage, userManagementPage, dashboardPage, page }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyCloseAndLeaveThePageOfInvitingNewUserUserUsingEmailID("Invite New User");
  })

  test('Verify Back button in the add existing user dialog, after adding the email address -> PQ-678', async ({loginPage, userManagementPage, dashboardPage, page }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await userManagementPage.verifyBackOfAddExistingUserUsingEmailID("Add existing user", userSearch.emailSearch);
    await userManagementPage.verifyUserManagementTitle("User management");
  })
  

  test('Verify results not found in the add existing user, when the user is not an existing user -> PQ-46 ', async ({loginPage, userManagementPage, dashboardPage, page }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await userManagementPage.verifyNoResultsForAddExistingUserUsingEmailID("Add existing user", userSearch.notExsitingEmailId);

  })

} )