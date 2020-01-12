import { renderHTML, applyRules } from "./render.js";
import { rules } from "./rules.js";
import { log } from "./test.js";

console.time("render");
document.getElementById("root").innerHTML = renderHTML(applyRules(log, rules));
console.timeEnd("render");
