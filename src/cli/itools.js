/**
 * itools cli
 */
import inquirer from 'inquirer';

const TOOLS = [
  {
    name: 'inpm-utils',
    value: './inpm-utils.js',
  },
  {
    name: 'iproxy',
    value: './iproxy.js',
  },
];

/**
 *
 */
async function start() {
  const answers = await inquirer.prompt({
    name: 'tool',
    type: 'list',
    message: 'Choose a tool:',
    choices: TOOLS,
  });

  import(answers.tool).catch((err) => console.error(err));
}

start();
