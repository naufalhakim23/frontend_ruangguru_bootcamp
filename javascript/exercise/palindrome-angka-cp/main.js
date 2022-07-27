/**
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 * 
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

function angkaPalindrome(num) {
  // TODO: answer here
  for(var i = 0; i < num; i++){
    var num = num + 1;
    var numString = num.toString();
    // console.log(numString)
    var numStringSplit = numString.split('');
    var numStringReverse = numStringSplit.reverse()
    var numStringJoin = numStringReverse.join('');
    // console.log(numStringReverse)N
    if(numString === numStringJoin){
      return num;
    } 
  }
}

console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181

module.exports = angkaPalindrome