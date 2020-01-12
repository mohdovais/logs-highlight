/**
 * Sequence matters
 */
export const rules = [
  [
    /* STRING */
    /"[^"\r\n]*"/g,
    str => `<span class="string">${str}</span>`
  ],
  [
    /* SINGLE QUOTES STRING */
    /'[^']*'(?=[^\w])/g,
    str => `<span class="string">${str}</span>`
  ],
  [
    /* DEBUG */
    /\[(verbose|verb|vrb|vb|v)\]/gi,
    str => `<span class="verbose">${str}</span>`
  ],
  [
    /* DEBUG */
    /\b(DEBUG|Debug)\b/g,
    str => `<span class="debug">${str}</span>`
  ],
  [
    /* DEBUG */
    /\b(debug)\:/gi,
    str => `<span class="debug">${str}</span>`
  ],
  [
    /* DEBUG */
    /\[(debug|dbug|dbg|de|d)\]/gi,
    str => `<span class="debug">${str}</span>`
  ],
  [
    /* INFO */
    /\b(HINT|INFO|INFORMATION|Info|NOTICE|II)\b/g,
    str => `<span class="info">${str}</span>`
  ],
  [
    /* INFO */
    /\b(info|information)\:/gi,
    str => `<span class="info">${str}</span>`
  ],
  [
    /* INFO */
    /\[(information|info|inf|in|i)\]/gi,
    str => `<span class="info">${str}</span>`
  ],
  [
    /* WARN */
    /\b(WARNING|WARN|Warn|WW)\b/g,
    str => `<span class="warn">${str}</span>`
  ],
  [
    /* WARN */
    /\b(warning)\:/gi,
    str => `<span class="warn">${str}</span>`
  ],
  [
    /* WARN */
    /\[(warning|warn|wrn|wn|w)\]/gi,
    str => `<span class="warn">${str}</span>`
  ],
  [
    /* ERROR */
    /\b(ALERT|CRITICAL|EMERGENCY|ERROR|FAILURE|FAIL|Fatal|FATAL|Error|EE)\b/g,
    str => `<span class="error">${str}</span>`
  ],
  [
    /* ERROR */
    /\b(error)\:/gi,
    str => `<span class="error">${str}</span>`
  ],
  [
    /* ERROR */
    /\[(error|eror|err|er|e|fatal|fatl|ftl|fa|f)\]/gi,
    str => `<span class="error">${str}</span>`
  ],
  [
    /* DATE & TIME  */
    /(\b\d{2}[-\/.]\d{2}[-\/.]\d{4}|\b\d{4}[-\/.]\d{2}[-\/.]\d{2})([\sT]*(\d{1,2}:\d{2}(:\d{2}(.\d+(Z|\s?\+\d{2}:\d{2})?)?)?))?/g,
    str => `<span class="date">${str}</span>`
  ],
  [
    /* TIME  */
    /\b\d{1,2}:\d{2}(:\d{2})?([.,]\d+)?(\s)*(Z|\+\d{2}:\d{2})?/g,
    str => `<span class="date">${str}</span>`
  ],
  [
    /* GIT COMMIT HASH */
    /\b([0-9a-fA-F]{40}|[0-9a-fA-F]{10}|[0-9a-fA-F]{7})\b/g,
    str => `<span class="git-commit">${str}</span>`
  ],
  [
    /* GUID */
    /[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}/g,
    str => `<span class="guid">${str}</span>`
  ],
  [
    /* LITERALS */
    /\b([0-9]+|true|false|null)\b/g,
    str => `<span class="literal">${str}</span>`
  ],
  [
    /* EXCEPTION */
    /\b([a-zA-Z.]*Exception)\b:.*/g,
    str => `<span class="exception">${str}</span>`
  ],
  [
    /* EXCEPTION */
    /\b([a-zA-Z.]*Exception)\b/g,
    str => `<span class="strong exception">${str}</span>`
  ],
  [
    /* EXCEPTION */
    /(\r?\n)?([\t ]+at\b.*)/g,
    (str, a, b) => `${a}<span class="exception">${b}</span>`
  ],
  [
    /* URL */
    /\b(http|https|ftp|file):\/\/\S+\b\/?/gi,
    str => `<span class="url">${str}</span>`
  ]
];
