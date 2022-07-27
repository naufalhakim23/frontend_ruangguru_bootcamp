/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

const countRepetition = (numbers) => {
  // TODO: answer here
  let repetition = {};
  numbers = [...numbers];
  for (let i = 0; i < numbers.length; i++) {
    if (repetition[numbers[i]] === undefined) {
      repetition[numbers[i]] = 1;
    } else {
      repetition[numbers[i]] += 1;
    }
  }
  return repetition;
};
console.log(countRepetition([1, 1, 1, 5, 5, 10, 9]));

module.exports = countRepetition