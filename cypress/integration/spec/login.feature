Feature: Autenticação

    Como usuário, desejo poder acessar minha conta para ver detalhes da conta

    Background:
        Given que esteja na página de login

    @validLogin
    Scenario: Tentativa de login com credenciais válidas
        When realizar login com dados válidos
        Then deverá ser direcionado para a pagina de perfil
        And o título da página deve ser "Copag Loja"

    @invalidLogin
    Scenario Outline: Tentativa de login com credenciais inválidas
        When realizar login com erro '<erro>'
        Then a mensagem de erro deverá ser exibida '<mensagem>'

        Examples:
            | erro            | mensagem                  |
            | senha invalida  | Usuário e/ou senha errada |
            | email em branco | Email inválido            |
            | senha em branco | Preencha este campo.      |