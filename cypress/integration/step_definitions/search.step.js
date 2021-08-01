/// <reference types="cypress" />
import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'

Given(`que esteja na página home da Gopag`, () => {
	cy.visit('/')
});
