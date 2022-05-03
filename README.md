# itools

<!-- ![MINZIPPED SIZE](https://badgen.net/bundlephobia/minzip/@wang1212/itools) -->

![LICENSE](https://badgen.net/github/license/wang1212/itools)
[![NPM VERSION](https://badgen.net/npm/v/@wang1212/itools)](https://www.npmjs.com/package/@wang1212/itools)
![DOWNLOAD](https://badgen.net/npm/dt/@wang1212/itools)
![LAST COMMIT](https://badgen.net/github/last-commit/wang1212/itools)
![GITHUB PACKAGE CI](https://img.shields.io/github/workflow/status/wang1212/itools/Node.js%20Package?label=ci/package%20publish)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/01b1a8e4cbad48e4a9c401060122dec7)](https://www.codacy.com/gh/wang1212/itools/dashboard?utm_source=github.com&utm_medium=referral&utm_content=wang1212/itools&utm_campaign=Badge_Grade)

English | [简体中文](./README.zh-CN.md)

:package: Common toolbox.

_**This package is now pure ESM, read [this](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).**_

## Tools

### `inpm-utils`

This tool will install some useful npm packages **globally**.

- [nrm](https://www.npmjs.com/package/nrm)
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
- [njt](https://njt.vercel.app/)
- [git-open](https://www.npmjs.com/package/git-open)
- [http-server](https://www.npmjs.com/package/http-server)

### `iproxy`

This tool will provide operations to **enable, disable, and configure the git/npm proxy**.

Essentially, it does something like this:

```bash
git config --global http.proxy <proxy>
npm config set proxy <proxy>
```

_**Tips:** this does not automatically set the environment variables `http_proxy`, `HTTP_PROXY`, `https_proxy`, `HTTPS_PROXY`._

## Usage

- Use directly without installation, run:

  ```bash
  npx @wang1212/itools
  ```

- Or, install globally:

  ```bash
  npm install --global @wang1212/itools

  // run command using tool
  itools
  ```

_**Tips:** after a local global installation, a command such as `iproxy` is provided for each tool in addition to the command `itools`. In other words, instead of running `itools` and then selecting the **iproxy** tool, you can run the `iproxy` command directly._

## Development Guidelines

### Git Commit Message Format

Adopt [community commit format best practices](https://www.conventionalcommits.org/):

```bash
# Before
git commit

# Now
npm run commit
```

_This constraint relies on tools [commitizen](http://commitizen.github.io/cz-cli/) and [commitlint](https://commitlint.js.org/) provided by the community._

### npm publish

The version management of this module adopts the specifications recommended by the community [Semantic Versioning](https://semver.org/). Follow version changes and maintain a **CHANGELOG.md**([Learn why](https://keepachangelog.com/)).

```bash
# Update version and generate changelog before publishing to npm repository
npm run release # npm run release -- --first-release
# Or, preview
npm run release -- --dry-run

# Then
npm publish # npm publish --access public
```

_These jobs are done with the help of [standard-version](https://github.com/conventional-changelog/standard-version) tool provided by the community._

## Inspiration

The inspiration for creating this toolbox came from the [wsl2proxy](https://github.com/wizcas/wsl2proxy)/[nrm](https://github.com/Pana/nrm) programs, and after using them, I wondered if I could write the tedious things that need to be done by hand every day as a programmatic gadget for ease of use and efficiency.

## License

[MIT](./LICENSE).
