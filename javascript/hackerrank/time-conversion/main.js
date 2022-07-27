// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
  let timeConverted = '';
  let time = s.split(':');
  console.log(time);
  let hour = time[0];
  let minutes = time[1];
  let seconds = time[2].substring(0, 2);
  let ampm = time[2].substring(2, 4);
  console.log(hour, minutes, seconds, ampm);
  if (ampm === ('PM')) {
    if (hour === '12') {
      timeConverted = `${hour}:${minutes}:${seconds}`;
    } else {
      hour = parseInt(hour) + 12;
      timeConverted = `${hour}:${minutes}:${seconds}`;
    }
  } else {
    if (hour === '12') {
      hour = '00';
      timeConverted = `${hour}:${minutes}:${seconds}`;
    } else {
      timeConverted = `${hour}:${minutes}:${seconds}`;
    }
  }
  return timeConverted;
}

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion