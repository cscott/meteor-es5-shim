Package.describe({
  name: 'cscottnet:es5-shim',
  summary: 'ES5 compatibility shims, packaged for Meteor',
  version: '4.0.5_1',
  git: 'https://github.com/cscott/meteor-es5-shim.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles(['thunk.js', 'vendor/es5-shim.js'], 'client');
});

Package.onTest(function(api) {
  api.use(['cscottnet:es5-shim','tinytest'], 'client');
  api.add_files(['es5-shim-tests.js'], 'client');
});
