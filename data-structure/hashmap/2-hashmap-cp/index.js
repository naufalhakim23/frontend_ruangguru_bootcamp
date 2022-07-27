// Mengecek jika dua string adalah anagram
// Anagram adalah kata yang dibentuk melalui penataan ulang huruf-huruf dari beberapa kata lain.
//
// Contoh 1
// Input: a = "keen", b = "knee"
// Output: "Anagram"
// Explanation: Jika ditata, "knee" dan "keen" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 2
// Input: a = "fried", b = "fired"
// Output: "Anagram"
// Explanation: Jika ditata, "fried" dan "fired" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 3
// Input: a = "apple", b = "paddle"
// Output: "Bukan Anagram"
// Explanation: Jika ditata, "apple" dan "paddle" memiliki huruf-huruf yang berbeda

function anagramChecker(str1, str2) {
  let hashMapStr1 = new Map();
  let hashMapStr2 = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (hashMapStr1.has(str1[i])) {
      hashMapStr1.set(str1[i], hashMapStr1.get(str1[i]) + 1);
    } else {
      hashMapStr1.set(str1[i], 1);
    }
  }

  //   console.log(hashMapStr1);
  for (let i = 0; i < str2.length; i++) {
    if (hashMapStr2.has(str2[i])) {
      hashMapStr2.set(str2[i], hashMapStr2.get(str2[i]) + 1);
    } else {
      hashMapStr2.set(str2[i], 1);
    }
  }
  //   console.log(hashMapStr2);
  //   for (let i = 0; i < str1.length; i++) {
  //     console.log(hashMapStr1.has(str1[i]));
  //     // console.log("testing");
  //     // console.log(hashMapStr2.get(str2[i]));
  //     // console.log(hashMapStr1.get(str2[i]));
  //     // console.log(hashMapStr2.get(str1[i]));
  //     console.log("end");
  //   }
  if (hashMapStr1.size !== hashMapStr2.size) {
    return false;
  }
  for (let key of hashMapStr1.keys()) {
    if (hashMapStr1.get(key) !== hashMapStr2.get(key)) {
      return false;
    }
  }

  return true;
  // if (hashMapStr1.size !== hashMapStr2.size) {
  //   return false;
  // } else {
  //   for (let i = 0; i < str1.length; i++) {
  //     //ntah kenapa ini bisa dunno why
  //     if (hashMapStr1.get(str1[i]) !== hashMapStr2.get(str1[i])) {
  //       return false;
  //     }
  //   }
  // }

  // return true;
}

// console.log(anagramChecker("keen", "knee"));
console.log(anagramChecker("kee", "knn"));
// console.log(anagramChecker("fried", "fired"));

module.exports = {
  anagramChecker,
};
