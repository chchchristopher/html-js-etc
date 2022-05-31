alert("    126   " / "5"); // parsed as 126/5, gives 25.2 but has typeof NaN
                           // Maybe because it's ultimately a string?
alert(`15 plus null is: ${15 + null}`);
alert(`the type of Number(126/"5") is: ${typeof Number(126/"5")}`);
