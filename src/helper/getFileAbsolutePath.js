/**
 * get file absolute path
 */
/* eslint-disable import/no-unresolved */
import { fileURLToPath } from 'node:url';
/* eslint-enable import/no-unresolved */

export default (filePath, importMetaUrl) => {
  return fileURLToPath(new URL(filePath, importMetaUrl));
};
