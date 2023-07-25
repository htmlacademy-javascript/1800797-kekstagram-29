const users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
    age: 19
  },
  {
    id: 2,
    name: 'Jack',
    isActive: false,
    age: 26
  },
  {
    id: 3,
    name: 'Mike',
    isActive: true,
    age: 80
  },
];

const getUserNames = (arr) => {
  const names = [];
  for (let i = 0; i <= users.length - 1; i++) {
    if (arr[i].isActive) {
      names.push(arr[i].name);
    }

  }
  return names;
};

let jsName = prompt('Какое официальное назвагние JS?', '');

if (jsName == 'ECMAScript') {
  alert('Верно');
} else {
  alert('Не знаете? ECMAScript');
}

let value = prompt('Какое число?', 0);

if (value > 0) {
  alert('1')
} else if (value < 0) {
  alert ('-1')
} else {
  alert('0')
}

result = (a + b < 4) ? 'malo' : 'mnogo';

let message = (login == 'sotrudink') ? 'privet' :
  (login == 'director') ? 'zdravstvuite' :
  (login == '') ? 'net logina' :
  '';

let message;

if (login == 'sotrudnik') {
  message = 'privet';
} else if (login == 'director') {
  message = 'zdravstuvite';
} else if (login == '') {
  message = 'net logina';
} else {
  message = '';
}
