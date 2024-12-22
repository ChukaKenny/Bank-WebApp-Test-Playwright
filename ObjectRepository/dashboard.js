class dashboard {

    constructor(page){
        this.page = page
        this.financialOverviewHeader = page.getByRole("heading", { name: "Financial Overview" })
        this.loggedUsername = page.locator(".logged-user-name")
        this.loggedUserRole = page.locator(".logged-user-role")
        this.transactionTables = page.locator("tbody tr");
        this.Pending = 0;
        this.Declined = 0;
        this.Complete = 0;
        this.dataSet;
        this.customerNameLocator = page.locator(".logged-user-name").textContent();
        this.customerName;  
        this.outputString;  
    }

    async verifyUserLogin(){
        await this.financialOverviewHeader.isVisible();
        await expect(this.loggedUsername).toContainText("Jack Gomez");
        await expect(this.loggedUserRole).toContainText("Customer");
    }

    async getUserTransactionData(){
        this.dataSet = await this.transactionTables.locator("td").allTextContents()
    }

    async processUserTransactionData(){
         
              for (let data of this.dataSet){
                
                    if (data.includes("Pending")){
                        this.Pending++
                    }
      
                    if (data.includes("Declined")){
                        this.Declined++
                    }
      
                    if (data.includes("Complete")){
                        this.Complete++
                    }
      
              }
          this.customerNameLocator = await this.page.locator(".logged-user-name").textContent();
          this.customerName = await this.customerNameLocator.substring(16,27)
          this.outputString = await `${this.customerName} has ${this.Complete} completed transactions, ${this.Declined} declined transactions & ${this.Pending} pending transactions.`;
    }

    async logSummary(){
        console.log(await this.outputString)  
    }

}

module.exports = {dashboard}
const {expect} = require("@playwright/test")