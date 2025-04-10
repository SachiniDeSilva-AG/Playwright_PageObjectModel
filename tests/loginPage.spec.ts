import { test, expect } from "../base/myFixture";
import credentials from "../testdata/loginData.json"

test.describe.serial("Login test cases for RSPO Member", async () => {

  test.beforeEach(async ({ basePage }) => {
    basePage.initialize();
})

  test('Member Login success with valid credentials for RSPO Member -> PQ-1176', async ({ page, loginPage , dashboardPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord)
    await dashboardPage.verifytheDashboardTitle("Dashboard")
  });

  test('Member Login unsuccess with invalid password', async ({ page,  loginPage , dashboardPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.invalidpassWord)
    await loginPage.verifyErrorMessageTrigger("Invalid username or password.")
  });

  test('Member Login unsuccess with invalid username', async ({ page, loginPage }) => {
    await loginPage.userlogin(credentials.invaliduserName, credentials.passWord)
    await loginPage.verifyErrorMessageTrigger("Invalid username or password.")
  });

  test('Member Logout successfully from the application', async ({ page, loginPage, dashboardPage }) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await loginPage.verifyTheLogout();
  });
})

test.describe.serial("Login test cases for RSPO Secretatiat", async () => {
  test.beforeEach(async ({ basePage }) => {
    basePage.initialize();
})

  test('Member Login success with valid credentials for RSPO Secretariat', async ({ page, loginPage , dashboardPage}) => {
    await loginPage.userlogin(credentials.secretatriatUserName, credentials.secretatriatpassWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
  });
})

