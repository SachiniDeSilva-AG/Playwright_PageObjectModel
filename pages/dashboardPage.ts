import { expect, Locator, Page } from "@playwright/test"

export default class DashboardPage {
    readonly entity_module: Locator;
    readonly dashboard_title: Locator;
    readonly list_of_modules: Locator;


    constructor(public page: Page) {
        this.dashboard_title = page.locator('//*[@id="root"]//h6[text()="Dashboard"]');
        this.entity_module = page.locator('[data-testid="module-entity"]');
        this.list_of_modules = page.locator('//*[@id="page-id"]//div[@data-testid="navigation-items-grid"]');
    }

    async verifytheDashboardTitle(titleText: string) {
        const dashboard_txt = this.dashboard_title
        await dashboard_txt.waitFor({ state: "visible", timeout: 10000 })
        expect(dashboard_txt).toHaveText(titleText)
        console.log("-------------Dashboard page loaded.-------------")
    }


    async navigatestoEntityModule() {
        const entity_btn = this.entity_module
        await entity_btn.click({ timeout: 100000 });
        console.log("-------------User management page loaded.-------------")
    }

    async verifyListOfModules() {
        const module_grid = this.list_of_modules
        const modules = await module_grid.allInnerTexts();
        const cleanedModules = modules[0].split("\n").map(item => item.trim());
        expect(cleanedModules).toEqual(['Audit', 'Credit Trading', 'Disclosure', 'Entity Management', 'Licenses', 'Physical Trade Reporting', 'Stock Management', 'Traceability', 'Trade Management']);

    }
}