let favouriteGerechten = ["Kapsalon","Pizza","Lasanga","Saoto","Pom","Nasi"];

// eerste item in array
let eersteitem = favouriteGerechten[0];

// laaste item in de array
let laasteitem = favouriteGerechten[favouriteGerechten.length-1];

 // totaal aantal items in array
let totaalaantalitem = favouriteGerechten.length;


let output = document.getElementById("output")
output.innerHTML += "eerste item: " + eersteitem + "<br>";
output.innerHTML += "laatste item: " + laasteitem + "<br>";
output.innerHTML += "totaal item: " + totaalaantalitem + "<br>";

// verandere een van de items in de array en toon de nieuwe lijst.

favouriteGerechten[4] = "patat";

let newitem = document.getElementById("newitem");

newitem.innerHTML += "<li>" + favouriteGerechten[0]+ "</li>";
newitem.innerHTML += "<li>" + favouriteGerechten[1]+ "</li>";
newitem.innerHTML += "<li>" + favouriteGerechten[2]+ "</li>";
newitem.innerHTML += "<li>" + favouriteGerechten[3]+ "</li>";
newitem.innerHTML += "<li>" + favouriteGerechten[4]+ "</li>";
newitem.innerHTML += "<li>" + favouriteGerechten[5]+ "</li>";
