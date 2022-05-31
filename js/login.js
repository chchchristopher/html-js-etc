let knockKnock = prompt("Who's there?", '');

if (knockKnock == "Admin") {
  let pw = prompt("Password?", '');
  if (pw == "TheMaster") {
    alert("Welcome!");
  } else if (pw == null || pass == '') {
    alert("Canceled");
  } else {
    alert("Wrong pw");
  }
} else if (knockKnock == null) {
    alert("Canceled");
  } else {
    alert("Don't know you");
}


