let firstName = prompt("Enter first name if you want: ", '');
let lastName = prompt("Enter last name if you want: ", "");
let nickName = prompt("Enter nick name if you want: ", "");

alert(firstName || lastName || nickName || "Default");
