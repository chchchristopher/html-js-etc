let coat = prompt("Would you like a coat? (Y)es or (N)o", '');

if (coat == "N") {
  alert("Ok, bye!");
} else if (coat == "Y") {
  let size = prompt("What size, 0-10?", 5);
  (size < 0) ? alert("That size is too small, sorry.") :
    (size < 3) ? alert(`Here's your small coat, size ${size}.`) :
    (size < 7) ? alert(`Here's your medium coat, size ${size}.`) :
    (size <= 10) ? alert(`Here's your large coat, size ${size}.`) :
    alert("That size is too big, sorry.");
} else {
  alert("That wasn't yes or no");
}
