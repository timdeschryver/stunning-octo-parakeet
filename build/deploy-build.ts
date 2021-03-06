import * as tasks from './tasks';
import { createBuilder } from './util';
import { packages } from './config';

const deploy = createBuilder([['Deploy builds', tasks.publishToRepo]]);

deploy({
  scope: 'stunning-octo-parakeet',
  packages: packages,
}).catch(err => {
  console.error(err);
  process.exit(1);
});
