/// <reference types="cypress" />

import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { Login } from '../../pages/login_copag/index'

Given(`que esteja na página de login`, () => {
	Login.acessar_pagina_login()
});

When(`realizar login com dados válidos`, () => {
	Login.logar_com_email_senha()
});

Then(`deverá ser direcionado para a pagina de perfil`, () => {
	Login.validar_homepage()
});

Then(`o título da página deve ser {string}`, (args1) => {
	Login.validar_o_title()
});

When(`realizar login com erro {string}`, (type) => {
	Login.logar_credencial_invalida(type)
});

Then(`a mensagem de erro deverá ser exibida {string}`, (args1) => {
	Login.mensagem_erro_login()
});