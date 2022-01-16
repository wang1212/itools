/**
 * inpm-utils
 */
// eslint-disable-next-line import/no-unresolved, node/no-missing-import
import chalk from 'chalk';
import shell from 'shelljs';
import task from 'tasuku';
import inquirer from 'inquirer';

const PRESET_PACKAGES = ['nrm', 'npm-check-updates', 'njt', 'git-open', 'http-server'];

/**
 *
 */
async function start() {
  //
  const answers = await inquirer.prompt({
    name: 'answer',
    type: 'confirm',
    default: true,
    message: [
      'The following useful tool packages: \n',
      ...PRESET_PACKAGES.map((name) => chalk.green(`    - ${name}`)).join('\n'),
      '\n\n',
      'will be installed globally, are you sure?',
    ].join(''),
  });

  if (!answers.answer) return;
  console.log('');

  task('installing', async ({ setError, setTitle }) => {
    if (!shell.which('npm')) {
      setError(new Error('npm command not found.'));
      return;
    }

    //
    await new Promise((resolve) => {
      // https://docs.npmjs.com/cli/v8/using-npm/config#loglevel
      shell.exec(`npm i --global --loglevel error ${PRESET_PACKAGES.join(' ')}`, { silent: true }, (error, stdout, stderr) => {
        if (error || stderr) {
          setError(stderr);
          setTitle('installation failed!');
        } else {
          setTitle('Successful installation!');
        }

        resolve();
      });
    });

    //
  });
}

start();
