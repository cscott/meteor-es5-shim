// By default Meteor hints several globals from us.
// The below definitions are sufficient to expose them to es5-shim.
Date = Date || window.Date || function() { /* gahhh */ };
parseInt = parseInt || window.parseInt || function() { return 0; };
