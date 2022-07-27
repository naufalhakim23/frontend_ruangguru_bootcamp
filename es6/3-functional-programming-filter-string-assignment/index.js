/**
 * Ambil semua element yang bukan angka dalam array
 * Contoh
 *  input: [s, df, g, 9, 10, 1D1, 27]
 *  output: [s, df, g, 1D1]
 *
 */

const filterString = (array) => {
  // TODO: answer here
  // console.log(typeof array[5])
  // console.log(array.length);
  array = [...array];
  const decipher = [];

  for(let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number'){
      array[i+1]
    } else if(typeof array[i] === 'string'){
      decipher.push(array[i])
    } else {
      array[i+1]
    }
  }
  return decipher
};
// console.log(filterString(['s', 'df', 'g', '9', '10', '1D1', '27']));
module.exports = filterString