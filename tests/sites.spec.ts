import { test, expect } from "../base/myFixture";
import credentials from "../testdata/loginData.json";
import sitesData from "../testData/sitesData.json";

test.describe("Sites page verifications for RSPO Member", async () => {

    test.beforeEach(async ({ basePage }) => {
      basePage.initialize();
  })
  
  test('Verify the new site creation for Mill -> PQ-101', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.millSummary);
    await sitesPage.fillSiteName(sitesData.millSiteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.millSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.fillMillCapacity(sitesData.millCapacity);
    await sitesPage.siteBusinessAdd();
    await sitesPage.verifyTheAddedBusiness();
    await sitesPage.deleteTheAddedBusiness();
  });

  test('Verify the new site creation for Crusher -> PQ-702', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.crusherSummary);
    await sitesPage.fillSiteName(sitesData.crusherSiteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.crusherSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.siteBusinessAdd();
    await sitesPage.verifyTheAddedBusiness();
    await sitesPage.deleteTheAddedBusiness();
  });

  test('Verify the new site creation for Refinery -> PQ-703', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.refinerySummary);
    await sitesPage.fillSiteName(sitesData.refinerySiteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.refinerySiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.siteBusinessAdd();
    await sitesPage.verifyTheAddedBusiness();
    await sitesPage.deleteTheAddedBusiness();
  });

  test('Verify the new site creation for Product Manufacturer -> PQ-704', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.productSummary);
    await sitesPage.fillSiteName(sitesData.productSiteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.productSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.siteBusinessAdd();
    await sitesPage.verifyTheAddedBusiness();
    await sitesPage.deleteTheAddedBusiness();
  });

  test('Verify the new site creation for Oleochemical -> PQ-705', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.oleochemicalSummary);
    await sitesPage.fillSiteName(sitesData.oleochemicalSiteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.oleochemicalSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.siteBusinessAdd();
    await sitesPage.verifyTheAddedBusiness();
    await sitesPage.deleteTheAddedBusiness();
  });

  test('Verify the new site creation for Trader -> PQ-706', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.traderSummary);
    await sitesPage.fillSiteName(sitesData.treaderSiteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.traderSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.siteBusinessAdd();
    await sitesPage.verifyTheAddedBusiness();
    await sitesPage.deleteTheAddedBusiness();
  });

  test('Verify the new site creation for Distributer -> PQ-707', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.distributorSummary);
    await sitesPage.fillSiteName(sitesData.distributorSiteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.distributorSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.siteBusinessAdd();
    await sitesPage.verifyTheAddedBusiness();
    await sitesPage.deleteTheAddedBusiness();
  });

  test('Add new Site with more than 1 of the same Site Business -> PQ-700', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.millSummary);
    await sitesPage.fillSiteName(sitesData.millSiteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.millSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.fillMillCapacity(sitesData.millCapacity);
    await sitesPage.siteBusinessAdd();
    await sitesPage.verifyTheAddedBusiness();
    await sitesPage.addNewSiteBusinessForExistingBusiness();
    await sitesPage.selectSiteBusiness(sitesData.millSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.fillMillCapacity(sitesData.millCapacity);
    await sitesPage.siteBusinessAdd();
    await sitesPage.deleteTheAddedBusiness();
  });

  test('Add new Site with more than 1 of different Site Business -> PQ-701', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.millSummary);
    await sitesPage.fillSiteName(sitesData.millSiteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.millSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.fillMillCapacity(sitesData.millCapacity);
    await sitesPage.siteBusinessAdd();
    await sitesPage.verifyTheAddedBusiness();
    await sitesPage.addNewSiteBusinessForExistingBusiness();
    await sitesPage.selectSiteBusiness(sitesData.crusherSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.siteBusinessAdd();
    await sitesPage.deleteTheAddedBusiness();
  });

  test('Add new Site until Step 1 and then click ‘Cancel’ button -> PQ-711', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.clickCancelAndNavigateToThePreviousPage();
  });

  test('Add new Site until Step 2, click ‘Back’ button and then click ‘Cancel’ button -> PQ-712', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.clickBackAndNavigateToThePreviousPage();
    await sitesPage.clickCancelAndNavigateToThePreviousPage();
  });

  test('Add new Site until Step 3 and then click ‘Cancel’ button, ‘Back’ button and the click ‘Cancel’ button -> PQ-713', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.crusherSummary);
    await sitesPage.fillSiteName(sitesData.crusherSiteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.clickBackFromThirdStep();
    await sitesPage.clickBackAndNavigateToThePreviousPage();
    await sitesPage.clickCancelAndNavigateToThePreviousPage();
  });

  test('Create a site without a business', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.clickOnNewSite();
    await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    await sitesPage.navigatesToNextPage();
    await sitesPage.fillSiteSummary(sitesData.siteSummary);
    await sitesPage.fillSiteName(sitesData.siteName);
    await sitesPage.selectCountryOfRegistration(sitesData.country);
    await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    await sitesPage.selectAssociation(sitesData.siteAssociation);
    await sitesPage.navigatesToNextPage();
    await sitesPage.clickConfirmForSiteCreation();
  });

  test('Edit all fields under General Information tab -> PQ-718', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.searchBySiteID(sitesData.siteID);
    await sitesPage.applyFilter();
    await sitesPage.verifySiteFilter();
    await sitesPage.clickOnFilteredResult();    
    await sitesPage.updateSiteName(sitesData.updateSiteName);
    await sitesPage.updateSiteSummary(sitesData.updateSummary);
    await sitesPage.updateCountryOfRegistration(sitesData.updateCountry);
    await sitesPage.updateSiteAddress(sitesData.updateSiteAddressStreet, sitesData.updateSiteAddressUnitNo, sitesData.updateSiteAddressCity, sitesData.updateSiteAddressState, sitesData.updateSiteAddressZip);
    await sitesPage.updateAssociation(sitesData.updateSiteAssociation);
    await sitesPage.saveUpdatedChanges();
  });

  test('Verify adding new Site Business and updating the business -> PQ-737', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    //await sitesPage.clickOnNewSite();
    // await sitesPage.selectParentEntityAndOwnership(sitesData.parentEntityName, sitesData.ownership);
    // await sitesPage.navigatesToNextPage();
    // await sitesPage.fillSiteSummary(sitesData.millSummary);
    // await sitesPage.fillSiteName(sitesData.millSiteName);
    // await sitesPage.selectCountryOfRegistration(sitesData.country);
    // await sitesPage.fillSiteAddress(sitesData.siteAddressStreet, sitesData.siteAddressUnitNo, sitesData.siteAddressState, sitesData.siteAddressCity, sitesData.siteAddressZip);
    // await sitesPage.selectAssociation(sitesData.siteAssociation);
    // await sitesPage.navigatesToNextPage();
    // await sitesPage.addNewSiteBusiness();
    // await sitesPage.selectSiteBusiness(sitesData.millSiteBusiness);
    // await sitesPage.fillLatitude(sitesData.latitude);
    // await sitesPage.fillLongitude(sitesData.longitude);
    // await sitesPage.fillMillCapacity(sitesData.millCapacity);
    // await sitesPage.siteBusinessAdd();
    // await sitesPage.verifyTheAddedBusiness();
    await sitesPage.searchBySiteID(sitesData.siteID);
    await sitesPage.applyFilter();
    await sitesPage.verifySiteFilter();
    await sitesPage.clickOnFilteredResult();   
    await sitesPage.navigationForSiteBusinessTab_UnderSiteDetails();
    await sitesPage.addNewSiteBusiness();
    await sitesPage.selectSiteBusiness(sitesData.millSiteBusiness);
    await sitesPage.fillLatitude(sitesData.latitude);
    await sitesPage.fillLongitude(sitesData.longitude);
    await sitesPage.fillMillCapacity(sitesData.millCapacity);
    await sitesPage.siteBusinessAdd();
    await sitesPage.editSiteBusinessDetails();
    await sitesPage.updateLatitude(sitesData.updateLatitude);
    await sitesPage.updateLongitude(sitesData.updateLongitude);
    await sitesPage.updateMillCapacity(sitesData.updateMillCapacity);
    await sitesPage.saveUpdatedChanges();
    await sitesPage.deleteTheAddedBusiness();
  });
  test('Search for existing Site Name and click Apply Filters button -> PQ-103', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.searchBySiteName(sitesData.siteNameSearch); 
  });
  test('Select Parent Entity and Ownership (Legal Entity) filters and click Apply Filters button -> PQ-106', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.searchByParentEntity(sitesData.parentEntity);
    await sitesPage.searchByLegalEntity(sitesData.legalEntity);
    await sitesPage.applyFilter();
    await sitesPage.verifyFilterByLegalAndParentEntities();
  });
  test('Expand Site Name -> PQ-351', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, sitesPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToAssetsPage(); 
    await sitesPage.searchByParentEntity(sitesData.parentEntity);
    await sitesPage.searchByLegalEntity(sitesData.legalEntity);
    await sitesPage.applyFilter();
    await sitesPage.verifyFilterByLegalAndParentEntities();
    await sitesPage.expandTheToggleOfSiteName();
    await sitesPage.verifyDataInTheSiteTable(); // verify the expected results
    
  });
  


  
  })
  