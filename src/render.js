const htmlRules = [
  [
    /* NEW LINE TO DIV */
    /\r?\n/g,
    (str, a, b) => `</div><div class="row">`
  ],
  [
    /* WHITESPACE */
    /  /g,
    str => ` &nbsp;`
  ],
  [
    /* TABS */
    /\t/g,
    str => ` &nbsp;`
  ]
];

export function renderHTML(str) {
  return `<div class="row">${applyRules(str, htmlRules)}</div>`;
}

/**
 *
 * @param {string} str
 */
export function applyRules(str, rules) {
  return rules.reduce((string, rule) => string.replace(rule[0], rule[1]), str);
}
