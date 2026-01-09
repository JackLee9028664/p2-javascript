let teller = 0;
let getal = 10;

document.getElementById("aantal").innerHTML ="you gave " + teller;
document.getElementById("reset").style.display = "none"

function klik() {
teller = teller + 1;

document.getElementById("aantal").innerHTML ="you gave " + teller;
if(teller === getal)    {
document.getElementById("tekst").innerHTML = "You won!!"

document.getElementById("tekst").style.color = "white";
document.getElementById("aantal").style.display = "None";

document.getElementById("Give").style.display = "none";
document.getElementById("reset").style.display = "block"
document.getElementById("pizza").style.display = "none"



document.body.style.backgroundColor = "black";
document
} else {

}

}

function reset() {
    document.getElementById("aantal").innerHTML = reset();
}