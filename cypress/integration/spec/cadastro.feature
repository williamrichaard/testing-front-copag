Feature: Autenticação

    @validCadastro
    Scenario: Realizar cadastro com o email
        Given Given que esteja na página de login
        When realizar cadastro com dados validos
        And inserir o codigo valido
        Then deverá ser direcionado para a home da loja