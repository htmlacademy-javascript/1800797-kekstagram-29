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
};

console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));
console.log(extractNumber(2023));
console.log(extractNumber(-1));
console.log(extractNumber(1.5));

const startWorkTime = '08:00';
const endWorkTime = '17:30';
const startMeetingTime = '14:30';
const meetingDuration = 90;

const startWorkArr = startWorkTime.split(':');
const startWorkInMinutes = Number(startWorkArr[0]) * 60 + Number(startWorkArr[1]);

const endWorkArr = endWorkTime.split(':');
const endWorkMinutes = Number(endWorkArr[0]) * 60 + Number(endWorkArr[1]);

const startMeetArr = startMeetingTime.split(':');
const startMeetInMin = Number(startMeetInMin[0]) * 60 + Number(startMeetInMin[1]);

const endMeetingMin = startMeetInMinutes + meetingDuration;

console.log(startWorkInMinutes);
console.log(endWorkMinutes);
console.log(startMeetInMin);
console.log(endMeetingMin);

console.log(startMeetInMin >= startWorkInMinutes && startMeetInMin <= endWorkMinutes && endMeetingMin >= startMeetInMin && endMeetingMin <= endWorkMinutes);


const getMinutesPoint = (str) => {
  const arr = str.split(':');
  return Number(arr[0]) * 60 + Number(arr[1]);
};

const getMinutesPointByDuration = (start, duration) => start + duration;

const isMeetingTimeOk = (startWorkTime, endWorkTime, startMeetingTime, meetingDuration) => getMinutesPoint(startMeetingTime) >= getMinutesPoint(startWorkTime)
  && getMinutesPoint(startMeetingTime) <= getMinutesPoint(endWorkTime)
  && getMinutesPointByDuration(getMinutesPoint(startMeetingTime), meetingDuration) >= getMinutesPoint(startWorkTime)
  && getMinutesPointByDuration(getMinutesPoint(startMeetingTime), meetingDuration) <= getMinutesPoint(endWorkTime);

console.log(isMeetingTimeOk('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingTimeOk('8:0', '10:0', '8:0', 120)); // true
console.log(isMeetingTimeOk('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingTimeOk('14:00', '17:30', '08:0', 90)); // false
console.log(isMeetingTimeOk('8:00', '17:30', '08:00', 900)); // false
