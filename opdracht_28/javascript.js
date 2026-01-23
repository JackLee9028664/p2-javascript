let ramen = [{
naam: "Udon",
emoji: "🍜",
rating: "4.0 to 4.3",
}, {
naam: "Soba",
emoji: "🍜",
}, {
naam: "Somen",
emoji: "🍜",
}, {
naam: "Harusame",
emoji: "🍜",
},]

let broth = [{
naam: "Shoyu ",
emoji: "🍶",
}, {
naam: "Shio",
emoji: "🍶",
}, {
naam: "miso",
emoji: "🍵",
}, {
naam:  "Tonkotsu",
emoji: "🍛",
}, ]

let toppings = [{
naam: "Chashu",
emoji: "🍖",
}, {
naam: "Ramen Egg",
emoji: "🥚",
}, {
naam: "Menma",
emoji: "🎋",
}, {
naam: "Nori",
emoji: "🍙",
}, ]     

let spiceLevel = [{
naam: "13,200 SHU, extremely hot.",
emoji: "🌶️ ",
}, {
naam: " 10,000 SHU, very hot.",
emoji: "🔥",
}, {
naam: "4,705 SHU",
emoji: "🔥",
}, {
naam: "1,200 shu",
emoji: "🔥",
}, ]  

let box = document.getElementById("button");
box.addEventListener("click", yeet);

function yeet() {
let randomRamen =  Math.floor(Math.random() * ramen.length);
let randomRamenKeuzer = ramen[randomRamen]

let randomSpiceLevel =  Math.floor(Math.random() * spiceLevel.length);
let randomSpiceKeuzer = spiceLevel[randomSpiceLevel]

let randomBroth =  Math.floor(Math.random() * broth.length);
let randomBrothKeuzer = broth[randomBroth]

let randomToppings =  Math.floor(Math.random() * toppings.length);
let randomToppingsKeuzer = toppings[randomToppings]

document.getElementById("1c").innerHTML = "use the ramen type " + randomRamenKeuzer.naam + randomRamenKeuzer.emoji + "with the topping "
+ randomToppingsKeuzer.naam + randomToppingsKeuzer.emoji + "with the broth flavor of " + randomBrothKeuzer.naam + randomBrothKeuzer.emoji
 + "spice level:" + randomSpiceKeuzer.naam;
}