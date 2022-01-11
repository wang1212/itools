/**
 * iproxy cli
 */
// eslint-disable-next-line import/no-unresolved, node/no-missing-import
import chalk from 'chalk';
import shell from 'shelljs';
import task from 'tasuku';
import inquirer from 'inquirer';
import Conf from 'conf';
import pkg from '../helper/getPackage';

const DEFAULT_PROXY = 'socks5://127.0.0.1:10808';

const ACTION = {
  ENABLE: { text: 'enable proxy', value: 'enable' },
  DISABLE: { text: 'disable proxy', value: 'disable' },
  CONFIG: { text: 'configure the proxy', value: 'config' },
};

const configStore = new Conf({ projectName: pkg.name, defaults: { proxy: DEFAULT_PROXY } });
// console.log(configStore.path);
// console.log(configStore.store);

/**
 * config proxy
 */
async function config() {
  const answers = await inquirer.prompt({
    name: 'proxy',
    type: 'input',
    default: configStore.get('proxy') || DEFAULT_PROXY,
    message: 'Please enter http/https proxy:',
  });

  configStore.set('proxy', answers.proxy.trim());

  console.clear();
  console.log('current proxy config:', chalk.green(configStore.get('proxy')));
  console.log('');

  // eslint-disable-next-line no-void, no-use-before-define
  void start();
}

/**
 * enable proxy
 */
async function enable() {
  //
  const proxy = configStore.get('proxy');
  console.log('current proxy config:', chalk.green(proxy));

  //
  task('enable git proxy.', async ({ setError }) => {
    if (!shell.which('git')) {
      setError(new Error('git command not found.'));
      return;
    }

    await new Promise((resolve) => {
      // http://cms-sw.github.io/tutorial-proxy.html

      // https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpproxy
      // https://gist.github.com/evantoli/f8c23a37eb3558ab8765
      // * http_proxy HTTPS_PROXY
      shell.exec(`git config --global http.proxy ${proxy} && git config --global --get http.proxy`, { silent: true }, (error, stdout, stderr) => {
        if (error || stderr || stdout.trim() !== proxy) {
          setError(stderr);
        }

        resolve();
      });

      //
    });

    //
  });

  task('enable npm proxy.', async ({ setError }) => {
    if (!shell.which('npm')) {
      setError(new Error('npm command not found.'));
      return;
    }

    await new Promise((resolve) => {
      // https://docs.npmjs.com/cli/v7/commands/npm-config
      // https://docs.npmjs.com/cli/v7/using-npm/config#proxy
      // https://docs.npmjs.com/cli/v7/using-npm/config#https-proxy
      // * HTTP_PROXY HTTPS_PROXY
      // eslint-disable-next-line sonarjs/no-identical-functions
      shell.exec(`npm config set proxy ${proxy} && npm config get proxy`, { silent: true }, (error, stdout, stderr) => {
        if (error || stderr || stdout.trim() !== proxy) {
          setError(stderr);
        }

        resolve();
      });

      //
    });

    //
  });
}

/**
 * disable proxy
 */
async function disable() {
  //
  task('disable git proxy.', async ({ setError }) => {
    if (!shell.which('git')) {
      setError(new Error('git command not found.'));
      return;
    }

    await new Promise((resolve) => {
      // http://cms-sw.github.io/tutorial-proxy.html

      // https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpproxy
      // https://gist.github.com/evantoli/f8c23a37eb3558ab8765
      // * http_proxy HTTPS_PROXY
      shell.exec(`git config --global --unset http.proxy`, { silent: true }, (error, stdout, stderr) => {
        if (error || stderr) {
          shell.exec(`git config --global --get http.proxy`, { silent: true }, (error1, stdout1, stderr1) => {
            // https://git-scm.com/docs/git-config#Documentation/git-config.txt---get
            if (error1 !== 1 || stderr1) {
              setError(stderr);
            }

            resolve();
          });

          return;
        }

        resolve();
      });

      //
    });

    //
  });

  task('disable npm proxy.', async ({ setError }) => {
    if (!shell.which('npm')) {
      setError(new Error('npm command not found.'));
      return;
    }

    await new Promise((resolve) => {
      // https://docs.npmjs.com/cli/v7/commands/npm-config
      // https://docs.npmjs.com/cli/v7/using-npm/config#proxy
      // https://docs.npmjs.com/cli/v7/using-npm/config#https-proxy
      // * HTTP_PROXY HTTPS_PROXY
      shell.exec(`npm config delete proxy && npm config get proxy`, { silent: true }, (error, stdout, stderr) => {
        if (error || stderr || stdout.trim() !== 'null') {
          setError(stderr);
        }

        resolve();
      });

      //
    });

    //
  });
}

/**
 *
 */
async function start() {
  const answers = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: 'Please select an action to take:',
      choices: [
        { name: ACTION.ENABLE.text, value: ACTION.ENABLE.value },
        { name: ACTION.DISABLE.text, value: ACTION.DISABLE.value },
        { name: ACTION.CONFIG.text, value: ACTION.CONFIG.value },
      ],
    },
  ]);

  console.log('');

  switch (answers.action) {
    case ACTION.ENABLE.value:
      enable();
      break;

    case ACTION.CONFIG.value:
      config();
      break;

    case ACTION.DISABLE.value:
      disable();
      break;

    default:
      enable();
      break;
  }
}

start();
