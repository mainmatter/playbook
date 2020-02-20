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

  if (!linkUrl.hostname && linkUrl.hash) {
    href = linkUrl.hash;
  }

  return `<a href="${href}"${title ? ` title=${title}` : ''}>${text}</a>`;
};

renderer.image = function(href) {
  let unifiedHref = href.replace(/[\.\/]+assets/, './assets');
  return `<img src="${unifiedHref}" />`;
}

module.exports = renderer;
