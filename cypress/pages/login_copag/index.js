import Base from '../../pages/base_page'
import { Login as lg } from './elements'

const faker = require('faker');

faker.locale = 'pt_BR';

export class Login extends Base {

    static acessar_pagina_login() {
        cy.visit('https://www.copagloja.com.br/login')
        cy.get(lg.BTN_MODAL_LOGIN).click()
    }

    static logar_com_email_senha() {
        cy.get(lg.INPUT_EMAIL).invoke('attr', 'type').should('contain', 'email')
        cy.get(lg.INPUT_EMAIL).type("wrichaard@hotmail.com")
        cy.get(lg.INPUT_SENHA).invoke('attr', 'type').should('contain', 'password')
        cy.get(lg.INPUT_SENHA).type("Cleane#94")
        cy.wait(3000)
        super.clickOnElement(lg.BTN_LOGIN)
    }

    static validar_homepage() {
        cy.url().should('eq', 'https://www.copagloja.com.br/')
    }

    static validar_o_title() {
        cy.title().should('be.equal', 'Loja Copag')
    }

    static logar_credencial_invalida() {
        const email = faker.internet.email();
        const password = faker.internet.password()
        cy.get(lg.INPUT_EMAIL).type(email)
        cy.get(lg.INPUT_SENHA).type(password)
        cy.wait(3000)
        super.clickOnElement(lg.BTN_LOGIN)
    }
}