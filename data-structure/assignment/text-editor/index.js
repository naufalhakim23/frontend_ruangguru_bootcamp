class TextEditor {
  #undoStack;
  #redoStack;
  #data;

  constructor() {
    // TODO: answer here
    this.#undoStack = [];
    this.#redoStack = [];
  }
  get undoStack() {
    return this.#undoStack;
  }
  get redoStack() {
    return this.#redoStack;
  }

  write(c) {
    // TODO: answer here
    // masukkan karakter
    this.#undoStack.push(c);
  }

  read() {
    // TODO: answer here
    // return string
    return this.#undoStack.join("");
  }

  undo() {
    // TODO: answer here
    let poppedVal = this.#undoStack.pop();
    if (poppedVal === undefined) {
      return "";
    } else {
      this.#redoStack.push(poppedVal);
    }
  }

  redo() {
    // TODO: answer here
    if (this.#redoStack.length === 0) {
      return "";
    } else {
      this.#undoStack.push(this.#redoStack.pop());
    }
  }
}

let te = new TextEditor();
// te.write("h");
// console.log(te.undoStack.length);
// console.log(te.undoStack[0]);

// te.write("e");
// te.write("y");
// console.log(te.undoStack.length);
// console.log(te.undoStack[0]);
// console.log(te.undoStack[1]);
// console.log(te.undoStack[2]);
// let output = te.read();
// console.log(output);
te.undo();
console.log(te.undoStack);
console.log(te.redoStack);

module.exports = TextEditor;
