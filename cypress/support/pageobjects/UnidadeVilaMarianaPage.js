import UnidadeVilaMarianaElements from '../elements/UnidadeVilaMarianaElements'
const elements = new UnidadeVilaMarianaElements


// Classe dos objetos de pagina da tela da Unidade Vila Mariana


class UnidadeVilaMariana {

    // Valida que o elemento da pagina possui o titulo Vila Mariana
    ValidaTituloVilaMariana() {
        cy.get(elements.tituloVilaMariana()).should('contain', 'Vila Mariana')
    }
}

export default UnidadeVilaMariana;