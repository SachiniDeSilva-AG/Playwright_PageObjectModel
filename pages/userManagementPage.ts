import { Page, expect, Locator } from "@playwright/test"

export default class UserManagementPage { 
    readonly usermanagement_text: Locator;
    readonly searchBar_text: Locator;
    readonly apply_btn: Locator;
    readonly reset_btn: Locator;
    readonly userEmailfilterResult: Locator;
    readonly useridfilterResult: Locator;
    readonly fullnamefilterResult: Locator;
    readonly addexistingUser_button: Locator;
    readonly addexistingUser_text: Locator;
    readonly addexistingUserNext_bttton: Locator;
    readonly searchbyidoremail_text: Locator;
    readonly selectemailoption: Locator;
    readonly addExistingUserAdd_button: Locator;
    readonly addExistingUserConfirm_button: Locator;
    readonly addExistingUserFeedback_msg: Locator;
    readonly inviteUser_button: Locator;
    readonly inviteUser_text: Locator;
    readonly inviteUserNext_button: Locator;
    readonly searchInviteUserEmail_text: Locator;
    readonly invite_button: Locator;
    readonly checkUser_checkbox: Locator;
    readonly remove_button: Locator;
    readonly inviteSuccess_text: Locator;
    readonly inviteOkay_button: Locator;
    readonly removeUser_button: Locator;
    readonly itemsOnFirstPage: Locator;
    readonly dialogClose_button: Locator;
    readonly dialogLeaveThisPage: Locator;
    readonly dialogStayOnThePage: Locator;
    readonly dialogBack_button: Locator;
    readonly addExistingNoResults_text: Locator;


    constructor(public page: Page) {

        this.usermanagement_text = page.locator('//*[@id="page-id"]//h1');
        this.searchBar_text = page.getByPlaceholder('Search');
        this.apply_btn = page.getByTestId('form-button-primary-Apply filters');
        this.reset_btn = page.getByTestId('form-button-destructive-Reset');
        this.userEmailfilterResult = page.locator('//div[@aria-rowindex="2"]/div[@data-field="email"]');//'//*[@id="page-id"]//div[@role="cell"][@data-field="email"]/div[@title="qatstprisma+golivesachini@gmail.com"]');
        this.useridfilterResult = page.locator('//div[@aria-rowindex="2"]/div[@data-field="userId"]');
        this.fullnamefilterResult = page.locator('//div[@aria-rowindex="2"]/div[@data-field="fullName"]');
        this.addexistingUser_button = page.getByTestId('add-exist-user-btn');
        this.addexistingUser_text = page.locator('.MuiPaper-root.MuiDialog-paperWidthMd.MuiDialog-paperFullWidth h4');
        this.addexistingUserNext_bttton = page.getByTestId('form-button-primary-Next');
        this.searchbyidoremail_text = page.getByPlaceholder('Search by Prisma User ID or');
        this.selectemailoption = page.getByRole('option', { name: 'U25-1875384, qatstprisma+' });
        this.addExistingUserAdd_button = page.getByRole('button', { name: 'Add' });
        this.addExistingUserConfirm_button = page.getByRole('button', { name: 'Confirm' });
        this.addExistingUserFeedback_msg = page.locator('//*[@data-testid="feedback-message"]//div[text()]');
        this.inviteUser_button = page.getByTestId('invite-new-users-btn');
        this.inviteUser_text = page.locator('//*[@role="dialog"]//h4[@data-testid="typography-h4"]');
        this.searchInviteUserEmail_text = page.getByPlaceholder('Email addresses, press ENTER');
        this.inviteUserNext_button = page.getByTestId('form-button-primary-Next');
        this.invite_button = page.getByTestId('form-button-primary-Invite');
        this.inviteSuccess_text = page.locator('//h4[@data-testid="typography-h4"][text()="Invitations sent successfully"]');
        this.inviteOkay_button = page.locator('//div[@role="dialog"]//button[text()="Okay"]');
        this.remove_button = page.getByRole('button', { name: 'Remove' });
        this.removeUser_button = page.locator('//div[@data-testid="delete-users-confirmation"]//button[text()="Remove"]');
        this.itemsOnFirstPage = page.locator('//*[@class="MuiDataGrid-virtualScrollerRenderZone css-1inm7gi"]/div[@class="MuiDataGrid-row"]');
        this.dialogClose_button = page.locator('//div/button[@data-testid="close-dialog-btn"]');
        this.dialogLeaveThisPage = page.locator('//div/button[text()="Leave this page"]');
        this.dialogStayOnThePage = page.locator('//div/button[text()="Stay on this page"]');
        this.dialogBack_button = page.locator('//button[text()="Back"]');
        this.addExistingNoResults_text= page.locator('//div/p[@data-testid="typography-body2"][text()]');
    }

    async verifyUserManagementTitle(usermanagement_text: string) {
        const usermanagement_ttl = this.usermanagement_text
        await expect(usermanagement_ttl).toHaveText(usermanagement_text, { timeout: 100000 })
        console.log("-------------User Management page loaded.-----------")
    }

    async verifyFilterSearchUsingEmail(email: string) {
        const searchBar_txt = this.searchBar_text
        await searchBar_txt.fill(email)
        console.log("-------------User name " + email + " added.-------------");
    }
    async applyFilter() {
        const applyfilter = this.apply_btn
        await this.apply_btn.click({ timeout: 30000 });
        console.log("-------------Apply button clicked.-------------");
    }
    async verifyFilterResultsForUserEmail(){
        const userfilterRslt = this.userEmailfilterResult;
        //const userEmail = userfilterRslt.nth(1);
        await expect(userfilterRslt).toBeVisible;
        console.log("-------------Filtered email displayed.-------------");
    }
    async applyReset() {
        const resetbtn = this.reset_btn
        await resetbtn.click();
        console.log("-------------Reset button clicked.-------------");
    }

    async verifyFilterSearchUsingPrismaId(userId: string) {
        const searchBar_txt = this.searchBar_text
        await searchBar_txt.fill(userId);
        console.log("-------------User ID " + userId + " added.-------------");
    }
    async verifyFilterResultsForPrismaId(){    
        const useridfilterRslt = this.useridfilterResult
        //const prismauserId = useridfilterRslt.nth(1);
        await expect(useridfilterRslt).toBeVisible();
        console.log("-------------Filtered userId displayed.-------------");
    }

    async verifyFilterSearchUsingFullName(fullname: string) { //break the methods
        const searchBar_txt = this.searchBar_text
        await searchBar_txt.fill(fullname);
        console.log("-------------User name " + fullname + " added.-------------");
    }
    async verifyFilterResultsForFullName(){   
        const fullnamefilterRslt = this.fullnamefilterResult
       // const fullName = userfilterRslt.nth(3);
        await expect(fullnamefilterRslt).toBeVisible();
        console.log("-------------Filtered fullname displayed.-------------");
}
    async verifytheAddExistingUserUsingEmail(addexistinguser: string,emailsearch) {
        const addexistingUser_btn = this.addexistingUser_button
        await addexistingUser_btn.click();
        const addexistingUser_txt = this.addexistingUser_text
        await expect(addexistingUser_txt).toHaveText(addexistinguser)
        console.log("---------Add existing user popup displayed.---------");

        const addexistingUserNext_btn = this.addexistingUserNext_bttton
        await addexistingUserNext_btn.click({ force: true });

        const searchbyidoremail_txt = this.searchbyidoremail_text
        await searchbyidoremail_txt.fill(emailsearch, { timeout: 30000 });
        await searchbyidoremail_txt.press('Enter')
        console.log("---------Search results displayed for email search.---------");
        await this.selectemailoption.click();
        await this.addExistingUserAdd_button.click();
        const addExistingUserConfirm_btn = this.addExistingUserConfirm_button
        await addExistingUserConfirm_btn.click({ timeout: 20000 });
        const addExistUserFeedback_msg = this.addExistingUserFeedback_msg
        await expect(addExistUserFeedback_msg).toHaveText(/New users added/);
    }

    async verifytheAddExistingUserUsingPrismaId(addexistinguser: string, userid) {
        const addexistingUser_btn = this.addexistingUser_button
        await addexistingUser_btn.click();
        const addexistingUser_txt = this.addexistingUser_text
        await expect(addexistingUser_txt).toHaveText(addexistinguser)
        console.log("---------Add existing user popup displayed.---------");

        const addexistingUserNext_btn = this.addexistingUserNext_bttton
        await addexistingUserNext_btn.click({ force: true });

        const searchbyidoremail_txt = this.searchbyidoremail_text
        await searchbyidoremail_txt.fill(userid, { timeout: 30000 });
        await searchbyidoremail_txt.press('Enter')
        await this.selectemailoption.click();
        console.log("---------Search results displayed for prismaId search.---------")
        await this.addExistingUserAdd_button.click();
        const addExistingUserConfirm_btn = this.addExistingUserConfirm_button
        await addExistingUserConfirm_btn.click({ timeout: 20000 });
        const addExistUserFeedback_msg = this.addExistingUserFeedback_msg
        await expect(addExistUserFeedback_msg).toHaveText(/New users added/);
    }

    async verifyInvitingNewUser(inviteuser: string) {
        const inviteUser_btn = this.inviteUser_button
        await inviteUser_btn.waitFor({ state: 'visible' });
        await inviteUser_btn.click();
        const inviteUser_txt = this.inviteUser_text
        await inviteUser_txt.waitFor({ state: 'visible' });
        await expect(inviteUser_txt).toHaveText(inviteuser)
        console.log("---------Invite user popup displayed.---------")

        await this.inviteUserNext_button.click({ force: true });

        let emailCounter = 1;
        function getDayOfYear(): number {
            const start = new Date(new Date().getFullYear(), 0, 0);
            const diff = new Date().getTime() - start.getTime();
            const oneDay = 1000 * 60 * 60 * 24;
            const dayOfYear = Math.floor(diff / oneDay);
            return dayOfYear;
        }

        function generateEmail(): string {
            const dayOfYear = getDayOfYear();  // Get the current day of the year
            emailCounter++;
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

    // Combine day of the year, current time, and email counter
    const email = `qatstprisma+sachini${dayOfYear}_${year}${month}${day}_${hours}${minutes}${seconds}_${emailCounter}@gmail.com`;

    return email;
        }

        const searchInviteUserEmail_txt = this.searchInviteUserEmail_text
        const newEmail = generateEmail();  // Get the new email
        console.log(`Generated new email: ${newEmail}`);
        await searchInviteUserEmail_txt.fill(newEmail, { timeout: 30000 });

        await searchInviteUserEmail_txt.press('Enter')
        console.log("---------Search results displayed for email search.---------")
        const invite_btn = this.invite_button
        await invite_btn.click();

        const inviteSuccess_txt = this.inviteSuccess_text
        await inviteSuccess_txt.waitFor({ state: 'visible' });
        await expect(inviteSuccess_txt).toHaveText("Invitations sent successfully");
        console.log("---------Invitation success displayed.---------")

        const inviteOkay_btn = this.inviteOkay_button
        await inviteOkay_btn.click();
        console.log("---------Invite User dialog box closed.---------");
    }

    async selectLastEmailAndRemove() {
        await this.page.waitForSelector('//*[@id="page-id"]//div[@class="MuiDataGrid-row"]');

        const emailRows = await this.page.locator('//*[@id="page-id"]//div[@class="MuiDataGrid-row"]').elementHandles();

        if (emailRows.length > 0) {
            // Get the last row
            const lastRow = emailRows[emailRows.length - 1];

            // Extract the email text from the last row
            const lastEmail = await lastRow.evaluate(node => node.textContent?.trim() || '');

            const checkbox = await lastRow.$('input[type="checkbox"]');
            if (checkbox) {
                // Ensure it's not already checked before checking it
                const isChecked = await checkbox.isChecked();
                if (!isChecked) {
                    await checkbox.check();
                    console.log(`Checked the checkbox for: ${lastEmail}`);
                } else {
                    console.log(`Checkbox was already checked for: ${lastEmail}`);
                }
            } else {
                console.log(`Checkbox not found for: ${lastEmail}`);
            }
        } else {
            console.log("No emails found.");
        }
         const userRemove_btn = this.remove_button
         await userRemove_btn.click();
         const removeUser_btn = this.removeUser_button
         await removeUser_btn.click();
        console.log("---------Remove User from the list.---------");
    }
    
    async verifyCloseAndLeaveThePageOfAddExistingUserUsingEmailID(addexistinguser: string, emailsearch) {
        const addexistingUser_btn = this.addexistingUser_button
        await addexistingUser_btn.click();
        const addexistingUser_txt = this.addexistingUser_text
        await expect(addexistingUser_txt).toHaveText(addexistinguser)
        console.log("---------Add existing user popup displayed.---------")

        const addexistingUserNext_btn = this.addexistingUserNext_bttton
        await addexistingUserNext_btn.click({ force: true });

        const searchbyidoremail_txt = this.searchbyidoremail_text
        await searchbyidoremail_txt.fill(emailsearch, { timeout: 30000 });
        await searchbyidoremail_txt.press('Enter')
        console.log("---------Search results displayed for email search.---------")
        await this.selectemailoption.click();

        const addExistingClose_btn = this.dialogClose_button;
        await addExistingClose_btn.click();

        const addExistingLeavePage = this.dialogLeaveThisPage;
        await addExistingLeavePage.click();
        console.log("---------Navigated to the User Management page.---------");
    }
    async verifyCloseAndStayOnThePageOfAddExistingUserUsingEmailID(addexistinguser: string, emailsearch) {
        const addexistingUser_btn = this.addexistingUser_button
        await addexistingUser_btn.click();
        const addexistingUser_txt = this.addexistingUser_text
        await expect(addexistingUser_txt).toHaveText(addexistinguser);
        console.log("---------Add existing user popup displayed.---------")

        const addexistingUserNext_btn = this.addexistingUserNext_bttton
        await addexistingUserNext_btn.click({ force: true });

        const searchbyidoremail_txt = this.searchbyidoremail_text
        await searchbyidoremail_txt.fill(emailsearch, { timeout: 30000 });
        await searchbyidoremail_txt.press('Enter')
        console.log("---------Search results displayed for email search.---------")
        await this.selectemailoption.click();

        const addExistingClose_btn = this.dialogClose_button;
        await addExistingClose_btn.click();
        
        const addExistingStayOnPage = this.dialogStayOnThePage;
        await addExistingStayOnPage.click();
        await expect(addexistingUser_txt).toHaveText(addexistinguser);
        console.log("---------Stay on the same page.---------");
    }

    async verifyCloseAndLeaveThePageOfInvitingNewUserUserUsingEmailID(inviteuser: string) {
        const inviteUser_btn = this.inviteUser_button
        await inviteUser_btn.waitFor({ state: 'visible' });
        await inviteUser_btn.click();
        const inviteUser_txt = this.inviteUser_text
        await inviteUser_txt.waitFor({ state: 'visible' });
        await expect(inviteUser_txt).toHaveText(inviteuser)
        console.log("---------Invite user popup displayed.---------")

        await this.inviteUserNext_button.click({ force: true });

        let emailCounter = 1;
        function getDayOfYear(): number {
            const start = new Date(new Date().getFullYear(), 0, 0);
            const diff = new Date().getTime() - start.getTime();
            const oneDay = 1000 * 60 * 60 * 24;
            const dayOfYear = Math.floor(diff / oneDay);
            return dayOfYear;
        }
        function generateEmail(): string {
            const dayOfYear = getDayOfYear();  // Get the current day of the year
            emailCounter++;
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

    // Combine day of the year, current time, and email counter
    const email = `qatstprisma+sachini${dayOfYear}_${year}${month}${day}_${hours}${minutes}${seconds}_${emailCounter}@gmail.com`;

    return email;
        }
        const searchInviteUserEmail_txt = this.searchInviteUserEmail_text
        const newEmail = generateEmail();  // Get the new email
        console.log(`Generated new email: ${newEmail}`);
        await searchInviteUserEmail_txt.fill(newEmail, { timeout: 30000 });

        await searchInviteUserEmail_txt.press('Enter')
        console.log("---------Search results displayed for email search.---------")

        const newUserClose_btn = this.dialogClose_button;
        await newUserClose_btn.click();

        const newUserLeavePage = this.dialogLeaveThisPage;
        await newUserLeavePage.click();
        console.log("---------Navigated to the User Management page.---------");
} 

async verifyBackOfAddExistingUserUsingEmailID(addexistinguser: string, emailsearch) {
    const addexistingUser_btn = this.addexistingUser_button
    await addexistingUser_btn.click();
    const addexistingUser_txt = this.addexistingUser_text
    await expect(addexistingUser_txt).toHaveText(addexistinguser);
    console.log("---------Add existing user popup displayed.---------")

    const addexistingUserNext_btn = this.addexistingUserNext_bttton
    await addexistingUserNext_btn.click({ force: true });

    const searchbyidoremail_txt = this.searchbyidoremail_text
    await searchbyidoremail_txt.fill(emailsearch, { timeout: 30000 });
    await searchbyidoremail_txt.press('Enter')
    console.log("---------Search results displayed for email search.---------")
    await this.selectemailoption.click();

    const addExistingBack_btn = this.dialogBack_button;
    await addExistingBack_btn.click();
    await expect(addexistingUser_txt).toHaveText(addexistinguser);
    console.log("---------Stay on the Add Existing user page.---------");
}
async verifyNoResultsForAddExistingUserUsingEmailID(addexistinguser: string, notExistingEmail) {
    const addexistingUser_btn = this.addexistingUser_button
    await addexistingUser_btn.click();
    const addexistingUser_txt = this.addexistingUser_text
    await expect(addexistingUser_txt).toHaveText(addexistinguser);
    console.log("---------Add existing user popup displayed.---------")

    const addexistingUserNext_btn = this.addexistingUserNext_bttton
    await addexistingUserNext_btn.click({ force: true });

    const searchbyidoremail_txt = this.searchbyidoremail_text
    await searchbyidoremail_txt.fill(notExistingEmail, { timeout: 30000 });
    await searchbyidoremail_txt.press('Enter');
    const addExistingNoResults_txt = this.addExistingNoResults_text;
    await expect(addExistingNoResults_txt).toBeVisible();
    console.log("---------No Results found error displayed.---------")
    

}
}