Feature: Login

    Como usuário, desejo poder acessar minha conta para ver detalhes da conta

    Background:
        Given que esteja na página de login

    Scenario: Tentativa de login com credenciais válidas
        When logar com email "<email>" e senha "<senha>" valida
        Then deverá ser direcionado para a home da loja
        And o título da página deve ser "Loja Copag"

    @regression
    Scenario Outline: Tentativa de login com credenciais inválidas
        When logar com email "<email>" e senha "<senha>" invalida
        Then o título da página deve ser "Login - Minha Loja"
        And uma mensagem de erro "<error>" de autenticação deve aparecer

        Examples:
            | email               | senha    | error                     |
            | dev_teste@gmail.com | teste123 | Usuário e/ou senha errada |
            |                     | teste123 | Email inválido            |