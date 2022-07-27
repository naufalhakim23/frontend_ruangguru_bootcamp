// contoh penggunaan sederhana dari callback adalah seperti ini

function addExclamation(str) {
  console.log(str);
  return `${str}!!!`;
}

function greeting(name) {
  console.log(name);
  return `Hello, ${name}`;
}

// ini adalah function yang menggunakan konsep callback

function playString(param, cb) {
  return cb(param);
}

console.log(playString(greeting("Joko"), addExclamation)); // Hello, Joko!!!

// bahwa greeting("Joko") akan mengembalikan nilai string,
// maka dari itu, kita bisa menggunakan function addExclamation
// untuk menambahkan exclamation point pada string yang dikembalikan
// dari function greeting.

console.log(playString(addExclamation("Joko"), greeting)); // Hello, Joko!!!
// sedangkan untuk function addExclamation("Joko"), kita akan mengembalikan string
// kita bisa menggunakan function greeting untuk menambahkan greeting pada string 
// yang dikembalikan dari function addExclamation.

/** Output
 *  Joko
    Hello, Joko
    Hello, Joko!!!

    Joko
    Joko!!!
    Hello, Joko!!!
 */

// Poin yang ingin disampaikan dari contoh diatas adalah bahwa callback bukanlah spesifik sebuah function
// namun lebih kearah konsep.
// Ya, callback memang BERUPA function, tapi pengertian tersebut kadang mengarah pada pertanyaan "fuction yang seperti apa?"
// Pada intinya callback adalah sebuah konsep yang menggunakan 1 function (katakanlah function A) sebagai parameter function B
// kemudian menggunakan function tersebut untuk mengolah lebih jauh data yang dihasilkan dari function B
