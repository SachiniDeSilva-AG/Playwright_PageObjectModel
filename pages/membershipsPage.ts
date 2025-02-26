import { Page, expect, Locator } from "@playwright/test"

export default class MembershipPage {
    readonly membership_title: Locator;
    readonly parent_entity_label: Locator;
    readonly prisma_parent_entity_id_label: Locator;
    readonly membershipCategory_text: Locator;
    readonly membershipStatus_text: Locator;




    constructor(public page: Page) {
     this.membership_title = page.locator('//*[@id="page-id"]//h1[contains(text(),"Membership No")]');
     this.parent_entity_label= page.locator('//*[@id="page-id"]//div[@data-testid="item-groupEntityName"]/div/p');
     this.prisma_parent_entity_id_label = page.locator('//*[@id="page-id"]//div[@data-testid="item-groupEntityId"]/div/p');
     this.membershipCategory_text = page.locator('//*[@id="page-id"]//div/h6[text()="Membership Category"]/following-sibling::p');
     this.membershipStatus_text = page.locator('//*[@id="page-id"]//div/h6[text()="Membership Status"]/following-sibling::p');

    }

    async verifyMembershipNo(membershiptxt: string) {
        const membership_ttl = this.membership_title
        await expect(membership_ttl).toHaveText(membershiptxt, { timeout: 50000 })
        console.log("-------------Membership page loaded.-----------")
    }

    async verifyTheParentEntity(parentEntitytxt: string) {
        const parent_entity_lbl = this.parent_entity_label
        await expect(parent_entity_lbl).toHaveText(parentEntitytxt)
        console.log("-------------Parent Entity name displayed.-----------")
    }

    async verifyTheParentEntityId(parentEntityId: string) {
        const prisma_parent_entity_id_lbl = this.prisma_parent_entity_id_label
        await expect(prisma_parent_entity_id_lbl).toHaveText(parentEntityId)
        console.log("-------------Parent Entity ID is displayed.-----------")
    }

    async verifyTheMembershipCategory(memberCategory: string) {
        const membershipCategory_txt = this.membershipCategory_text
        await expect(membershipCategory_txt).toHaveText(memberCategory)
        console.log("-------------Memebership Category is displayed.-----------")
    }

    async verifyTheMembershipStatus(memberStatus: string) {
        const membershipStatus_txt = this.membershipStatus_text
        await expect(membershipStatus_txt).toHaveText(memberStatus)
        console.log("-------------Memebership Status is displayed.-----------")
    }

}

