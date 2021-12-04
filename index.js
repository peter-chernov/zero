#!/usr/bin/env node
let message = "Hello, ";
let name = process.argv[2];
if (name == undefinded) {
  name = "";
}
message = message + name;
console.log( message );
