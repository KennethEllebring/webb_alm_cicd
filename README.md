# Welcome to the project

## Mocha/nyc/Coverall

[![Build Status][ci-image]][ci-url] [![Coverage Status](https://coveralls.io/repos/github/KennethEllebring/webb_alm_cicd/badge.svg?branch=main&service=github)](https://coveralls.io/github/KennethEllebring/webb_alm_cicd?branch=main)

## Start/run/test project

Install all dependencies:

```sh
npm i
```

Start project:
```sh
npm run start
```

test project:
```
npm run test
```
## Config for Husky

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

[ci-image]: https://github.com/kennethellebring/webb_alm_cicd/workflows/Tests/badge.svg
[ci-url]: https://github.com/kennethellebring/webb_alm_cicd/actions?workflow=Tests
