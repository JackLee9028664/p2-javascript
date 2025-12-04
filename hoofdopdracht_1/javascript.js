

function dark_mode() {
document.getElementById("title").innerHTML = ("good night 🌙");
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
}

function Light_Mode() {
    document.getElementById("title").innerHTML = ("good morning! ☀️");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}




dark_mode();
Light_Mode();
