import { Page, expect, Locator, selectors } from "@playwright/test"

export default class managementUnitPage {
    readonly newManagementUnit_button : Locator;
    readonly createNewManagementUnit_title : Locator;
    readonly muParentEntity_field : Locator;
    readonly muOwnership_field : Locator;
    readonly muName_field : Locator;
    readonly muAddressStreet : Locator;
    readonly muAddressUnitNo : Locator;
    readonly muAddressState : Locator;
    readonly muAddressCity : Locator;
    readonly muAddressZip : Locator;
    readonly muFirstNext_button : Locator;
    readonly muFirstCancel_button : Locator;
    readonly muLinkSiteBusinessOwn_button : Locator;
    readonly muLinkSupplyBase_button : Locator;
    readonly muLinkThirdPartySupplyBase_button : Locator;
    readonly muLinkSmallholderPlot_button : Locator;
    readonly muLinkThirdPartySmallholderPlot_button : Locator;
    readonly muBack_button : Locator;
    readonly muConfirm : Locator;
    readonly muSearchBar : Locator;
    readonly muParentEntity_filter : Locator;
    readonly muOwnership_filter : Locator;

    constructor(public page: Page) {
        this.newManagementUnit_button = page.locator('//button[text()="New Management Unit"]');
        this.createNewManagementUnit_title = page.locator('//h1[text()="Create New Management Unit"]');
        this.muParentEntity_field = page.locator('//div[@id="entityDetails.groupEntity"]');
        this.muOwnership_field = page.locator('//div[@id="entityDetails.legalEntity"]');
        this.muName_field = page.locator('//input[@id="managementUnitDetails.muName"]');
        this.muAddressStreet = page.locator('//input[@id="managementUnitDetails.address.street"]');
        this.muAddressUnitNo = page.locator('//input[@id="managementUnitDetails.address.unitNo"]');
        this.muAddressState = page.locator('//input[@id="managementUnitDetails.address.stateProvince"]');
        this.muAddressCity = page.locator('//input[@id="managementUnitDetails.address.city"]');
        this.muAddressZip = page.locator('//input[@id="managementUnitDetails.address.zip"]');
        this.muFirstNext_button = page.locator('//button[@data-testid="form-button-primary-Next"]');
        this.muFirstCancel_button = page.locator('//button[@data-testid="form-button-left-Cancel"]');
        this.muLinkSiteBusinessOwn_button = page.locator('//button[@data-testid="section-link-site-action-btn"]');
        this.muLinkSupplyBase_button = page.locator('//button[@data-testid="section-link-supply-base-action-btn"]');
        this.muLinkThirdPartySupplyBase_button = page.locator('//button[@data-testid="section-link-tp-supply-base-action-btn"]');
        this.muLinkSmallholderPlot_button = page.locator('//button[@data-testid="section-link-smallholder-plot-action-btn"]');
        this.muLinkThirdPartySmallholderPlot_button = page.locator('//button[@data-testid="section-link-tp-smallholder-plot-action-btn"]');
        this.muBack_button = page.locator('//button[@data-testid="form-button-back"]');
        this.muConfirm = page.locator('//button[@data-testid="form-button-submit"]');
        this.muSearchBar = page.locator('//input[@id="filterSearch"]');
        this.muParentEntity_field = page.locator('//div[@id="filterEntity"]');
        this.muOwnership_filter = page.locator('combobox-filterLegalEntity');
}


}