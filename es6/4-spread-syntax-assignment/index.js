/**
 * Buatlah sebuah fungsi yang menerima dua argumen berupa objek kemudian mengembalikan menjadi satu objek gabungan
 *
 * Contoh: {a: 1, b: 2}, {c: 3, d: 4}
 * Output: {a: 1, b: 2, c: 3, d: 4}
 */

const mergeTwoObjects = (firstObject, secondObject) => {
  // TODO: answer here
  let newObject = {};
  for (let key in firstObject) {
    newObject[key] = firstObject[key];
  } for (let key in secondObject) {
    newObject[key] = secondObject[key];
  }
  return newObject;
};
console.log(mergeTwoObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // { a: 1, b: 2, c: 3, d: 4 }

module.exports = mergeTwoObjects