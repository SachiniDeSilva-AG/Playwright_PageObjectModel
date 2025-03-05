import { test, expect } from "../base/myFixture";
import credentials from "../testdata/loginData.json";
import timeBoundSearch from "../testdata/timeBoundData.json"

test.describe("Time Bound Plan verifications for RSPO Member", async () => {

  test.beforeEach(async ({ basePage }) => {
    basePage.initialize();
})

      test('Verify the existing Time Bound Plan Details under the General Information tab -> PQ-1184', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.verifyTimeBoundPlanDetails_UnderGeneralInformation("TBP25-341087", "9-5638-24-000-00", "Approved");
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



      test('Verify the data under the Supply Bases tab -> PQ-1187', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.verifyTimeBoundPlanDetails_UnderGeneralInformation("TBP25-341087", "9-5638-24-000-00", "Approved");
        await timeBoundPlanPage.navigationForSupplyBasesTab_UnderSupplyBases();
        await timeBoundPlanPage.verifyFilterSearchUsingSupplyBaseName(timeBoundSearch.supplyBaseNameSearch);
        await timeBoundPlanPage.verifyFilterSearchUsingSupplyBaseName("Disclosure2");
        await timeBoundPlanPage.verifyFilterSearchUsingSupplyBaseIDAndType(timeBoundSearch.supplyBaseIdSearch,timeBoundSearch.supplyTypeList);
        await timeBoundPlanPage.verifyFilterSearchUsingSupplyBaseIDAndType("SB25-015100", "New");

      })

      test('Verify the data under the Mills tab -> PQ-1187', async ({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.navigationForMillsTab_UnderTimeBoundPlan();
        await timeBoundPlanPage.verifyFilterSearchUsingSiteName(timeBoundSearch.siteNameSearch);
        await timeBoundPlanPage.verifyFilterSearchUsingSiteName("Mill 1 Audit POMS Sachini Go Live");
        await timeBoundPlanPage.verifyFilterSearchUsingSiteIdAndType(timeBoundSearch.siteBusinessId, timeBoundSearch.millTypeList);
        await timeBoundPlanPage.verifyFilterSearchUsingSiteIdAndType("ML25-000360", "New");
      })

      test ('Verify the justification changes from Supply Base tab -> PQ-721', async({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.navigationForSupplyBasesTab_UnderSupplyBases();
        await timeBoundPlanPage.verifyFilterSearchUsingSupplyBaseIDAndType(timeBoundSearch.supplyBaseIdSearch,timeBoundSearch.supplyTypeList);
        await timeBoundPlanPage.verifyTheJustificationForChangesForSupplyBaseAfterUpdatingTBP(timeBoundSearch.supplyBaseIdSearch,timeBoundSearch.justificationSupplyBaseId, timeBoundSearch.justificationSupplyBaseName);
      })

      test ('Verify the justification changes from Mills tab -> PQ-721', async({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.navigationForMillsTab_UnderTimeBoundPlan();
        await timeBoundPlanPage.verifyFilterSearchUsingSiteIdAndType(timeBoundSearch.siteBusinessId, timeBoundSearch.millTypeList);
        await timeBoundPlanPage.verifyTheJustificationForChangesForMillsAfterUpdatingTBP(timeBoundSearch.siteBusinessId,timeBoundSearch.justificationSiteBusinessId, timeBoundSearch.justificationPlanYear);
      })

      test ('Verify the no data message in the supply base for non existing supply base id and name-> PQ-721', async({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.navigationForSupplyBasesTab_UnderSupplyBases();
        await timeBoundPlanPage.verifySearchForNonExistingSupplyBaseIDAndSupplyBaseName(timeBoundSearch.nonExistSupplyBaseId, timeBoundSearch.nonExistingSupplyBaseName);
      })

      test ('Verify the no data message in the mills for non existing site Business id and site name-> PQ-721', async({loginPage, dashboardPage, entityManagementModule, timeBoundPlanPage}) => {
        await loginPage.userlogin(credentials.userName, credentials.passWord);
        await dashboardPage.verifytheDashboardTitle("Dashboard");
        await dashboardPage.navigatestoEntityModule();
        await entityManagementModule.navigationToTimeBoundPlanPage();
        await timeBoundPlanPage.navigationForSupplyBasesTab_UnderSupplyBases();
        await timeBoundPlanPage.verifySearchForNonExistingSupplyBaseIDAndSupplyBaseName(timeBoundSearch.nonExistSieBusinessId, timeBoundSearch.nonExistingSiteName);
      })
} )