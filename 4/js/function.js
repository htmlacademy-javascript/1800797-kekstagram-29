// function stringLength (string, length) {
//   return string.length <= length;
// }

const checkLength = (str, lettersLimit) => str.length <= lettersLimit;

console.log(checkLength('проверяемая строка', 20));
console.log(checkLength('проверяемая строка', 18));
console.log(checkLength('проверяемая строка', 10));

function isPalindrom(rawString) {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(- i - 1)) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrom('топот'));
console.log(isPalindrom('ДовОд'));
console.log(isPalindrom('Кекс'));
console.log(isPalindrom('Лёша на полке клопа нашёл '));

// function extractNumber(arg) {
//   const string = arg.toString();
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     if (!Number.isNaN(parseInt(string[i], 10))) {
//       result += string[i];
//     }
//   }

//   return parseInt(result, 10);
// }

const extractNumber = (str) => {
  let newString = '';
  str = str.toString();
  for (let i = 0; i < str.length; i++) {
    newString += !Number.isNaN(parseInt(str[i], 10)) ? parseInt(str[i], 10) : '';
  }

  return newString;
}

console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));
console.log(extractNumber(2023));
console.log(extractNumber(-1));
console.log(extractNumber(1.5));
