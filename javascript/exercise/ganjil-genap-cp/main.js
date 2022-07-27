/*
Buatlah sebuah program untuk melakukan cek pada plat nomer yang ada
Setiap plat nomer di pisahkan oleh karakter ";"
- jika paramater kosong maka akan menampilkan "invalid data"
- jika paramater merupakan string kosong maka akan menampilkan "plat tidak ditemukan"
- jika paramater terdapat plat ganjil dan tidak ada plat genap maka akan menampilkan "plat ganjil sebanyak <jumlah plat> dan plat genap tidak ditemukan"
- jika paramater terdapat plat genap dan tidak ada plat ganjil maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil tidak ditemukan"
- jika paramater terdapat plat ganjil maupun genap maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil sebanyak <jumlah plat>"
*/

function ganjilGenap(plat) {
  // TODO: answer here
  let platArr
  if(plat === undefined){
    return 'invalid data'
  } else if(plat === ''){
    return "plat tidak ditemukan"
  }else {
      platArr = plat.split(";")
  }
  let platGenap = []
  let platGanjil = []
  let platGenapStr
  let platGanjilStr

    for(let i = 0; i < platArr.length; i++){
      if(platArr[i] % 2 === 0){
        platGenap.push(platArr[i])
        platGenapStr = platGenap.length
        // console.log(platGenapStr)
      } 
      else {
        platGanjil.push(platArr[i])
        platGanjilStr = platGanjil.length
        // console.log(platGanjilStr)
      }
    }

  if(!platGenapStr && !platGanjilStr) {
    return 'plat tidak ditemukan'
  } else if(!platGenapStr) {
    return `plat ganjil sebanyak ${platGanjilStr} dan plat genap tidak ditemukan`
  } else if(!platGanjilStr) {
    return `plat genap sebanyak ${platGenapStr} dan plat ganjil tidak ditemukan`
  } else {
    return `plat genap sebanyak ${platGenapStr} dan plat ganjil sebanyak ${platGanjilStr}`
  } 
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data

module.exports = ganjilGenap