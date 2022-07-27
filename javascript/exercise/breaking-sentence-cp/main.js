/**
 * Kali ini tugas kamu adalah memisahkan setiap kata dalam kalimat. 
 * gunakannlah built-in function dan cari panjang dari setiap kata tersebut.
 */

var word = 'wow JavaScript is so cool and i will become frontend developer';
var exampleFirstWord = word.substring(0, 3);

// TODO: answer here
firstWordLength = exampleFirstWord.length;

secondWord = word.substring(firstWordLength + 1, firstWordLength + 11);
secondWordLength = secondWord.length;

thirdWord = word.substring(15, 17);
thirdWordLength = thirdWord.length;

fourthWord = word.substring(18, 20)
fourthWordLength = fourthWord.length

fifthWord = word.substring(21, 25)
fifthWordLength = fifthWord.length

sixthhWord = word.substring(26,29)
sixthhWordLength = sixthhWord.length

seventhWord = word.substring(30, 31)
seventhWordLength = seventhWord.length

eighthWord = word.substring(32, 36)
eighthWordLength = eighthWord.length

ninthWord = word.substring(37, 43)
ninthWordLength = ninthWord.length

tenthWord = word.substring(44, 52)
tenthWordLength = tenthWord.length

eleventhWord = word.substring(53)
eleventhWordLength = eleventhWord.length

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
console.log('Sixth Word: ' + sixthhWord + ', with length: ' + sixthhWordLength);
console.log('Seventh Word: ' + seventhWord + ', with length: ' + seventhWordLength);
console.log('Eighth Word: ' + eighthWord + ', with length: ' + eighthWordLength);
console.log('Ninth Word: ' + ninthWord + ', with length: ' + ninthWordLength);
console.log('Tenth Word: ' + tenthWord + ', with length: ' + tenthWordLength);
console.log('Eleventh Word: ' + eleventhWord + ', with length: ' + eleventhWordLength);