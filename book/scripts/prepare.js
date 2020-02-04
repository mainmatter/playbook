const path = require('path');
const fs = require('fs');
const process = require('process');

const marked = require('marked');
const Handlebars = require('handlebars');

const BookRenderer = require('./lib/book-renderer');
const validate = require('./lib/validate');

const SRC_PATH = path.join(__dirname, '..', '..', 'src');

marked.setOptions({
  renderer: BookRenderer,
  highlight: function(code) {
    return require('highlight.js').highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

let readInput = (file) => {
  let filePath = path.join(SRC_PATH, file);
  return fs.readFileSync(filePath).toString();
}

let input = [
  'README.md',
  'project-procedure/README.md',
  'project-procedure/digital-products/README.md',
  'development-process/README.md',
].reduce((acc, inputFile) => {
  return acc + readInput(inputFile);
}, '');

let compiled = marked(input);

let layoutSrc = fs.readFileSync(path.join(__dirname, '..', 'layout.html')).toString();
let layout = Handlebars.compile(layoutSrc);

let data = {
  content: compiled
};
let output = layout(data);

let errors = validate(output);
if (errors.length > 0) {
  errors.forEach((error) => console.error(error));
  process.exit(1);
} else {
  console.log(output);
}
