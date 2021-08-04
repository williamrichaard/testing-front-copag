/// <reference types="cypress" />

import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { Cadastro } from '../../pages/cadastro_copag/index'

Given(/^Given que esteja na página de login$/, () => {
	Cadastro.acessar_pagina_login()
});

When(/^realizar cadastro com dados validos$/, () => {
	Cadastro.cadastrar_com_email()
});

When(/^inserir o codigo valido$/, () => {
	Cadastro.inserir_codigo_email()
});

Then(/^deverá ser direcionado para a home da loja$/, () => {
	Cadastro.validar_homepage()
});