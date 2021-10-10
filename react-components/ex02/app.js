const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
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

console.warn(`
Folosind obiectul person si reduce, afiseaza in consola un string care contine skillurile de pe pozitiile pare ale arrayului, separate prin virgula

`);

let message = '';

message = person.skills.reduce((message, skill, index) => {
  return `${message} ${index === 0 ? '' : ','} ${skill}`;
}, '');

console.log(message);

console.warn(`
in mod similar, afiseaza skillurile care nu incep cu j.
`);

message = person.skills.reduce((message, skill, index) => {
  if (skill.startsWith('j')) {
    return message;
  }

  return ` ${message} ${index === 0 ? '' : ','} ${skill}`;
});

console.log(message);

console.warn(`Folosind reduce afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);

message = person.friends.reduce(
  (message, { name, surname }, index, friends) => {
    const punctuation = index === friends.length - 1 ? '.' : ', ';

    return `${message}${name} ${surname}${punctuation}`;
  },
  'Prietenii mei se numesc ',
);

console.log(message);

console.warn(`Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.
`);

message = person.friends.reduce((sumYears, friend) => {
  const { age } = friend;

  return age >= 30 ? sumYears + age : sumYears;
}, 0);

console.log(message);

console.warn(`doar skillurile care incep cu j. `);

let filteredSkills = person.skills.reduce((filteredSkills, skill) => {
  if (!skill.startsWith('j')) {
    return filteredSkills;
  }

  filteredSkills.push(skill);
  return filteredSkills;
}, []);

console.log(filteredSkills);

console.warn(`Folosind reduce afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);

message = person.friends.reduce(
  (message, { name, surname }, index, friends) => {
    let punctuation = index === friends.length - 1 ? '.' : ', ';

    return `${message}${name} ${surname} ${punctuation}`;
  },
  'Prietenii mei se numesc',
);

console.log(message);

console.warn(
  `Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.`,
);

message = person.friends.reduce((sum, friend) => {
  let { age } = friend;
  if (age >= 30) {
    return sum + age;
  } else {
    return sum;
  }
}, 0);

console.log(message);

console.warn(`
Folosind reduce, afiseaza suma anilor de nastere a persoanelor.`);

message = person.friends.reduce((message, friend) => {
  const currentYear = 2021;
  const { age } = friend;
  const birthday = currentYear - age;
  return `${message} ${birthday}`;
}, 'Suma anilor de nastere este ');

// nu stiu sa fac :(

console.log(message);

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara. `);

message = person.friends.reduce((message, friend, friends) => {
  if (friend.age % 2 !== 0) {
    return `${message} ${friend.name} este o diferenta de ${
      person.age - friend.age
    } ani`;
  } else {
    return message;
  }
}, `Intre ${person.name} si `);
console.log(message);

console.warn(
  `Folosind obiectul person si reduce, afiseaza in consola un string care contine skillurile persoanei, separate prin virgula`,
);

message = person.skills.reduce((accumulator, value, index, friends) => {
  return `${accumulator}${index === friends.skills - 1 ? '.' : ','}${value}`;
}, []);

console.log(message);

console.warn(
  `Folosind reduce afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx , xxx."`,
);

message = person.friends.reduce((message, friends, index) => {
  return `${message} ${friends.surname}${index === friends.length ? '.' : ','}`;
}, 'Numele de familie ale prietenilor mei sunt');

console.log(message);

console.warn(` Folosind reduce, afiseaza suma anilor  persoanelor. `);

message = person.friends.reduce((sum, { age }) => sum + age, person.age);
console.log(message);
