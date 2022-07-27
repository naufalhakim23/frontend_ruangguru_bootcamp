/*
 Diberikan sebuah string `line`. Isi dari string ini adalah sebuah gabungan dari sembarang
 karakter. Tugas kamu adalah mengubah karakter yang merupakan virus menjadi konsonan atau vokal sesuai dengan
 requirement berikut:

 1. Jika di dalam 'line' jumlah karakter konsonan lebih banyak dari jumlah karakter vokal, 
    maka ubahlah semua karakter yang merupakan virus menjadi 'a'.
 2. Jika di dalam 'line' jumlah karakter vokal lebih banyak dari jumlah karakter konsonan, 
    maka ubah semua karakter yang merupakan virus menjadi 'b'.
 3. Jika di dalam 'line' jumlah karakter vokal sama dengan jumlah karakter konsonan, 
    maka ubah semua karakter yang merupakan virus menjadi 'c'.
 4. Jika tidak ada virus sama sekali, maka line tidak perlu diubah.
 5. Program akan menampilkan 'line' yang telah diubah sesuai dengan requirement diatas

 Berikut ini adalah contoh karakter vokal dan konsonan.
 Vokal = a i u e o
 Virus = #
 Konsonan = selain Vokal & Virus

 contoh 1:
 line = 'abc#ab#ueo'

 maka output yang diharapkan adalah 'abcbabbueo'
 karena jumlah vokal adalah 5, jumlah konsonan adalah 3. Lalu, untuk kedua virus
 yang ditemukan, maka semua karakter virus diubah menjadi 'b'.


 contoh 2:
 line = 'abcabdueobbb'

 Karena tidak terdapat virus, maka output yang diharapkan adalah
 'abcabdueobbb'
 
 [Ketentuan]:
 - TIDAK BOLEH menggunakan built-in function!
*/

function fixData(line) {
  // TODO: answer here
  let vokal = ['a', 'i', 'u', 'e', 'o'];
  let virus = ['#'];
  let decipheredLine = '';
  let countVokal = 0;
  let countKonsonan = 0;
  let countVirus = 0;
  for(let i = 0; i < line.length; i++) {
   //   console.log(line[i])
     if(line[i] === '#') {
        countVirus++
      //   console.log(countVirus)
     } else if (line[i] === vokal[0] || line[i] === vokal[1] || line[i] === vokal[2] || line[i] === vokal[3] || line[i] === vokal[4]) {
         countVokal++
         // console.log(countVokal)
     } else {
         countKonsonan++
         // console.log(countKonsonan)
     }
   }
   console.log(countVokal, countKonsonan, countVirus)
   if(countVokal < countKonsonan) {
         for(let i = 0; i < line.length; i++) {
               if(line[i] === '#') {
                  decipheredLine += 'a'
               } else {
                  decipheredLine += line[i]
               }
            }
   } else if(countVokal > countKonsonan) {
         for(let i = 0; i < line.length; i++) {
               if(line[i] === '#') {
                  decipheredLine += 'b'
               } else {
                  decipheredLine += line[i]
               }
            }
   } else {
         for(let i = 0; i < line.length; i++) {
               if(line[i] === '#') {
                  decipheredLine += 'c'
               } else {
                  decipheredLine += line[i]
               }
            }
   }
   return decipheredLine
}

console.log(fixData("aoi#fdg#ue"));
console.log(fixData("eh#xyz#oi#"));
console.log(fixData("#eui#bcl##"));

module.exports = fixData