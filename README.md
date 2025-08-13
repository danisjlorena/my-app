# My App

Aplicativo mobile desenvolvido com **React Native** para estudo e prática de desenvolvimento mobile.  
O app conta com login, listagem de produtos, tela de detalhes e navegação simples entre telas.

## Funcionalidades

- **Login**: Tela inicial onde o usuário informa e-mail/usuário e senha para acessar o sistema.  
- **Home**: Página de boas-vindas com botão para sair (logout) e acessar a lista de produtos.  
- **Lista de Produtos**: Mostra todos os produtos cadastrados com nome, imagem e breve descrição.  
- **Detalhes do Produto**: Ao selecionar um item da lista, o usuário vê informações completas como descrição, imagem e preço.  
- **Logout**: Disponível na Home para encerrar a sessão e voltar ao login.

## Tecnologias utilizadas

- [React Native]
- [React Navigation]
- JavaScript ES6+
- Hooks (`useState`, `useEffect`)

## Estrutura do projeto

```
src/
 ├── components/
 │   ├── LogoutButton.js        // Botão para sair da conta
 │   └── ProductItem.js         // Exibição de item individual da lista
 ├── navigation/
 │   └── AppNavigation.js       // Rotas e navegação do app
 ├── screens/
 │   ├── HomeScreen.js          // Tela inicial
 │   ├── LoginScreen.js         // Tela de login
 │   ├── ProductDetailScreen.js // Tela de detalhes
 │   └── ProductListScreen.js   // Lista de produtos
```

## Pré-requisitos

- [Node.js]  
- [Expo CLI]
- Git instalado  

## Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/my-app.git

# Acessar a pasta do projeto
cd my-app

# Instalar as dependências
npm install
# ou
yarn install
```

Para iniciar o app:

```bash
# Com Expo
npx expo start
