/**
 * Customisable greeting
 * Buatlah fungsi untuk memformat nama ada sebuah ucapan.
 * Fungsi terebut menerima dua argumen sebagai input
 * Argumen pertama berupa objek user, contoh: let user = { firstName: "John", lastName: "Doe" };
 * Argumen kedua berupa callback untuk memformat nama user.
 *
 */

function customisableGreeting(user, formatCallback) {
  // TODO: answer here
  user = { ...user };
  // console.log(user)
  formattedName = formatCallback(user);
  formatCallback = formatCallback || (({ firstName, lastName }) => {
    return `Hi name is ${firstName} ${lastName}, how are you?`;
  });
  
  return `Hi name is ${formattedName}, how are you?`;
}
console.log( customisableGreeting({ firstName: "John", lastName: "Doe" }, ({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
  }));

module.exports = customisableGreeting