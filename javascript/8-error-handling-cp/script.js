// Buatlah fungsi yang mengembalikan nama bulan dari array berdasarkan nilai bilangan yang dikirim ke fungsi tersebut. 
// Jika nilainya tidak sesuai dengan bulan (1-12), kembalikan error 'Masukan salah. Input bulan antara 1-12'.
//
// Contoh 1
// Input: 3
// Output: "Bulan ke-3 adalah Maret"
//
// Contoh 2
// Input: 15
// Output: "Masukan salah. Input bulan antara 1-12"

function getMonthName(monthNumber) {
  // console.log(monthNumber)
  let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli',
  'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  // console.log(months[12])
  // console.log(monthNumber)
  // console.log(months[monthNumber])
  // if(monthNumber < 12 && monthNumber >= 0){
  // }
  try {
    if(monthNumber > 12 || monthNumber < 0 || !monthNumber){
      throw new Error('Masukan salah. Input bulan antara 1-12');
    } 
    monthNumber = monthNumber - 1;
    let output = `Bulan ke-${monthNumber + 1} adalah ${months[monthNumber]}`
    return console.log(output);
    
  } catch (error) {
    return console.log(error.message);
  }
}

// try {
  getMonthName(3);
  getMonthName(15);
  getMonthName('12');
  getMonthName('13');
  getMonthName(3);
  getMonthName('-2');
  getMonthName();
  getMonthName('');
  getMonthName([]);
  
// } catch (error) {
//   console.log(error.message);
// }
  
  // TODO: answer here
    // let myMonth = parseInt(prompt("Masukan bilangan: "));
    // getMonthName(myMonth);
    // TODO: answer here