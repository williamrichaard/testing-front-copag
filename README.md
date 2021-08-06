<h1>QA Cypress Challenge for Fast-Track Compasso UOL</h1> 

<p align="center">
  <img alt="Fast-Track" src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/teststudio/telerik_teststudio_trialsection_illustration.png?sfvrsn=739b5781_1"/>
</p>

> Status do Projeto: :warning: (em desenvolvimento)

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Site testado](#site-testado)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [Como rodar os testes](#como-rodar-os-testes)

:small_blue_diamond: [Mapeamento das funcionalidades](#mapeamento-das-funcionalidades)

## Descrição do projeto 

<p align="justify">
  Descrição breve do projeto compondo um paragrafo ou dois. 
</p>

## Funcionalidades

:heavy_check_mark: Login/Cadastro

:heavy_check_mark: Search

:warning: Carrinho 

:warning: Pedido

:warning: Newsletter

## Site testado:

> https://www.copagloja.com.br


## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

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

## Mapeamento das funcionalidades

<p align="center">
  <img alt="Xmind" src="https://lh3.googleusercontent.com/uSQMp-YPnB2fVc5gQSCmEc3Lb4Z1ccDXMGTvRPNsqOuf0OQaQ55cIfJ4IlIm_8i4XY3Cd3zxb33d3trE3s_a9hqwAPU63XMbo3-6GOCMUSOgjC2vJ-vslMvN8lpXAcXtwNwBlT5wgc0fKca8ikM5sVeY4NikaNUylI0VnxQOOwhOIHs_kbu3u42he6Yho7Cxqs6hYWHvAGYXbWPR6TPEOl4d9Z1hqYoL0pxhee-uj20R6U3iAx8U3UZdFHKOJ4jbybGiaQPuFcs03xXUrORXu7H7fNpYLturDv9Zs_9LrhH6jJtELEUF6kZWMuwVx_ZsBvHWn8i_ZOOsyqrLL_jshfAdBhfroydLwpbzEVf4k43oVxtdPpeP3SEcI3kJ8qEukWStT3sLvmU6ndToO5hcTIYPTNz6sOySII_FE4mjkngmPW_pBlnSNKsJXKGLLgMxapK7dBcwz3q7tg6MukX6ME5i9LJbmEeQZROl-yWx1hyLirnzKNfT6HVBT7HT4Wv2LUETVv7N_AVAIIOclWSC7JAbZkIHK2FZeARDur5mvV6rHkktDuoOWGHbYtxxlD39ZvoRN-ywjc58ZQn8F6V1bENHeFIfKSji5xsoDJ9KRZbx4YBGyKZlLf2ZzyspvubHROUlxsNCImIMV6blwXhwdbJ6xB7DbCvZhobB8NeUFelGpCb3F67Q6lazmBLImKtrhdbNFcZP_n9Y5zGkma_d5jinYA=w1920-h791-no?authuser=0"/>
</p>

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
