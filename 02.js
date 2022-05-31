function loadDoc(value) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main").innerHTML = this.responseText;
    }
  };
  let loc = `${value}.txt`;
  xhttp.open("GET", loc, true);
  xhttp.send();
}
