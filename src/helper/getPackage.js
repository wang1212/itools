/* eslint-disable import/no-unresolved */
import fs from 'node:fs';
/* eslint-enable import/no-unresolved */
import getFileAbsolutePath from './getFileAbsolutePath.js';

const pkg = JSON.parse(
  fs.readFileSync(
    getFileAbsolutePath('../../package.json', import.meta.url),
    'utf8'
  )
);

export default pkg;
