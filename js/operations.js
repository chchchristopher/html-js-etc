let x = prompt('Enter x: ', 5);
let y = prompt('Enter y: ', 3);
alert(`x + y: ${x+y}, x % y: ${x%y}, x ** (1/y): ${x ** (1/y)}`); 
let cannot = "Can" + "not";
alert("+ concats strings");
alert(cannot);
alert(`string "1" + number 3 coerces the 3 into a string and concats them: ${'1' + 3}`);
alert(`Everything after first concat is considered a string: 2 + 2 + "1" + 4 + 5 + "8" + "8": ${2+2+"1"+4+5+"8"+"8"}`);

let apples = "3";
let oranges = "6";
alert(`apples + oranges will give 36, +apples + +oranges gives 9`);
