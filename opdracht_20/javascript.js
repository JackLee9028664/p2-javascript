let Emoji = ["😁","🙂","🥰","😋","🤗","😑"];
document.getElementById("tekst").style.display = "none";

function emotie() {
let RandomEmoji = Math.floor(Math.random() * Emoji.length);
let randomEmojiKeuze = Emoji[RandomEmoji]
document.getElementById("tekst").innerHTML = randomEmojiKeuze;
document.getElementById("tekst").style.display = "block";
}

