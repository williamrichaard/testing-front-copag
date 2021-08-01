import Base from '../../pages/base_page'
import { Search as src } from './elements'

export class Search extends Base {

    static acessar_site() {
        cy.visit('/')
    }

    static pesquisar_por_produto(texto) {
        cy.get(src.INPUT_PESQUISA, { timeout: 60000 }).type("digimon");
        super.clickOnElement(src.BTN_PESQUISA)
    }
}