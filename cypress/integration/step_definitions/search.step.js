/// <reference types="cypress" />
import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'

Given(`que esteja na página home da Gopag`, () => {
	cy.visit('/')
});

When(`o usuário pesquisa por {string}`, (args1) => {
	console.log(args1);
	return true;
});

Then(`uma imagem de erro sem resultados é mostrada`, () => {
	return true;
});

Then(`nenhum produto é listado`, () => {
	return true;
});

When(`o usuário pesquisa {string}`, (args1) => {
	console.log(args1);
	return true;
});

Then(`os produtos são listados`, () => {
	return true;
});

Then(`os resultados da pesquisa mostram os produtos relacionados a {string}`, (args1) => {
	console.log(args1);
	return true;
});
