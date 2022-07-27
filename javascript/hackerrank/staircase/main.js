// Staircase
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  // Write your code here
  // TODO: answer here
  let result = ''
  for(let i = 0; i < n; i++){
      let space = ''
      let hash = ''
      for(let j = 0; j < n - i - 1; j++){
          space += ' '
      }
      for(let k = 0; k < i + 1; k++){
          hash += '#'
      }
      result += space + hash + '\n'
  }
  return result
}

function main() {
  const n = 6

  let result = staircase(n);
  console.log(result)
}

main(); // execute program

module.exports = staircase