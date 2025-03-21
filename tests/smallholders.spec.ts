import { test, expect } from "../base/myFixture";
import credentials from "../testdata/loginData.json";
import DashboardPage from "../pages/dashboardPage";
import smallholdersData from "../testdata/smallholdersData.json";
import smallholdersPage from "../pages/smallholdersPage";
import UserManagementPage from "../pages/userManagementPage";

test.describe("Small holders page verifications for RSPO Member", async () => {

    test.beforeEach(async ({ basePage }) => {
      basePage.initialize();
  })

  test('Verify the filteration using smallholder name and smallholder ID ', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, smallholdersPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToSmallHolderPage(); 
    await smallholdersPage.searchBySmallHolderName(smallholdersData.smallholderName);
    await smallholdersPage.applyFilter();
    await smallholdersPage.verifyFilterBySmallholderName();
    await smallholdersPage.resetTheFilter();
    await smallholdersPage.searchBySmallHolderID(smallholdersData.smallholderId);
    await smallholdersPage.applyFilter();
    await smallholdersPage.verifyFilterBySmallholderId();  
  })
test('Verify the filteration using parent entity and legal entity ', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, smallholdersPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToSmallHolderPage(); 
    await smallholdersPage.searchByParentEntity(smallholdersData.parentEntityName);
    await smallholdersPage.searchByLegalEntity(smallholdersData.legalEntityForSearch);
    await smallholdersPage.applyFilter();
    await smallholdersPage.filteredResults();
    await smallholdersPage.resetTheFilter();
  })
  test('Verify the creation of a new Smallholder ', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, smallholdersPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToSmallHolderPage(); 
    await smallholdersPage.addNewSmallholder();
    await smallholdersPage.selectParentEntity(smallholdersData.parentEntityName);
    await smallholdersPage.selectLegalEntity(smallholdersData.legalEntityForCreate);
    await smallholdersPage.clickFirstNext();
    await smallholdersPage.fillSmallholderName(smallholdersData.newSmallholderName);
    await smallholdersPage.fillEmailAddress(smallholdersData.smallholderEmail);
    await smallholdersPage.fillIDNumber(smallholdersData.smallholderId);
    await smallholdersPage.selectTpNumber(smallholdersData.country, smallholdersData.telephoneNo);
    await smallholdersPage.fillSmallholderAddress(smallholdersData.shAddressStreet, smallholdersData.shAddressUnitNo, smallholdersData.shAddressState, smallholdersData.shAddressCity, smallholdersData.shAddressZip);
    await smallholdersPage.clickSecondNext();
    await smallholdersPage.verifyCreationOfNewSmallholder();
  })
  test('Verify the cancel from first step of smallholder', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, smallholdersPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToSmallHolderPage(); 
    await smallholdersPage.addNewSmallholder();
    await smallholdersPage.selectParentEntity(smallholdersData.parentEntityName);
    await smallholdersPage.selectLegalEntity(smallholdersData.legalEntityForCreate);
    await smallholdersPage.clickCancelFromFirstStep();
  })
  test('Verify the back from second step of smallholder', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, smallholdersPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToSmallHolderPage(); 
    await smallholdersPage.addNewSmallholder();
    await smallholdersPage.selectParentEntity(smallholdersData.parentEntityName);
    await smallholdersPage.selectLegalEntity(smallholdersData.legalEntityForCreate);
    await smallholdersPage.clickFirstNext();
    await smallholdersPage.fillSmallholderName(smallholdersData.newSmallholderName);
    await smallholdersPage.fillEmailAddress(smallholdersData.smallholderEmail);
    await smallholdersPage.fillIDNumber(smallholdersData.smallholderId);
    await smallholdersPage.selectTpNumber(smallholdersData.country, smallholdersData.telephoneNo);
    await smallholdersPage.fillSmallholderAddress(smallholdersData.shAddressStreet, smallholdersData.shAddressUnitNo, smallholdersData.shAddressState, smallholdersData.shAddressCity, smallholdersData.shAddressZip);
    await smallholdersPage.clickBackFromSecondStep();
  })
  test('Verify the back and cancel from second step to smallholder page', async ({loginPage , dashboardPage, userManagementPage,entityManagementModule, smallholdersPage}) => {
    await loginPage.userlogin(credentials.userName, credentials.passWord);
    await dashboardPage.verifytheDashboardTitle("Dashboard");
    await dashboardPage.navigatestoEntityModule();
    await userManagementPage.verifyUserManagementTitle("User management");
    await entityManagementModule.navigationToSmallHolderPage(); 
    await smallholdersPage.addNewSmallholder();
    await smallholdersPage.selectParentEntity(smallholdersData.parentEntityName);
    await smallholdersPage.selectLegalEntity(smallholdersData.legalEntityForCreate);
    await smallholdersPage.clickFirstNext();
    await smallholdersPage.fillSmallholderName(smallholdersData.newSmallholderName);
    await smallholdersPage.fillEmailAddress(smallholdersData.smallholderEmail);
    await smallholdersPage.fillIDNumber(smallholdersData.smallholderId);
    await smallholdersPage.selectTpNumber(smallholdersData.country, smallholdersData.telephoneNo);
    await smallholdersPage.fillSmallholderAddress(smallholdersData.shAddressStreet, smallholdersData.shAddressUnitNo, smallholdersData.shAddressState, smallholdersData.shAddressCity, smallholdersData.shAddressZip);
    await smallholdersPage.clickBackFromSecondStep();
    await smallholdersPage.clickCancelFromFirstStep();
  })

})