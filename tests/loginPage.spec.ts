import { test, expect } from "../base/myFixture";
import DashboardPage from "../pages/dashboardPage";
import credentials from "../testdata/loginData.json"

test.describe(" Login test cases", async () => {

test.beforeEach(async ({ page , loginPage}) => {
  await page.goto ('https://prisma-dev.agridence.com/auth/login')
})

  test('Member Login success with valid credentials for RSPO Member', async ({ page, loginPage , dashboardPage}) => {

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

})

