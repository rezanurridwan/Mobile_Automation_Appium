const LoginPage = require ('./loginPage')
const { expect } = require('@wdio/globals')
const assertionPage = require('./assertion')
const userData = require('./userdata')

describe('Create new user',() => {
    beforeEach(async () => {
        await LoginPage.login(userData.userName, userData.userHeight, userData.userWeight);
    });
    it('User input valid data', async() => {
        //assertion
        await expect(assertionPage.assertTextHai).toHaveTextContaining('Hi,')
        await LoginPage.btnMeals.click()
        //assertion
        await expect(assertionPage.assertMenuMeals).toHaveTextContaining('Sangu Koneng')
        await LoginPage.btnProfile.click()
        //assertion
        await expect(assertionPage.assertMenuProfile).toHaveTextContaining('Faris')
        });
});