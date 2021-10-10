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

console.warn(`
Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele cu prima si ultima litera mari.
`);

arr = person.skills.map((skill) => {
  const [firstLetter, ...letters] = skill;

  const firstUp = firstLetter.toUpperCase();
  const finalUp = letters[letters.length - 1].toUpperCase();
  const middle = letters.slice(0, skill.length - 2).join('');

  const word = firstUp + middle + finalUp;
  return word;
});
console.log(arr);

console.warn(`Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele inversate (exemplu: lmth)
`);

arr = person.skills.map((skill) => {
  const backward = skill.split('');
  const reversed = backward.reverse(0);
  return reversed.join('');
});

console.log(arr);

console.warn(`Folosind metoda map pe arrayul friends, returneaza un array care sa contina propozitiile
“{friendName} are {age} ani.”`);

arr = person.friends.map(({ name, age }) => {
  return `${name} are ${age} ani`;
});

console.log(arr);

console.warn(
  `Folosind metoda map pe arrayul friends, returneaza un array care contine numele inversat al prietenilor pe fiecare pozitie (exemplu: Stevenson Steven)`,
);

arr = person.friends.map(({ name }) => {
  const nameSplit = name.split('');
  const finalName = nameSplit.reverse().join('');
  return finalName;
});

console.log(arr);

console.warn(
  `Folosind metoda map pe arrayul friends, returneaza un array care contine pe fiecare pozitie diferenta dintre lungimea totala al numelui complet (fara spatii) si varsta prietenului de pe iteratie`,
);

arr = person.friends.map(({ name, surname, age }) => {
  const length = name.length - surname.length;

  return Math.abs(length - age);
});

console.log(arr);

console.warn(
  `Folosind metoda map pe arrayul skills returneaza un array care contine diferenta dintre lungimea fiecarui skill si varsta prietenului`,
);

arr = person.skills.map((skill, age) => {
  return Math.abs(skill.length - age);
});

console.log(arr);
