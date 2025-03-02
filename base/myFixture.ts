import {test as base} from "@playwright/test";
import LoginPage from '../pages/loginPage';
import DashboardPage from "../pages/dashboardPage";
import UserManagementPage from "../pages/userManagementPage";
import EntityManagementModule from "../pages/entityManagementModule";
import MembershipPage from "../pages/membershipsPage";
import TimeBoundPlanPage from "../pages/timeBoundPage";
import ParentEntitiesPage from "../pages/parentEntitiesPage";
import BasePage from "../pages/basePage";


type pages = {
    loginPage : LoginPage;
    dashboardPage : DashboardPage;
    userManagementPage : UserManagementPage;
    entityManagementModule : EntityManagementModule;
    membershipPage : MembershipPage;
    timeBoundPlanPage : TimeBoundPlanPage;
    parentEntitiesPage : ParentEntitiesPage;
    basePage: BasePage;
}

const testPages = base.extend<pages>({

    loginPage : async ({page}, use) => {
        await use(new LoginPage(page))
    },
    dashboardPage : async ({page}, use) => {
        await use(new DashboardPage(page))
    },
    userManagementPage : async ({page}, use) => {
        await use(new UserManagementPage(page))
    },
    entityManagementModule : async ({page}, use) => {
        await use(new EntityManagementModule(page))
    },
    membershipPage : async({page}, use) => {
        await use(new MembershipPage(page))
    },
    timeBoundPlanPage : async({page}, use) => {
        await use(new TimeBoundPlanPage(page))
    },
    parentEntitiesPage : async({page}, use) => {
        await use(new ParentEntitiesPage(page))
    },
    basePage : async({page,baseURL}, use) => {
        await use(new BasePage(page,`${baseURL}`))
    }

})

export const test = testPages;
export const expect = testPages.expect;

