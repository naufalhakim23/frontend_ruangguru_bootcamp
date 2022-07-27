// Dari contoh yang telah diberikan, cobalah untuk membuat stack yang memiliki
// jumlah maksimal elemen sebanyak 10 dengan menambahkan atribut size.
// Gunakan array untuk menyimpan data pada stack.
// Pada kasus ini, data yang disimpan berupa integer.

class Stack {
  #data;
  #size;
  #top;
  constructor() {
    // TODO: answer here
    this.#data = [];
    this.#size = 10;
    this.#top = -1;
  }
  get data() {
    return this.#data;
  }
  get size() {
    return this.#size;
  }
  get top() {
    return this.#top;
  }
}

let stack = new Stack();
console.log(stack.data.length);
console.log(stack.size);
console.log(stack.top);

module.exports = Stack;
