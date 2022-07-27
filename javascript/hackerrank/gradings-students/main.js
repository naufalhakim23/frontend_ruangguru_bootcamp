// Grading Students
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  // Write your code here
  // TODO: answer here
  var result = [];
  for (var i = 0; i < grades.length; i++) {
    //Nilai minimal adalah 40 dimana pembulatan terdekat yang viable adalah 38
    if (grades[i] < 38) {
      result.push(grades[i]);
    } else {
      console.log(grades[i]) // 73, 67, 38
      var nilaiKelipatanLima = Math.ceil(grades[i] / 5) * 5; //menggunakan math.ceil untuk membulatkan ke atas dengan menggunakan grades[i] / 5 sehingga bulat ke atas kemudian dikali 5
      if (nilaiKelipatanLima - grades[i] < 3) {
        console.log(nilaiKelipatanLima)
        result.push(nilaiKelipatanLima);
      } else {
        console.log(grades[i])
        result.push(grades[i]);
      }
    }
  }
  return result;
}

function main() {
  //     var n = parseInt(readLine());
  //     var grades = [];
  //     for(var grades_i = 0; grades_i < n; grades_i++){
  //        grades[grades_i] = parseInt(readLine());
  //     }
  var grades = [73, 67, 38, 33]; // override input
  var result = gradingStudents(grades);
  console.log(result.join("\n"));
}

main(); // execute program

module.exports = gradingStudents