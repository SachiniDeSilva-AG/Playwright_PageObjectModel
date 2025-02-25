import {expect, Locator, Page} from "@playwright/test"

export default class LoginPage {
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly login_button: Locator;
    readonly error_text: Locator;


    constructor(public page: Page) {

        this.username_textbox = page.getByPlaceholder('Enter email address')
        this.password_textbox = page.getByPlaceholder('Enter password')
        this.login_button = page.getByTestId('form-button-primary-Log in')
        this.error_text = page.locator('//*[@id="page-id"]//div[text()="Invalid username or password."]')
    }

    async userlogin(userName:string, passWord:string){
        await this.username_textbox.fill(userName)
        console.log("-------------User name "+userName+" added.-------------")
        await this.password_textbox.fill(passWord)
        console.log("-------------Password "+passWord+" added.-------------")
        await this.login_button.click()
        console.log("-------------Logged in and navigated to the Dashboard page.-------------")
    }

    async verifyErrorMessageTrigger(message:string){
        const errorMessage=this.error_text
        await errorMessage.waitFor({state:"visible",timeout:5000})
        expect(errorMessage).toHaveText(message)
        console.log("-------------Error message triggered.-------------")
    }
}
