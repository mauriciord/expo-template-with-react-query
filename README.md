# TypeScript Example

This app has been made using:
- Expo
- [React Query](https://tanstack.com/query/v4/)
- Typescript
- [Magnus UI](https://magnus-ui.com/)
- Eslint
- [Eslint Rules by W. Candillon](https://github.com/wcandillon/eslint-config-react-native-wcandillon)
- Env variables
- Auto to manage semver and auto publishing

## how to run
navigate to the root folder of this project, checkout the correct branch, and:
```bash
yarn

OR

npm install
```

## Env variables ⚠️
Create a new environment file with the following content before running this application:
```dotenv
GIPHY_API_URL=https://api.giphy.com/v1/gifs
GIPHY_API_TOKEN=xxxZZZYYYAAABBBCCCdddEEEfffGGGhhh
```

## run scripts
### iOS
```bash
yarn ios

OR

npm run ios
```
### Android
```bash
yarn android

OR

npm run android
```
### start all
```bash
yarn start

OR

npm run start
```

### Improvements
- Unit tests
- Data tests
- Extracting more code into smaller chunks of components
- More custom hooks
- Web adaptation (Expo Universal App - Web | iOS | Android)

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

```sh
npx create-react-native-app -t with-typescript
```

TypeScript is a superset of JavaScript which gives you static types and powerful tooling in Visual Studio Code including autocompletion and useful inline warnings for type errors.

## 🚀 How to use

#### Creating a new project

- Install the CLI: `npm i -g expo-cli`
- Create a project: `npx create-react-native-app -t with-typescript`
- `cd` into the project

### Adding TypeScript to existing projects

- Create a blank TypeScript config: `touch tsconfig.json`
- Run `yarn start` or `npm run start` to automatically configure TypeScript
- Rename files to TypeScript, `.tsx` for React components and `.ts` for plain typescript files

> 💡 You can disable the TypeScript setup in Expo CLI with the environment variable `EXPO_NO_TYPESCRIPT_SETUP=1 expo start`

## 📝 Notes

- [Expo TypeScript guide](https://docs.expo.dev/versions/latest/guides/typescript/)
