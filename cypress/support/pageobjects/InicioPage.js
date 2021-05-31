import InicioElements from '../elements/InicioElements'
const elements = new InicioElements
const url = Cypress.config("baseUrl")
const nomeMenu = 'Unidades'

// Classe dos objetos de pagina da tela de Inicio

class InicioPage {

    // Acessa o site Fleury
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão Unidades
    clicarBotaoUnidades() {
        cy.contains(nomeMenu).click()
    }
}

export default InicioPage;