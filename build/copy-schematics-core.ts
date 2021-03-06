import * as tasks from './tasks';
import { createBuilder } from './util';
import { packages } from './config';

const copySchematics = createBuilder([
  ['Copy Schematics Core Files', tasks.copySchematicsCore],
]);

copySchematics({
  scope: 'stunning-octo-parakeet',
  packages: packages,
}).catch(err => {
  console.error(err);
  process.exit(1);
});
