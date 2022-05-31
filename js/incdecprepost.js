let counter = 1;
let a = ++counter;

alert(`a = ++counter. counter: ${counter}, a: ${a}.`);
a = ++counter;
alert(`again: a = ++counter. counter: ${counter}, a: ${a}.`);

counter = 1;
a = counter++;

alert(`a = counter++. counter: ${counter}, a: ${a}.`);
a = counter++;
alert(`again: a = counter++. counter: ${counter}, a: ${a}.`);
