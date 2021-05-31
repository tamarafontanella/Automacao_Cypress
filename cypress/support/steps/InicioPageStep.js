import InicioPage from '../pageobjects/InicioPage'
const page = new InicioPage

// Step do teste da tela da teka de inicio

Given("acesso o site Fleury", () => {
    page.acessarSite();
})

When("clico a area de unidades", () => {
    page.clicarBotaoUnidades();
})
