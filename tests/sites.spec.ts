import { test, expect } from "../base/myFixture";
import dashboardPage from "../pages/dashboardPage";
import ParentEntitiesPage from "../pages/parentEntitiesPage";
import credentials from "../testdata/loginData.json";
import timeBoundSearch from "../testdata/timeBoundData.json";
import parentEntityData from "../testData/parentEntityData.json";
import sitesData from "../testData/sitesData.json";

test.describe("Sites page verifications for RSPO Member", async () => {

    test.beforeEach(async ({ basePage }) => {
      basePage.initialize();
  })
  
  test('Verify the new site creation -> PQ-101', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    //await sitesPage.selectSitesOnAssets();
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.summary);
    await sitesPage.fillSiteName(sitesData.siteName);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.siteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.fillMillCapacity(sitesData.millCapacity);
    await sitesPage.siteBusinessAdd();
    await sitesPage.verifyTheAddedBusiness();
    await sitesPage.deleteTheAddedBusiness();
  });
  
  })
  