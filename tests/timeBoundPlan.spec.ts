import { test, expect } from "../base/myFixture";
import dashboardPage from "../pages/dashboardPage";
import credentials from "../testdata/loginData.json";
import timeBoundSearch from "../testdata/timeBoundData.json"

test.describe("Time Bound Plan verifications for RSPO Member", async () => {

    test.beforeEach(async ({ page, loginPage }) => {
        await page.goto('https://prisma-dev.agridence.com/auth/login')
      })

      test('Verify the existing Time Bound Plan Details under the General Information tab -> PQ-1184', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.verifyTimeBoundPlanDetails_UnderGeneralInformation("TBP25-341087", "9-5638-24-000-00", "Approved", "12-Feb-2025 11:52:26");
      });

      test('Verify the Update Time Bound Plan section -> PQ-1185', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.verifyUpdateTMPlanID("Update Time Bound Plan 37");
      });

      test('Verify the update of Supply Base inside Update Time Bound Plan -> PQ-1185', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.verifyUpdateTMPlanID("Update Time Bound Plan 37");
        await timeBoundPlanPage.verifyUpdatingOfSupplyBase(timeBoundSearch.tbpSupplyBaseNameSearch, "Edit Existing Supply Base - Disclosure3", "2027", "New Changes SupplyBase");
      });

      test('Verify the update of Mills inside Update Time Bound Plan -> PQ-1185', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.verifyUpdateTMPlanID("Update Time Bound Plan 37");
        await timeBoundPlanPage.verifyUpdatingOfMills(timeBoundSearch.tbpSiteName, "Edit Existing Mill - ML25-000360", "2026", "New Changes Mills");
      });



      test('Verify the data under the Supply Bases tab', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.verifyTimeBoundPlanDetails_UnderGeneralInformation("TBP25-341087", "9-5638-24-000-00", "Approved","12-Feb-2025 11:52:26");
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