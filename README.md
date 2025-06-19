# AuthApp

Aplicativo React Native simples com autenticação via e-mail e código.

## Requisitos

- Node.js (22.16)
- React Native CLI
- Android Studio ou Xcode

## Instalação

```bash
git clone https://github.com/seu-usuario/AuthApp.git
cd AuthApp
npm install
```

## Executando o App

```sh
# Com npm
npm start

# Com Yarn
yarn start
```

### Android

```sh
# Com npm
npm run android

# Com Yarn
yarn android
```

### iOS

Para o iOS, é necessário instalar as dependências do CocoaPods na primeira execução do projeto ou na atualização das dependências nativas.

Na primeira execução, execute o Ruby bundler para instalar o CocoaPods:

```sh
bundle install
```

Cada vez que atualizar as dependências nativas, execute a linha abaixo:

```sh
bundle exec pod install
```

```sh
# Com npm
npm run ios

# Com Yarn
yarn ios
```
