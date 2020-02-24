const URL = require('url');
const process = require('process');

const marked = require('marked');

class BookRenderer extends marked.Renderer {
  constructor() {
    super(...arguments);

    this.__toc__ = [];
  }

  get toc() {
    return this.__toc__;
  }

  link(href, title, text) {
    let linkUrl = URL.parse(href);
    if (!linkUrl.hostname && !linkUrl.hash) {
      console.error(`Link must include hash but is ${href}!`);
      process.exit(1);
    }

    if (!linkUrl.hostname && linkUrl.hash) {
      href = linkUrl.hash;
    }

    return `<a href="${href}"${title ? ` title=${title}` : ''}>${text}</a>`;
  }

  image(href) {
    let unifiedHref = href.replace(/[\.\/]+assets/, './assets');
    return `<img src="${unifiedHref}" />`;
  }

  heading() {
    let heading = super.heading(...arguments);
    let match = heading.match(/<h(\d).*id="([^"]+)".*>(.+)<\/h\d>/);
    this.toc.push({
      level: match[1],
      id: match[2],
      title: match[3]
    });
    return heading;
  }
}

const renderer = new BookRenderer();

module.exports = renderer;
