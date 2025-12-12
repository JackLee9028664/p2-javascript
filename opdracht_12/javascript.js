let budget = 100;
let product = prompt("Hoeveel kost het product dat je wilt kopen?");
let textelement = document.getElementById("1c")

if (product <= budget) {
    console.log("U heeft genoeg geld!");
textelement.innerHTML =  ("u heeft genoeg budget");
textelement.style.color = "green";
} else {
console.log("je hebt niet genoeg");
textelement.innerHTML = "je hebt niet genoeg budget";
textelement.style.color ="red";
}