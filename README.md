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

## Sonar

Sonar scans for bugs and code smells. It can be run as a [docker container](https://hub.docker.com/_/sonarqube)

For a local sonar instance via docker see [Try out Sonarqube](https://docs.sonarqube.org/latest/try-out-sonarqube/)

```bash
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```

_NOTE: for [sonarqube-scanner](https://www.npmjs.com/package/sonarqube-scanner) to run properly / avoid permissions error you may need a JRE in your environment (eg. `sudo apt install openjdk-11-jdk`)_

## Plugins

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Articles

[ESLint and Typescript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)

[ESLint and Prettier](https://khalilstemmler.com/blogs/tooling/prettier/)

[Husky Precommit Hooks](https://khalilstemmler.com/blogs/tooling/enforcing-husky-precommit-hooks/)

[Sonar in Angular Porject](https://medium.com/beingcoders/setup-sonarqube-with-angular-project-in-6-minutes-57a87b3ca8c4)
