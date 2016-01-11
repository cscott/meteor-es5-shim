Tinytest.add('es5-shim - exists', function (test) {
  // es5-shim actually has a pretty-complete jasmine test suite,
  // but I haven't (yet?) sat down to figure out how to call it
  // from Tinytest.
  test.isTrue('0b'.substr(-1) === 'b', 'es5-shim exists');
});
