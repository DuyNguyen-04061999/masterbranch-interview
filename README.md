# React + TypeScript + Vite

## 🚀 Installation
#### Prerequisites: 
[Node.js®](https://nodejs.org/) version: >= 20

#### Clone source code:

```sh
git clone https://github.com/DuyNguyen-04061999/masterbranch-interview.git
```

#### Installing dependencies:

```sh
npm install
```

or

```sh
yarn install
```
## 🚀 Run the app:

**TROUBLESHOOTING NOTE**: If you are having trouble running the app for the first time, please delete the `node_module` and run `Installing dependencies`.

## Running locally in development mode

To get started, run `npm install && npm run dev or yarn install && yarn dev`:
    
    git checkout master
    git pull
    git checkout -b your_branch
    yarn install or yarn
    yarn dev

Your app will run on this link: (http://localhost:3000/)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
