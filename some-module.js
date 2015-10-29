"use strict";

// const used here
const foo = exports.foo = 1;
const CONSTANT = exports.CONSTANT = java.util.UUID.randomUUID();
const FUNCTION = exports.FUNCTION = (function(id) {
   return id;
})(module.id);

console.log("some-module has been (re-)loaded. UUID: " + CONSTANT);

foo = 2;