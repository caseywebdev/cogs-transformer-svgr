import helper from 'cogs-test-helper';

export default helper.createTests({
  'test/config.js': {
    'test/input.svg': 'test/output.js',
    'test/error.svg': Error
  }
});
