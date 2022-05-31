number = prompt('Pick a number: ', 100);
let message = (number < 10) ? 'Less than 10' :
  (number < 50) ? '10 to 49' :
  (number < 100) ? '50 to 99' :
  '100 or more!';
alert(message);
