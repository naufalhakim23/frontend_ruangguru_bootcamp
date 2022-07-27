const Stack = require("./stack");

function IsValidParentheses(stringInput) {
  // TODO: answer here
  // s = string
  // return boolean
  // di tumpuk dalam stac
  // keluarkan satu persatu dari stack, lalu dibandingkan dengan urutan dari string
  /**
   * [[()]]
   * stack => [, [, (, ), ], ]
   */
  let stack = new Stack();
  if (stringInput.length % 2 !== 0) {
    return false;
  }
  //checking whitespace
  if (stringInput === "" || stringInput === new RegExp("/s/")) {
    return false;
  }
  // looping dari string
  for (let i = 0; i < stringInput.length; i++) {
    // if(stack.)
    if (
      stringInput[i] === "(" ||
      stringInput[i] === "[" ||
      stringInput[i] === "{"
    ) {
      stack.push(stringInput[i]);
    } else {
      /**
       should answer this
       ✕ should return false (2 ms) when given only open parentheses sequence
       by peeking stack top, if stack is given open parentheses, then pop it       
       */
      if (stack.peek() === "(" && stringInput[i] === ")") {
        stack.pop();
        return true;
      } else if (stack.peek() === "[" && stringInput[i] === "]") {
        stack.pop();
        return true;
      } else if (stack.peek() === "{" && stringInput[i] === "}") {
        stack.pop();
        return true;
      } else {
        return false;
      }
    }
  }
}

// let got = IsValidParentheses("()");
let got = IsValidParentheses("({{");
console.log(got === false);
module.exports = {
  IsValidParentheses,
};
