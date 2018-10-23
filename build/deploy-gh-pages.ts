import * as tasks from './tasks';
import { createBuilder } from './util';

const deploy = createBuilder([
  ['Deploy GitHub Pages', tasks.publishToGitHubPages],
]);

deploy({
  scope: 'stunning-octo-parakeet',
  packages: [],
}).catch(err => {
  console.error(err);
  process.exit(1);
});
