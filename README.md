# Welcome to the project

## Husky

```sh
npm install husky --save-dev
```

Edit package.json > prepare script and run it once:
```sh
npm pkg set scripts.prepare="husky install"
npm run prepare
```

Add a hook:
```sh
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

Make a commit:

```sh
git commit -m "Keep calm and commit"
# `npm test` will run
```

For more information go to: https://typicode.github.io/husky/