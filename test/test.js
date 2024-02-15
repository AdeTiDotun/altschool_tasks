// function sum(a,b) {
//     return a + b;
// }

const sum = require("./sum");

test ("adds two numbers", ()=> {
    expects(sum(1,3)).toBe(4);
});