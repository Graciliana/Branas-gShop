# Sistema de vendas online - Branas-gShop

## Visão geral

Vamos implementar um sistema de vendas online com a possibilidade de realizar pedidos com múltiplos itens, cada um deles com uma quantidade variável, calculando o frete, os impostos, aplicando um cupom de desconto e ainda interagindo com o estoque. Além disso teremos ainda fluxos de pagamento e cancelamento do pedido realizado. Para começar, faremos um projeto estruturado de forma simples, faça do jeito que você souber, depois vamos ir refatorando juntos.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Branas - gShop**
| :label: Tecnologias | javaScript, html, css, Node.js, typescript
| :rocket: URL         | <https://url-deploy.com.br>
| :fire: Desafio     |  <https://url-do-desafio.com.br>

## Projeto - Parte 01

## Testes

1 - Deve criar um pedido com 3 produtos (com descrição, preço e quantidade) e calcular o valor total
2 - Deve criar um pedido com 3 produtos, associar um cupom de desconto e calcular o total (percentual sobre o total do pedido)
3 - Não deve criar um pedido com cpf inválido (lançar algum tipo de erro)

## Considere

  . Utilizar e refatorar o algoritmo de validação de cpf:
  <https://github.com/rodrigobranas/cccat7_refactoring/blob/master/src/example2/cpfBefore.ts>

## Sugestões

- Faça a modelagem da forma que desejar e não se preocupe por enquanto, vamos implementar juntos na aula seguinte com influências de DDD e Clean Architecture
- Utilize a sua linguagem e biblioteca de teste de sua preferência
- Devem existir no mínimo 2 arquivos, um de teste e outro que é a aplicação
- Como mecanismo de persistência você pode utilizar um banco de dados, um array em memória, um arquivo, qualquer coisa que desejar
- Como entrada você pode utilizar uma API HTTP, um CLI ou qualquer outro mecanismo que permita a entrada dos dados
- Tente seguir com disciplina, criando primeiro um teste que falha, depois fazendo e teste passar e refatorando

## Como funciona o algoritmo do CPF?

<https://www.macoratti.net/alg_cpf.htm>

## Disclaimer

Este repositório foi criado com o intuito de colocar em prática conhecimentos adquiridos no curso de Clean Code e Clean Architecture do Rodrigo Branas Turma 10
<https://app.branas.io/public/products/bf60d5e1-2af4-4d5d-8173-40944b292b21>

## Ambiente de desenvolvimento

 ```javascript
   npm init -y
   npm install typescript jest @types/jest ts-node ts-jest
 ```

## Configuração  do projeto

```javascript
    npx tsc --init
    npx ts-jest config:init
```

## Criar pastas src e teste em seguida

```javascript
    npx jest
    npx jest --watchAll
    npx jest --coverage
```

## Executar

```javascript
   npx jest com as opções --watchAll ou --coverage
```
