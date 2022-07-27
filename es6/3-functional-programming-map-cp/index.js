/**
 * Tampilkan pasang huruf besar dari semua huruf kecil yang ada pada array
 
 * Contoh 
 *  input: ['a', 'b', 'c', 'd']
 *  output: [ {'a': 'A'}, {'b': 'B'}, {'D': 'c'}, {'d': 'D'}]
 * 
 */

const lowerToUpperMap = (array) => {
  // TODO: answer here
  array = [...array];
  const decipher = [];
  for (let i = 0; i < array.length; i++) {
    decipher.push({
      [array[i]]: array[i].toUpperCase()
    })
  }
  return decipher
};
console.log(lowerToUpperMap(['a', 'b', 'c', 'd']));

module.exports = lowerToUpperMap
