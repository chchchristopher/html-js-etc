// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

let age = prompt("Enter age: ", 40);

if (age <= 14 || age >= 90) {
  alert("Age is 14 or less, or 90+");
} else {
  alert("Age is 15 to 89");
}

age2 = prompt("Enter age again: ", 30);

if (!(age2 >= 14 && age2 <= 90)) {
  alert("Age is not between 14 and 90, inclusively");
} else {
  alert("Age is 15 to 89");
}
