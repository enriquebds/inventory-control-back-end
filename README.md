# Inventory Control

## Tabela de Conteúdos

- [Inventory Control](#inventory-control)
  - [Tabela de Conteúdos](#tabela-de-conteúdos)
  - [1. Visão Geral](#1-visão-geral)
  - [2. Início Rápido](#2-início-rápido)
    - [2.1. Instalando Dependências](#21-instalando-dependências)
    - [2.2. Variáveis de Ambiente](#22-variáveis-de-ambiente)
    - [2.3. Migrations](#23-migrations)
    - [2.4. Visualização das tabelas](#24-visualização-das-tabelas)
  - [3. Autenticação](#3-autenticação)
  - [4. Endpoints](#4-endpoints)
    - [Índice](#índice)

---

## 1. Visão Geral

Aplicação back-end onde é feito o controle do estoque e venda de uma loja de produtos diversos.

Logo abaixo temos a lista de tecnologias usadas:

- [NodeJS](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

---

## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
npx prisma migrate dev
```

### 2.4. Visualização das tabelas

Execute o seguinte código para ter acesso as tabelas:

```
npx prisma studio
```

---

## 3. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

A autenticação dessa aplicação é feita através de:

```
Authorization: Bearer Token
```

Todas as rotas pedem que um Bearer Token seja passado com exceção dessas:

| Método | Rota         | Descrição                                      |
| ------ | ------------ | ---------------------------------------------- |
| LOGIN  | /login       | Gerando token de acesso as rotas da aplicação. |
| POST   | /manager     | Criação de um Administrador.                   |
| GET    | /manager     | Listando os Administradores.                   |
| GET    | /manager/:id | Listagem de um Administrador.                  |
| POST   | /client      | Criação de um Cliente.                         |
| GET    | /client/:id  | Listagem de um Cliente.                        |
| GET    | /product     | Listando os Produtos.                          |
| GET    | /product/:id | Listagem de um Produto.                        |

---

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- Login
  - POST - /login
- Manager
  - POST - /manager
  - GET - /manager
  - GET - /manager/:id
  - DELETE - /manager/:id
  - PATCH - /manager/:id
- Client
  - POST - /client
  - POST - /client/product/:id/id:User
  - GET - /client
  - GET - /client/:id
  - PATCH - /client/:id
  - DELETE - /client/:id
- Produtos
  - POST - /product/manager/:id
  - GET - /product
  - GET - /product/:id
  - DELETE - /product/:id
  - PATCH - /product/:id
