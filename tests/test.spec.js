const { test, expect } = require("@playwright/test");
const {loginPage} = require("../ObjectRepository/loginPage")
const {dashboard} = require("../ObjectRepository/dashboard")


test("Transaction Log", async ({ page }) => {

  const LoginPage = new loginPage(page)
  const Dashboard = new dashboard(page)

  await LoginPage.visitUrl()
  await LoginPage.Login()
  await Dashboard.verifyUserLogin()
  await Dashboard.getUserTransactionData()
  await Dashboard.processUserTransactionData()
  await Dashboard.logSummary()
  
});