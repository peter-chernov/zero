#!/usr/bin/env node
  let message = "Hello ";
  let message2 = ', how are you';
  let name2 = process.argv[3];
  let name3 = process.argv[2];
  if (name3 === 'hi' || name3 === 'hello') {
    if (name2 === undefined) {
      name2 = "";
      message2 = 'how are you';
      message = 'Hello, '
    }
    message = message + name2 + message2;
    delete name2;
    console.log( message );
}
