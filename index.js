#!/usr/bin/env node
var handlebars = require('handlebars');
var template = handlebars.compile(process.argv[2]);
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    var lines = chunk.split('\n');
    lines.forEach(function (chunk) {
      try {
        var line = JSON.parse(chunk);
        process.stdout.write(template(line) + '\n');
      } catch (e) {}
    });
  }
});

process.stdin.on('end', function () {
  process.exit(0);
});
