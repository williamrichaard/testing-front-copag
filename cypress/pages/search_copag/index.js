import Base from '../../pages/base_page'

export class Search extends Base {

    static acessar_site(){
        cy.visit('/')
    }
}