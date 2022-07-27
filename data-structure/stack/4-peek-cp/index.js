// Dari inisiasi stack dengan maksimal elemen sebanyak 10, implementasikan operasi peek.

module.exports = class Stack {
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

  pop() {
    // TODO: answer here
    if (this.#top == -1) {
      throw "stack underflow";
    } else {
      const poppedVal = this.#data.pop();
      this.#top -= 1;
      return poppedVal;
    }
  }

  peek() {
    // TODO: answer here
    if (this.#top == -1) {
      throw "stack is empty";
    } else {
      return this.#data[this.#top];
    }
  }
};
