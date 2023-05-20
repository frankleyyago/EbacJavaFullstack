/// <reference types="cypress" />

describe('Teste de inclusão, edição e remoção de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar novo contato', () => {
        cy.get('input[type="text"]').type('José da Silva')
        cy.get('input[type="email"]').type('josesilva@outlook.com')
        cy.get('input[type="tel"]').type('12 3456-7890')
        cy.get('.adicionar').click()
    })

    it('Deve editar o contato recem criado', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="email"]').type('.br')
        cy.get('.alterar').click()
    })

    it('Deve deletar os dois contatos existentes', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})