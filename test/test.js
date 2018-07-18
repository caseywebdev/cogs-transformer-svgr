var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.svg': helper.getFileBuffer('test/output.js'),
    'test/error.svg': Error
  }
});
