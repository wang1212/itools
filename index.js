#!/usr/bin/env node

/**
 * itools - Common toolbox.
 *
 * The source code is the main bin command of `itools`.
 */
// eslint-disable-next-line import/no-unresolved, node/no-missing-import
import chalk from 'chalk';

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];
const minor = semver[1];

if (major < 12 || (major === 12 && minor <= 20) || (major === 14 && minor <= 14)) {
  console.error(
    chalk.red(`You are running Node ${currentNodeVersion}. \nThis package is now pure ESM, read https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c. \nCreate Web App requires Node 12.20, 14.14 or higher. \nPlease update your version of Node.
		`)
  );

  // eslint-disable-next-line no-process-exit
  process.exit(1);
}

// eslint-disable-next-line node/no-unsupported-features/es-syntax
import('./src/cli/itools.js').catch((err) => console.error(err));
