/// <reference types="cypress" />

import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { Login } from '../../pages/login_copag/index'

Given(`que esteja na página de login`, () => {
    Login.acessar_pagina_login()
});

When(`logar com email {string} e senha {string} valida`, (args1, args2) => {
    Login.logar_com_email_senha()
});

Then(`deverá ser direcionado para a home da loja`, () => {
    Login.validar_homepage()
});

And(`o título da página deve ser {string}`, (args1) => {
    Login.validar_o_title()
});

When(`logar com email {string} e senha {string} invalida`, (args1, args2) => {
    Login.logar_credencial_invalida()
});

Then(`o título da página deve ser {string}`, (args1) => {
    Login.validar_o_title()
});

And(`uma mensagem de erro {string} de autenticação deve aparecer`, (args1) => {
    cy.stepNoImplemented()
});
