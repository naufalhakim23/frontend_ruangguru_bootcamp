class Score {
  constructor(name, correct, wrong, empty) {
    // TODO: answer here
    this.name = name;
    this.correct = correct;
    this.wrong = wrong;
    this.empty = empty;
  }
}

class Scores {
  constructor(scores) {
    // TODO: answer here
    // this.scores = scores;
    this.scores = scores;
  }

  topStudents() {
    // TODO: answer here
    let newData = [];
    let rankStudent = [];
    let tempScore = 0;
    let swapped = false;

    for (let i = 0; i < this.scores.length; i++) {
      // console.log(this.scores[i].correct);
      // console.log(this.score[i].wrong);
      // console.log(this.score[i].empty);
      tempScore = 4 * this.scores[i].correct - this.scores[i].wrong;
      newData.push({
        name: this.scores[i].name,
        score: tempScore,
        correct: this.scores[i].correct,
      });
    }
    //sort descending
    for (let i = 0; i < newData.length; i++) {
      for (let j = 0; j < newData.length - 1; j++) {
        if (newData[j].score < newData[j + 1].score) {
          let temp = newData[j];
          newData[j] = newData[j + 1];
          newData[j + 1] = temp;
          swapped = true;
        }
        if (newData[j].score == newData[j + 1].score) {
          if (newData[j].correct < newData[j + 1].correct) {
            let temp = newData[j];
            newData[j] = newData[j + 1];
            newData[j + 1] = temp;
            swapped = true;
          }
        }
      }
      if (!swapped) {
        break;
      }
    }

    for (let i = 0; i < newData.length; i++) {
      rankStudent.push(newData[i].name);
    }
    return rankStudent;
  }
}
let s = [];
s.push(new Score("Levi", 3, 2, 2)); //score: 3*4 - 2 = 10
s.push(new Score("Agus", 3, 4, 0)); //score: 3*4 - 4 = 8
s.push(new Score("Anon", 3, 0, 4)); //score: 3*4 - 0 = 12
let rigged = new Scores(s);
console.log(rigged.topStudents());
module.exports = {
  Score,
  Scores,
};
