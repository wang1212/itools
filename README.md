# itools

![LICENSE](https://badgen.net/github/license/wang1212/itools)
[![NPM VERSION](https://badgen.net/npm/v/@wang1212/itools)](https://www.npmjs.com/package/@wang1212/itools)
![DOWNLOAD](https://badgen.net/npm/dt/@wang1212/itools)
![LAST COMMIT](https://badgen.net/github/last-commit/wang1212/itools)
![GITHUB PACKAGE CI](https://img.shields.io/github/workflow/status/wang1212/itools/Node.js%20Package?label=ci/package%20publish)

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

```
git config --global http.proxy <proxy>
npm config set proxy <proxy>
```

_**Tips:** this does not automatically set the environment variables `http_proxy`, `HTTP_PROXY`, `https_proxy`, `HTTPS_PROXY`._

## Usage

- Use directly without installation, run:

```
npx @wang1212/itools
```

- Or, install globally:

```
npm install --global @wang1212/itools

// run command using tool
itools
```

_**Tips:** after a local global installation, a command such as `iproxy` is provided for each tool in addition to the command `itools`. In other words, instead of running `itools` and then selecting the **iproxy** tool, you can run the `iproxy` command directly._

## Inspiration

The inspiration for creating this toolbox came from the [wsl2proxy](https://github.com/wizcas/wsl2proxy)/[nrm](https://github.com/Pana/nrm) programs, and after using them, I wondered if I could write the tedious things that need to be done by hand every day as a programmatic gadget for ease of use and efficiency.

## License

[MIT](./LICENSE).
