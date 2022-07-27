function ageDistribution(persons) {
  let result = new Map();
  //   TODO: answer here
  for (let i = 0; i < persons.length; i++) {
    let age = persons[i].age;
    if (!result.has(age)) {
      result.set(age, 1);
    } else {
      result.set(age, result.get(age) + 1);
    }
  }
  //     }
  //   persons.forEach((person) => {
  //     // result.set(person.age, true);
  //     // let age = person.age;
  //     if (result.has(person.age)) {
  //       result.set(person.age, result.get(person.age) + 1);
  //     } else {
  //       result.set(person.age, 1);
  //     }
  //   });
  return result;
}

function groupByAge(persons) {
  let result = new Map();
  // TODO: answer here
  for (let i = 0; i < persons.length; i++) {
    let age = persons[i].age;
    if (!result.has(age)) {
      result.set(age, [persons[i]]);
    } else {
      result.get(age).push(persons[i]);
    }
  }
  //   persons.forEach((person) => {
  //     if (result.has(person.age)) {
  //       result.set(person.age, [...result.get(person.age), person]);
  //     } else {
  //       result.set(person.age, [person]);
  //     }
  //   });
  return result;
}

let people = [
  { name: "Bob", age: 21 },
  { name: "Sam", age: 28 },
  { name: "Ann", age: 21 },
  { name: "Joe", age: 22 },
  { name: "Ben", age: 28 },
];

console.log(ageDistribution(people));
console.log(groupByAge(people));

module.exports = {
  ageDistribution,
  groupByAge,
};
