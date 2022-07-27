// Dari inisiasi stack dengan jumlah maksimal elemen 10,
// cobalah implementasikan operasi push.

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
  push(elemen) {
    // TODO: answer here
    if (this.top < this.size - 1) {
      this.#data[++this.#top] = elemen;
    } else {
      throw new Error("stack overflow");
    }
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);

console.log(stack.data.length);
console.log(stack.size);
console.log(stack.top);
console.log(stack.data[0]);
module.exports = Stack;
