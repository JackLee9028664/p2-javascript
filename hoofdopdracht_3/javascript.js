let Good = ["nice", "goed bezig", "keep going", "dont stop", "goodwork","ga niet roken", ":)","( •_•)","(ᗒᗣᗕ)՞","(シ_ _)シ"];
let randomIndex = Math.floor(Math.random() * Good.length);
let randomGoods = Good[randomIndex];

let Bad = ["terrible", "slecht bezig", "stop going", "stop", "badwork","stop with roken", ":(","( ⋋ · ⋌ ) very anger","(◣_◢)","(¬､¬)"];
let randomBadIzer = Math.floor(Math.random() * Bad.length);
let randomBad = Bad[randomBadIzer];




let knop = document.getElementById("button");
knop.addEventListener("click", begroet);


function begroet() {
    let InPut = document.getElementById("naamVeld");
    let naam = InPut.value;
    let resultaat = document.getElementById("tekst");

    if (naam === "no") {
        resultaat.innerHTML =
            randomBad + " don't roken is slecht voor je leven en je gezondheid";
    } else  {
        
    }
        
        if (naam === "ja") {
        resultaat.innerHTML =
            randomGoods + " goed bezig! Je voelt je fitter, krijgt meer energie en leeft langer als je niet rookt.";
    } else {
        resultaat.innerHTML = "Vul 'ja' of 'no' in 🙂";
    }
}