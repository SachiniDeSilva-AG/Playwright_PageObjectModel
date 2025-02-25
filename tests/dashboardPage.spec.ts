import { test, expect } from "../base/myFixture";
import dashboardPage from "../pages/dashboardPage";
import credentials from "../testdata/loginData.json"

test.describe("User Management page verifications for RSPO Member", async () => {

    test.beforeEach(async ({ page, loginPage }) => {
        await page.goto('https://prisma-dev.agridence.com/auth/login')
    })

    test('Verify the modules in the dashboard page', async ({ page, loginPage, dashboardPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord)
        await dashboardPage.verifytheDashboardTitle("Dashboard")
        await dashboardPage.verifyListOfModules();
    });

})