const reyko = document.getElementById("reyko");
const baba = document.getElementById("baba");
const babaHP = document.getElementById("babaHP");
const attack = document.getElementById("attack");
const infod = document.getElementById("infod");
const psled = document.getElementById("psled");
const reykoHP = document.getElementById("reykoHP")

let sledovanost = parseInt(localStorage.getItem("sledovanost")) || 0;

localStorage.setItem("sledovanost", sledovanost);




attack.onmousedown = () => {
    if (
        reykoHP.innerHTML > 0 && babaHP.innerHTML > 0) {
        babaHP.innerHTML--;
        reyko.style.left = "35%";
        reyko.style.backgroundImage = "url(./res/img/reykoattack.png)"
    }
};

attack.onmouseup = () => {
    reyko.style.left = "25%";
    reyko.style.backgroundImage = "url(./res/img/reyko.png)";
};

const playerDmgInterval = setInterval (() => {
reykoHP.innerHTML--;
if(reykoHP.innerHTML <= 0) {
    clearInterval(playerDmgInterval);
    infod.innerHTML = "Zemřel si";
}
if (
    babaHP.innerHTML <= 0) {
        infod.innerHTML = " Láďa Hruška padl a vyučil tě být mistrem levných půjček";
        psled.innerHTML = "Z této zkušenosti dostáváš 800 sledovanosti";
        sledovanost += 800;
        localStorage.setItem("sledovanost", sledovanost);
        clearInterval(playerDmgInterval);
    }
},500)
