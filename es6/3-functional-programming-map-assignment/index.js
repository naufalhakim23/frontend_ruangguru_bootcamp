/**
 * Keluarkan rata-rata dari semua murid yang ada.
 *
 * Contoh
 *  input: [
 *  {
 *      name: "Yono",
 *      nilai: [6, 8, 7, 7, 5, 5]
 *  },
 *  {
 *      name: "Dodi",
 *      nilai: [9, 6, 5, 10, 8, 6]
 *  },
 *  {
 *      name: 'Dori',
 *      nilai: [4, 5, 6, 3, 5, 6]
 *  }
 * ]
 *
 *  output: [{ name: "Yono", rataNilai: 6}, { name: "Dodi", rataNilai: 7}, { name: "Dori", rataNilai: 6}]
 *
 * Hint: gunakan Math.round() untuk membulatkan nilai rata-rata.
 */

const returnUserAverageScore = (students) => {
  // TODO: answer here
  // console.log(students)
  students = [...students];
  const averageScore = [];
  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    for (let j = 0; j < students[i].nilai.length; j++) {
      sum += students[i].nilai[j];
    }
    averageScore.push({
      name: students[i].name,
      rataNilai: Math.round(sum / students[i].nilai.length)
    })
  }
  return averageScore
};
console.log(returnUserAverageScore([
  {
     name: "Yono",
     nilai: [6, 8, 7, 7, 5, 5]
  },
  {
    name: "Dodi",
    nilai: [9, 6, 5, 10, 8, 6]
  },
  {
    name: 'Dori',
    nilai: [4, 5, 6, 3, 5, 6]
  }
]))
module.exports = returnUserAverageScore