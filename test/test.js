import helper from 'cogs-test-helper';

export default helper.createTests({
  'test/config.js': {
    'test/input.svg': helper.getFileBuffer('test/output.js'),
    'test/error.svg': Error
  }
});
