import UnidadesListaElements from '../elements/UnidadesListaElements'
const elements = new UnidadesListaElements

// Classe dos objetos de pagina da tela de Lista de Unidades

class UnidadesListaPage {

    // Clica no filtro facilidade
    clicarSelectUnidades() {
        cy.get(elements.selectFacilidade()).click()
    }

    clicarCheckboxAcessibilidade() {

        // Seleciona o checkbox Acessibilidade
        cy.get(elements.checkboxAcessibilidade()).click()
    }

    clicarVerDetalhes() {

        // Clica no elemento onde esta escrito Vila Mariana no card dessa unidade
        cy.get(elements.botaoVerDetalhes()).click()
    }

}

export default UnidadesListaPage;