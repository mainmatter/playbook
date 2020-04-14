const path = require('path');
const fs = require('fs-extra');
const process = require('process');

const marked = require('marked');
const Handlebars = require('handlebars');

const bookRenderer = require('./lib/book-renderer');
const validate = require('./lib/validate');

const DIST_PATH = path.join(__dirname, '..', '..', 'dist');

const MAIN_SRC_PATH = path.join(__dirname, '..', '..', 'src');
const BOOK_SRC_PATH = path.join(__dirname, '..', 'src');

const MAIN_ASSETS_PATH = path.join(__dirname, '..', '..', 'assets');
const BOOK_ASSETS_PATH = path.join(__dirname, '..', 'assets');
const DIST_ASSETS_PATH = path.join(DIST_PATH, 'assets');

fs.removeSync(DIST_ASSETS_PATH);
fs.copySync(MAIN_ASSETS_PATH, DIST_ASSETS_PATH);
fs.copySync(BOOK_ASSETS_PATH, DIST_ASSETS_PATH, { overwrite: true });

marked.setOptions({
  renderer: bookRenderer,
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

let readInput = (filePath) => {
  return fs.readFileSync(filePath).toString();
}

let input = [
  path.join(BOOK_SRC_PATH, 'introduction', 'README.md'),
  path.join(BOOK_SRC_PATH, 'chapters/1-digital-product-projects/README.md'),
  path.join(MAIN_SRC_PATH, 'project-procedure/digital-products/README.md'),
  path.join(BOOK_SRC_PATH, 'chapters/2-development-process/README.md'),
  path.join(MAIN_SRC_PATH, 'development-process/README.md'),
  path.join(BOOK_SRC_PATH, 'closing-notes', 'README.md'),
].reduce((acc, inputFile) => {
  return `${acc}\n\n${readInput(inputFile)}`;
}, '');

let compiled = marked(input);

let layoutSrc = fs.readFileSync(path.join(__dirname, '..', 'layout.html')).toString();
let layout = Handlebars.compile(layoutSrc);

let data = {
  toc: bookRenderer.toc,
  content: compiled
};
let output = layout(data);

let errors = validate(output);
if (errors.length > 0) {
  errors.forEach((error) => console.error(error));
  process.exit(1);
} else {
  let outputPath = path.join(DIST_PATH, 'book.html');
  fs.writeFileSync(outputPath, output);
}
