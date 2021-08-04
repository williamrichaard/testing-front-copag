import Base from '../../pages/base_page'
import { Cadastro as cd } from './elements'

export class Cadastro extends Base {

    static acessar_pagina_login() {
        cy.visit('https://www.copagloja.com.br/login')
        cy.get(cd.BTN_MODAL_CADASTRO).click()
    }
    static cadastrar_com_email() {
        cy.get(cd.INPUT_EMAIL_CADASTRO).invoke('attr', 'type').should('contain', 'email')
        cy.get(cd.INPUT_EMAIL_CADASTRO).type('wrichaard@hotmail.com')
        cy.wait(3000)
        super.clickOnElement(cd.BTN_CADASTRO)
    }

    static inserir_codigo_email() {
        cy.get(cd.INPUT_CODE_ACESS).invoke('attr', 'type').should('contain', 'text')
        cy.pause()
        cy.wait(3000)
        super.clickOnElement(cd.BTN_CADASTRO_ACESS)
    }

    static validar_homepage() {
        cy.url().should('eq', 'https://www.copagloja.com.br/')
    }
}