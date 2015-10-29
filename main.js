var fs = require("fs");

// all three are constants!
var {foo, CONSTANT, FUNCTION} = require("./some-module");

exports.app = function(req) {
   // force a reload
   fs.touch(module.resolve("./some-module") + ".js");

   return {
      status: 200,
      headers: {"Content-Type": "text/plain"},
      body: ["Hello World!\n\nfoo:\t\t" + foo, "\nUUID:\t\t" + CONSTANT, "\nFUNCTION:\t" + FUNCTION]
   };
};

if (require.main == module) {
   require("ringo/httpserver").main(module.id);
}
