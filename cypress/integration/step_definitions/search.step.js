/// <reference types="cypress" />

import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { Search } from '../../pages/search_copag/index'

Given(`que esteja na página home da Gopag`, () => {
    Search.acessar_site()
	//cy.visit('/')
});

When(`o usuário pesquisa por {string}`, (texto) => {
	Search.pesquisar_por_produto()
});

Then(`uma imagem de erro sem resultados é mostrada`, () => {
	Search.imagem_nenhum_resultado()
});

When(`o usuário pesquisa {string}`, (args1) => {
	Search.pesquisar_produto()
});

Then(`os produtos são listados`, () => {
	Search.lista_de_produtos()
});

And(`os resultados da pesquisa mostram os produtos relacionados a {string}`, (args1) => {
	Search.valida_texto_produto()
});
