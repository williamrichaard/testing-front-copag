Feature: Pesquisa
    Como um visitante do site de comércio eletrônico
    Quero pesquisar produtos
    Para que eu possa encontrar rapidamente o que procuro

    Background:
        Given que esteja na página home da Gopag

    Scenario: Pesquisar um produto que não existe
        When o usuário pesquisa por "digimon"
        Then uma imagem de erro sem resultados é mostrada 
        And nenhum produto é listado 

    Scenario: Pesquisar um produto que existe
        When o usuário pesquisa "pokemon"
        Then os produtos são listados
        And os resultados da pesquisa mostram os produtos relacionados a "pokemon"