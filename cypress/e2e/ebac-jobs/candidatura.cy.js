/// <reference types="cypress" />

describe('Testes para a págiga de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Yago Frankley')
        cy.get('input[name="email"]').type('frankleyyago@outlook.com')
        cy.get('input[name="telefone"]').type('31 123123123')
        cy.get('input[name="endereco"]').type('Rua do Jubileu doido, nº123')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"').select("outros")
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
}) 