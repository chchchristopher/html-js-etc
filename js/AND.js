alert('&& returns first falsy val, or the last val, if all are truthy');
alert(`3 > 2 && 5 > 3 && 10 > 1000 && 1 == 1: ${3>2 && 5>3 && 10>1000 && 1==1}`);
alert(`1 && 2 && 3 && 4: ${1 && 2 && 3 && 4}`);

alert(`alert(1) && alert(2) && alert(3): performs alert(1) then stops, returning undefined, as alert(1) returns undefined, a falsy value.`);
alert(alert(1) && alert(2) && alert(3));

alert("alert( null || 2 && 3 || 4 ); starts with 2 && 3, which returns last truthy value: 3, then the ORs return first truthy value: 3");
alert( null || 2 && 3 || 4 );
