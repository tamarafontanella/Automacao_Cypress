import UnidadesListaPage from '../pageobjects/UnidadesListaPage'
const page = new UnidadesListaPage

// Step do teste da tela da lista de unidades

And("clico no combobox de filtro por facilidade", () => {
    page.clicarSelectUnidades();
})

And("seleciono a opcao de acessibilidade", () => {
    page.clicarCheckboxAcessibilidade();
})

And("clico em ver detalhes", () => {
    page.clicarVerDetalhes();
})