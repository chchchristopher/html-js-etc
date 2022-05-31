let year = prompt('What year is it? ', '');

if (year == 2022) {
  alert('Great job');
  alert('That was correct');
}

let age = prompt('Age?', 21);
let cond = (age > 20);
if (cond) {
  alert('More than 20');
} else if (age == 20) {
  alert('Exactly 20');
} else {
  alert('Less than 20');
}

let number = prompt('Pick a number: ', 10);
let howBig = (number > 10) ? true : false;
alert(`Your number was greater than 10: ${howBig}`);

number = prompt('Pick another number: ', 100);
let message = (number < 10) ? 'Less than 10' :
  (number < 50) ? 'between 10 and 50' :
  (number < 101) ? 'between 50 and 100' :
  'More than 100!';
alert(message);
