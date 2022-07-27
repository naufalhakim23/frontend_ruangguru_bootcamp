/**
 * Kali ini kalian akan mengimplementasikan Method Chaining pada OOP dengan membuat sebuah Advance Calculator.
 * Class Calculator memiliki properti operand
 * Terdapat beberapa method yang perlu kalian buat diantaranya:
 * - `add` : untuk menambahkan operand yang diterima
 * - `subtract` : untuk mengurangi operand yang diterima
 * - `multiply` : untuk mengaklikan operand yang diterima
 * - `divide` : untuk membagi operand yang diterima
 * - `square` : untuk mencari pangkat dari operand yang diterima
 * - `squareRoot` : untuk mencari akar dari operand yang diterima
 * setiap method yang dibuat akan menerima argumen berupa integer
 */

class Calculator {
  constructor (operand) {
    this.operand = operand;
  }
  // TODO: answer here
  add(operand) {
    this.operand += operand;
    return this;
  }
  subtract(operand) {
    this.operand -= operand;
    return this;
  }
  multiply(operand) {
    this.operand *= operand;
    return this;
  }
  divide(operand) {
    this.operand /= operand;
    return this;
  }
  square(operand) {
    this.operand = this.operand ** operand;
    return this;
  }
  squareRoot(operand) {
    this.operand = this.operand ** (1/2);
    return this;
  }
}
// console.log(new Calculator(10).add(10).operand);
// console.log(new Calculator(10).subtract(10).operand);
// console.log(new Calculator(10).multiply(10).operand);
// console.log(new Calculator(10).divide(10).operand);
console.log(new Calculator(100).square(1).operand);
// console.log(new Calculator(10).squareRoot(10).operand);

module.exports = Calculator
