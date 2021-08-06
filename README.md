<h1>QA Cypress Challenge for Fast-Track Compasso UOL</h1> 

<p align="center">
  <img alt="Fast-Track" src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/teststudio/telerik_teststudio_trialsection_illustration.png?sfvrsn=739b5781_1"/>
</p>

> Status do Projeto: :warning: (em desenvolvimento)

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
  Descrição breve do projeto compondo um paragrafo ou dois. 
</p>

## Funcionalidades

:heavy_check_mark: Login/Cadastro

:heavy_check_mark: Search

:heavy_check_mark: Carrinho 

:heavy_check_mark: Pagamento 

## Site testado:

> https://www.copagloja.com.br


## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

:warning: [Docker Desktop](https://docs.docker.com/docker-for-windows/install/)

...

Liste todas as dependencias e libs que o usuário deve ter instalado na máquina antes de rodar a aplicação 

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/williamrichaard/testing-front-copag.git
```
Acesse a pasta do projeto no terminal/cmd:

```
cd testing-front-copag
```

Instale as dependecias:

```
npm install
```

Execute o teste da aplicação:

```
npm run cy:open
```

## Como rodar os testes

Executar o teste da aplicação:

```
npm run cy:open
```

Gerar o html report dos testes:

```
npm run cy:report
```

Limpar o html report dos testes:

```
npm run cy:clear
```

## Casos de Uso

Explique com mais detalhes como a sua aplicação poderia ser utilizada. O uso de **gifs** aqui seria bem interessante. 

Exemplo: Caso a sua aplicação tenha alguma funcionalidade de login apresente neste tópico os dados necessários para acessá-la.

## Linguagens, dependencias e libs utilizadas :books:

- [Javascript](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Faker](https://www.npmjs.com/package/Faker)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [jsonschema](https://www.npmjs.com/package/jsonschema)
- [rimraf](https://www.npmjs.com/package/rimraf)
- [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
- [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)

## Resolvendo Problemas :exclamation:

O cypress não aceita que o ```type()``` seja vazio. E para os testes de login era necessário que o campo fosse vazio. Nesse caso foi feito um command para que o teste funcionasse:

```javascript
Cypress.Commands.overwrite('type', (originalFn, subject, str, options) => {
    if (str !== '') {
        return originalFn(subject, str, options)
    }
    return subject
})
```

## Tarefas em aberto

:memo: Automatização da funcionalidade Carrinho 

:memo: Automatização da funcionalidade Pagamento 

:memo: Tarefa 3 

## Desenvolvedores/Contribuidores :octocat:

| [<img src="https://avatars.githubusercontent.com/u/55960615?v=4" width=115><br><sub>William Richard</sub>](https://github.com/williamrichaard)
| :---: |

## Como contribuir para o projeto 💪

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

## Licença 

The [MIT License](https://github.com/williamrichaard/testing-front-copag/blob/main/LICENSE) (MIT)

Copyright :copyright: 2021 - QA Cypress Challenge for Fast-Track Compasso UOL
