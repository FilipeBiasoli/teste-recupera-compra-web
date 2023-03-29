# Teste Recupera Compra - WEB

Esse repositório contém a versão WEB do teste para a empresa **Recupera Compra**.

## Indíce

- [Observações](#observações)
- [Requisitos](#requisitos)
- [Instalação](#instalação)

## Observações

- Instale a extenção [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) no seu Visual Studio Code para manter uma consistência na formatação do código.

## Requisitos

- [NodeJS (v16.14.0)](https://nodejs.org/en/)

## Instalação

Para iniciar as configurações clone o projeto

```bash
git clone https://github.com/FilipeBiasoli/teste-recupera-compra-web.git
```

Acesse a pasta raiz do projeto e instale as dependências:

```cmd
npm install
```

**Conexão com a API**

Para continuar é necessário ter a API do projeto em execução. Para instalar/configurar a API do projeto siga o passo a passo de seu repositório clicando [aqui](https://github.com/FilipeBiasoli/teste-recupera-compra-api).

**Variáveis de ambiente:**

Configure as variáveis de ambiente criando um arquivo `.env` na raíz do projeto, usando o arquivo `.env.example` como referência. Preencha as credenciais referentes a _API Connection_ com as informações necessárias. Caso o valor seja vazio, deixe em branco.

Inicie o projeto:

```cmd
npm start
```

Acesse o painel de controle com as credenciais de teste a seguir:

- **E-mail:** filipe.teste@gmail.com
- **Senha:** 000000
