const URL = require('url');
const process = require('process');

const marked = require('marked');

const renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
  let linkUrl = URL.parse(href);
  if (!linkUrl.hostname && !linkUrl.hash) {
    console.error(`Link must include hash but is ${href}!`);
    process.exit(1);
  }

  return `<a href="${linkUrl.hash}"${title ? ` title=${title}` : ''}>${text}</a>`;
};

module.exports = renderer;
