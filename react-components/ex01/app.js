const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 34,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `folosind metoda map, returneaza si afiseaza in consola un array in care fiecare consoana e scrisa cu litera mare( vocalele nu)`,
);

let arr = [];

arr = person.skills.map((skill) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const letterArray = skill.split('');

  const mutatedLetterArray = [];

  letterArray.forEach((letter) => {
    if (vowels.includes(letter)) {
      mutatedLetterArray.push(letter);
    } else {
      mutatedLetterArray.push(letter.toUpperCase());
    }
  });

  return mutatedLetterArray.join('');
});
console.log(arr);

console.warn(
  `Folosing map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia "Ma numesc {name}{surname} si am {age} ani"`,
);

arr = person.friends.map(({ name, surname, age }) => {
  return `Ma numesc ${name} ${surname} si am ${age} ani`;
});
console.log(arr);

console.warn(`
  folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia "diferenta de varsta dintre {friendName} si {age} este {diff}"
`);

arr = person.friends.map((friend) => {
  const { name, age } = friend;

  return `
    Diferenta de varsta dintre ${name} si ${person.name} este${Math.abs(
    person.age - age,
  )} ani`;
});
console.log(arr);

console.warn(
  `Returneaza si afiseaza un array in care fiecare pozitie contine diferenta intre varsta persoanei si lungimea cuvantului de pe arrayul skill`,
);

arr = person.skills.map((skill) => {
  return Math.abs(skill.length - person.age);
});
console.log(arr);
