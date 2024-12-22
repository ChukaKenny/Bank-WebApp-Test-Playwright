class loginPage {

    constructor(page){
        this.page = page
        this.username = "JackGomez"
        this.password = "Customer151#"
        this.usernameInputBox = page.getByPlaceholder("Enter your username")
        this.passwordInputBox = page.getByPlaceholder("Enter your password")
        this.signInButton = page.getByRole("link", { name: "Sign in" })
    }

    async visitUrl(){
        await this.page.goto("https://demo.applitools.com/")
    }

    async Login(){
        await this.usernameInputBox.fill(this.username) 
        await this.passwordInputBox.fill(this.password)
        await this.signInButton.click()
    }


}

module.exports = {loginPage}