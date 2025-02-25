import { test, expect } from "../base/myFixture";
import dashboardPage from "../pages/dashboardPage";
import credentials from "../testdata/loginData.json";
import timeBoundSearch from "../testdata/timeBoundData.json"

test.describe("Time Bound Plan verifications for RSPO Member", async () => {

    test.beforeEach(async ({ page, loginPage }) => {
        await page.goto('https://prisma-dev.agridence.com/auth/login')
      })

      test('Verify the existing Time Bound Plan Details under the General Information tab', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {

        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.verifyTimeBoundPlanDetails_UnderGeneralInformation("TBP25-341087", "9-5638-24-000-00");

      });

      test('Verify the data under the Supply Bases tab', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.verifyTimeBoundPlanDetails_UnderGeneralInformation("TBP25-341087", "9-5638-24-000-00");
        await timeBoundPlanPage.navigationForSupplyBasesTab_UnderSupplyBases();
        await timeBoundPlanPage.verifyFilterSearchUsingSupplyBaseName(timeBoundSearch.supplyBaseNameSearch);
        await timeBoundPlanPage.verifyFilterSearchUsingSupplyBaseName("Disclosure2");
        await timeBoundPlanPage.verifyFilterSearchUsingSupplyBaseID(timeBoundSearch.supplyBaseIdSearch);
        await timeBoundPlanPage.verifyFilterSearchUsingSupplyBaseID("SB25-015100");

      })

      test('Verify the data under the Mills tab', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.navigationForMillsTab_UnderTimeBoundPlan();
        await timeBoundPlanPage.verifyFilterSearchUsingSiteName(timeBoundSearch.siteNameSearch);
        await timeBoundPlanPage.verifyFilterSearchUsingSiteName("Mill 1 Audit POMS Sachini Go Live");
        await timeBoundPlanPage.verifyFilterSearchUsingSiteId(timeBoundSearch.siteBusinessId);
        await timeBoundPlanPage.verifyFilterSearchUsingSiteId("ML25-000360");
      })


} )