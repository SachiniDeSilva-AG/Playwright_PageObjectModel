import { Page, expect, Locator } from "@playwright/test"

export default class EntityManagementModule {
    readonly left_listcontainer: Locator;

    constructor(public page: Page) {

        this.left_listcontainer = page.locator('//*[@id="side-nav-layout"]//ul[@data-testid="list-container"]');

    }

    async navigationToMembershipPage( ) {
        const listcontainermembership = this.left_listcontainer
        const itemToClick = listcontainermembership.locator('//h6[text()="Memberships"]'); 
        await itemToClick.click();
        console.log("-------------Membership page loaded.-----------")
    }

    async navigationToTimeBoundPlanPage( ) {
        const listcontainermembership = this.left_listcontainer
        const itemToClick = listcontainermembership.locator('//h6[text()="Time Bound Plan"]'); 
        await itemToClick.click();
        console.log("-------------Time Bound Plan page loaded.-----------")
    }

    async navigationToParentEntitiesPage( ) {
        const listcontainermembership = this.left_listcontainer
        const itemToClick = listcontainermembership.locator('//h6[text()="Parent Entities"]'); 
        await itemToClick.click();
        console.log("-------------Parent Entities page loaded.-----------")
    }
}