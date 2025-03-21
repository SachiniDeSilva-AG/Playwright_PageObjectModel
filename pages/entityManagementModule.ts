import { Page, expect, Locator } from "@playwright/test"

export default class EntityManagementModule {
    readonly left_listcontainer: Locator;
    readonly assetExpanded_button: Locator;
    readonly sites: Locator;
    readonly supplyBases : Locator;
    readonly smallholders : Locator;

    constructor(public page: Page) {

        this.left_listcontainer = page.locator('//*[@id="side-nav-layout"]//ul[@data-testid="list-container"]');
        this.assetExpanded_button = page.locator('//*[@id="side-nav-layout"]//div[@class="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded css-4gz52r"][@aria-expanded="true"]');
        this.sites = page.locator('//*[@id="side-nav-layout"]//div[@class="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded css-4gz52r"][@aria-expanded="true"]/following-sibling::div//h6[text()="Sites"]');
        this.supplyBases = page.locator('//*[@id="side-nav-layout"]//div[@class="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded css-4gz52r"][@aria-expanded="true"]/following-sibling::div//h6[text()="Supply Bases"]');
        this.smallholders = page.locator('//*[@id="side-nav-layout"]//div[@class="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded css-4gz52r"][@aria-expanded="true"]/following-sibling::div//h6[text()="Smallholders"]');
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

    async navigationToAssetsPage( ) {
        // const listcontainermembership = this.left_listcontainer
        // const itemToClick = listcontainermembership.locator('//h6[text()="Sites"]'); 
        // await itemToClick.click();
        // console.log("-------------Assets option loaded.-----------");

        const assetExpanded_btn = this.assetExpanded_button;
        const isExpanded = await assetExpanded_btn.count() > 0;
        const site_btn = this.sites

        if(isExpanded){
           // const site_btn = this.sites
            await site_btn.click();
            console.log("-------------Site page is loaded.-----------");
        }
        else{
            const assetOption = this.page.locator('//*[@id="side-nav-layout"]//h6[text()="Assets"]');
            await assetOption.click();
        }
        await assetExpanded_btn.waitFor({ state: 'visible' });
        //const site = assetExpanded_btn.locator('/following-sibling::div//h6[text()="Sites"]'); 
        await site_btn.click();
        console.log("-------------Site page is loaded.-----------");
    }
    async navigationToSupplyBasePage( ) {
        const assetExpanded_btn = this.assetExpanded_button;
        const isExpanded = await assetExpanded_btn.count() > 0;
        const supplyBases_btn = this.supplyBases

        if(isExpanded){
            await supplyBases_btn.click();
            console.log("-------------Supply Bases page is loaded.-----------");
        }
        else{
            const assetOption = this.page.locator('//*[@id="side-nav-layout"]//h6[text()="Assets"]');
            await assetOption.click();
        }
        await assetExpanded_btn.waitFor({ state: 'visible' });
        //const site = assetExpanded_btn.locator('/following-sibling::div//h6[text()="Sites"]'); 
        await supplyBases_btn.click();
        console.log("-------------Supply Bases page is loaded.-----------");
    }
    async navigationToSmallHolderPage( ) {
        const assetExpanded_btn = this.assetExpanded_button;
        const isExpanded = await assetExpanded_btn.count() > 0;
        const smallholders_btn = this.smallholders

        if(isExpanded){
            await smallholders_btn.click();
            console.log("-------------Small holder page is loaded.-----------");
        }
        else{
            const assetOption = this.page.locator('//*[@id="side-nav-layout"]//h6[text()="Assets"]');
            await assetOption.click();
        }
        await assetExpanded_btn.waitFor({ state: 'visible' });
        //const site = assetExpanded_btn.locator('/following-sibling::div//h6[text()="Sites"]'); 
        await smallholders_btn.click();
        console.log("-------------Small holder page is loaded.-----------");
    }
}