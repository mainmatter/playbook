const URL = require('url');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const DOCUMENT_HOST = 'playbook.mainmatter';

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.sendTo(console, { omitJSDOMErrors: true });

module.exports = function validate(book) {
  let errors = [];

  let dom = new JSDOM(book, { virtualConsole, url: `http://${DOCUMENT_HOST}` });
  let document = dom.window.document;

  let links = document.querySelectorAll('a');
  links.forEach((link) => {
    let linkUrl = URL.parse(link.href);

    if (linkUrl.host === DOCUMENT_HOST && linkUrl.hash) {
      let targets = document.querySelectorAll(`[id="${linkUrl.hash.slice(1)}"]`);
      if (targets.length > 1) {
        errors.push(`Found ${targets.length} possible targets for link to "${linkUrl.hash}"!`);
      } else if (targets.length < 1) {
        errors.push(`Found no target for link to "${linkUrl.hash}"!`);
      }
    }
  });

  return errors;
}
