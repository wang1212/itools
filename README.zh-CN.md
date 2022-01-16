# itools

![LICENSE](https://badgen.net/github/license/wang1212/itools)
[![NPM VERSION](https://badgen.net/npm/v/@wang1212/itools)](https://www.npmjs.com/package/@wang1212/itools)
![DOWNLOAD](https://badgen.net/npm/dt/@wang1212/itools)
![LAST COMMIT](https://badgen.net/github/last-commit/wang1212/itools)
![GITHUB PACKAGE CI](https://img.shields.io/github/workflow/status/wang1212/itools/Node.js%20Package?label=ci/package%20publish)

[English](./README.md) | 简体中文

:package: 通用的工具箱。

_**这个包现在是纯 ESM，查看[这里](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)。**_

## 工具

### `inpm-utils`

该工具会在**全局**安装一些有用的 npm 包。

- [nrm](https://www.npmjs.com/package/nrm)
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
- [njt](https://njt.vercel.app/)
- [git-open](https://www.npmjs.com/package/git-open)
- [http-server](https://www.npmjs.com/package/http-server)

### `iproxy`

这个工具会提供**开启、关闭、配置 git/npm 代理的操作**。

本质上，它做的是类似这样的事情：

```
git config --global http.proxy <proxy>
npm config set proxy <proxy>
```

_**注意：** 这不会自动设置环境变量 `http_proxy`、`HTTP_PROXY`、`https_proxy`、`HTTPS_PROXY`。_

## 用法

- 不安装直接使用，运行：

```
npx @wang1212/itools
```

- 或者，在全局安装：

```
npm install --global @wang1212/itools

// 运行命令使用工具
itools
```

_**注意：** 在本地全局安装后，除过命令 `itools` 之外，还对每个工具提供一个命令，如 `iproxy`。换句话说，可以直接运行 `iproxy` 命令而不是先运行 `itools` 再选择 **iproxy** 工具。_

## 灵感

创造该工具箱的灵感来源于 [wsl2proxy](https://github.com/wizcas/wsl2proxy)/[nrm](https://github.com/Pana/nrm) 程序，在使用了它们之后，我就在想是否可以将日常需要手工完成的繁琐事情编写为程序化的小工具以方便使用和提高效率。

## 许可

[MIT](./LICENSE).
