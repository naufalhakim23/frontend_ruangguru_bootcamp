/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  // TODO: answer here

  max = numbers.reduce((acc, curr) => {
    if (acc > curr) {
      return acc;
    } else {
      return curr;
    }
  }, numbers[0]);

  return max;
};
console.log(maxFromArray([1, 1, 1, 5])); // 5
module.exports = maxFromArray