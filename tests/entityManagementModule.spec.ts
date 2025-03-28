import { test, expect } from "../base/myFixture";
import dashboardPage from "../pages/dashboardPage";
import credentials from "../testdata/loginData.json";
import EntityManagementModule from "../pages/entityManagementModule";

test.describe("User Management page verifications for RSPO Member", async () => {

    test.beforeEach(async ({ basePage }) => {
        basePage.initialize();
    })

})