let muzieken = [ {
    titel: "うっせぇわ",
    artiest: "Ado",
    duur: "3.24",
}, {
  titel: "D/N/A",
  artiest:  "Azari",
  duur: "2,13",
}, {
 titel:"Next Nest",
 artiest:"Satsuki ga Tenkomori",
 duur: "4.08",
}, {
 titel: "Hand in Hand",
 artiest: "kz",
 duur: "5.19",
}, {
titel: "The Vampire", 
artiest: "DECO*27",
duur: "3.00",
}] 

for (let muziek of muzieken) {
document.getElementById("1c").innerHTML +=
  muziek.titel + " - " + muziek.artiest + " " + muziek.duur + " <br>";
}