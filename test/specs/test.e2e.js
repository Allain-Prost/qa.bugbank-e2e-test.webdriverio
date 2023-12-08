const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('[TC-01] - Should log in with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('allainteste@gmail.com', 'teste123@')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(`Usuário ou senha inválido.\nTente novamente ou verifique suas informações!`)
        //const textoDoElemento = await SecurePage.flashAlert.getText();
        //console.log('Texto do elemento:', textoDoElemento);
    })
})

