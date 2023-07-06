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
    };

  }
  return names;
};

const getUserNames1 = (arr) => arr.map((user) => ({ id: user.id, alias: user.name }));

const getActiveUsers = (arr) => arr
  .filter((item) => item.isActive)
  .map((activeUser) => activeUser.name);

const sortByAge = (arr) => arr.sort((item1, item2) => item1.age > item2.age ? 1 : -1)
  .map((user) => `${ user.name}: ${user.age}`);

console.log(sortByAge(users))

const name = prompt('what is your name?', '');
alert (name);
