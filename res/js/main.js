const sledovanostc = document.getElementById("sledovanostc");
const vydelavka = document.getElementById("vydelavka");

let sledovanost = parseInt(localStorage.getItem("sledovanost"));
let penize = parseInt(localStorage.getItem("penize"));


localStorage.setItem("sledovanost", sledovanost);
localStorage.setItem("penize", penize);

sledovanostc.innerHTML = `Sledovanost: ${sledovanost}`;
vydelavka.innerHTML = `Peníze: ${penize}`;
