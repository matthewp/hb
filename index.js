#!/usr/bin/env node
var handlebars = require('handlebars');

var templateString = process.argv[2];
if(templateString === '-i') {
  var file = process.argv[3];
  templateString = require('fs').readFileSync(file, 'utf8');
}

var template = handlebars.compile(templateString);
process.stdin.setEncoding('utf8');

var stream = process.stdin;

var str = '';
stream.on('data', function(chunk){
  str += chunk;
});

stream.on('end', function(){
  try {
    var data = JSON.parse(str);
    process.stdout.write(template(data));
    process.exit(0);
  } catch(e) {
    console.error("Got an error", e);
    process.exit(1);
  }
});
