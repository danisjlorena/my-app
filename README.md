
# My App

Este é um aplicativo mobile desenvolvido com **React Native** usando o framework **Expo** e a biblioteca de navegação **React Navigation**.

## Funcionalidades

- Tela de Login
- Tela inicial (Home)
- Listagem de produtos
- Detalhes de produtos
- Navegação entre telas com React Navigation (stack)

## Estrutura de Pastas

```
my-app/
├── App.js                     # Ponto de entrada do aplicativo
├── package.json              # Configurações do projeto e dependências
├── src/
│   ├── navigation/
│   │   └── AppNavigation.js  # Configuração das rotas e navegação
│   └── screens/
│       ├── LoginScreen.js
│       ├── HomeScreen.js
│       ├── ProductListScreen.js
│       └── ProductDetailScreen.js
```

## Requisitos

- Node.js
- Expo (`npm install -g expo)
- Editor de código (como VS Code)
- Emulador Android/iOS ou dispositivo físico

## Como rodar o projeto


1. Acesse a pasta do projeto:
```bash
cd my-app
```
2. Instale as dependências:
```bash
npm install
```
3. Inicie o projeto com Expo:
```bash
npx expo start
```
4. Escaneie o QR code com o app Expo Go (Android/iOS) ou use um emulador.

## Principais Dependências

- **react-native**: Framework base para desenvolvimento mobile
- **expo**: Plataforma para facilitar o desenvolvimento React Native
- **@react-navigation/native**: Navegação entre telas
- **@react-navigation/native-stack**: Navegação em pilha (stack)
- **react-native-screens**, **react-native-safe-area-context**: Suporte para navegação

## Licença

Este projeto está licenciado sob os termos da licença MIT.
