# Angular Project Configs

## Prettier

Handles code _format/style_ linting

- [Summary of Basics](https://prettier.io/docs/en/ignore.html)

- [Ignoring Files/Folders](https://prettier.io/docs/en/ignore.html)

## ESLint

Handles code _quality_ linting

- [Integrating Prettier and Linters](https://prettier.io/docs/en/integrating-with-linters.html)

  > `eslint-config-prettier` - Turns off all ESLint rules that have the potential to interfere with Prettier rules.
  >
  > `eslint-plugin-prettier` - Turns Prettier rules into ESLint rules.

_NOTE: Angular project specific:_
`ng add @angular-eslint/schematics`

## Husky / Lint Staged

[Husky](https://www.npmjs.com/package/husky) handles commit hooks (eg. enforces lint rules pre-commit) and [lint-staged](https://www.npmjs.com/package/lint-staged) ensures **only** staged files are committed

## Plugins

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Articles

[ESLint and Typescript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)

[ESLint and Prettier](https://khalilstemmler.com/blogs/tooling/prettier/)

[Husky Precommit Hooks](https://khalilstemmler.com/blogs/tooling/enforcing-husky-precommit-hooks/)
