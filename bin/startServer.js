require('babel-register');

if (require('piping')({
  hook: true,
})) {
  require('../server/index');
}
