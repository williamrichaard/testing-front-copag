import Base from '../../pages/base_page'
import { Search as src } from './elements'

export class Search extends Base {

    static acessar_site() {
        cy.visit('/')
    }

    static pesquisar_por_produto(texto) {
        cy.get(src.INPUT_PESQUISA).type("digimon");
        super.clickOnElement(src.BTN_PESQUISA)
    }

    static imagem_nenhum_resultado() {
        cy.get(src.IMG_ERROR).should('be.visible');
    }

    static pesquisar_produto() {
        cy.get(src.INPUT_PESQUISA).type("pokemon");
        super.clickOnElement(src.BTN_PESQUISA)
    }

    static lista_de_produtos() {
        cy.get(src.CATALOGO_PRODUTOS).should('be.visible');
    }

    static valida_texto_produto() {
        cy.get(src.VALID_TEXT_PRODUTO).title('contain', 'pokemon');
    }
}