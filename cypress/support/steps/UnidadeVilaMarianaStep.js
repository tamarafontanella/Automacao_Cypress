import UnidadeVilaMarianaPage from '../pageobjects/UnidadeVilaMarianaPage'
const page = new UnidadeVilaMarianaPage

// Step do teste da tela da unidade Vila Mariana

Then("devo visualizar o titulo vila mariana", () => {
    page.ValidaTituloVilaMariana();
})

