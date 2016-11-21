var subs = require('subs');
var fs = require('fs');
var errors = require('./content');

var template = fs.readFileSync('./src/index.html', 'utf8');
var styles = fs.readFileSync('./src/styles.css', 'utf8');

console.log("Start building files");

for (var i = 0; i < errors.length; i++) {
  var error = errors[i];

  console.log("Building file: " + error.error);

  error.styles = styles;
  var content = subs(template, error);

  fs.writeFileSync('./build/' + error.error + '.html', content);
}

console.log("End building files");
