const profile = document.getElementById("profile");
const counter = document.getElementById("counter");
const nomon = document.getElementById("nomon");

const box1 = document.getElementsByClassName("box1")[0];
const box2 = document.getElementsByClassName("box2")[0];
const box3 = document.getElementsByClassName("box3")[0];
const box4 = document.getElementsByClassName("box4")[0];
const box5 = document.getElementsByClassName("box5")[0];
const box6 = document.getElementsByClassName("box6")[0];

let penize = parseInt(localStorage.getItem("penize")) || 0;

let audio = new Audio("./res/audio/retardovana.mp3");

localStorage.setItem("penize", penize);


profile.onclick = () => {
penize++;
counter.innerHTML = penize;
localStorage.setItem("penize", penize);
};
counter.innerHTML = penize;

box1.onclick = () => {
    if (penize < 100) {
        nomon.innerHTML = "nemas dodstatek penez";
    }
    if (penize >= 100) {
        document.body.style.backgroundImage = "url(./res/img/lucinkabox1.jpg)";
        penize -= 100;
        localStorage.setItem("penize", penize);
        nomon.innerHTML = "";
        counter.innerHTML = penize;
    }
};      
box2.onclick = () => {
    if (penize < 200) {
        nomon.innerHTML = "nemas dodstatek penez";
    }
    if (penize >= 200) {
        document.body.style.backgroundImage = "url(./res/img/lucinkabox2.jpg)";
        penize -= 200;
        localStorage.setItem("penize", penize);
        nomon.innerHTML = "";
        counter.innerHTML = penize;
    }
};
box3.onclick = () => {
    if (penize < 300) {
        nomon.innerHTML = "nemas dodstatek penez";
    }
    if (penize >= 300) {
        document.body.style.backgroundImage = "url(./res/img/lucinkabox3.jpg)";
        penize -= 300;
        localStorage.setItem("penize", penize);
        nomon.innerHTML = "";
        counter.innerHTML = penize;
    }
};
box4.onclick = () => {
    if (penize < 400) {
        nomon.innerHTML = "nemas dodstatek penez";
    }
    if (penize >= 400) {
        document.body.style.backgroundImage = "url(./res/img/lucinkabox4.jpg)";
        penize -= 400;
        localStorage.setItem("penize", penize);
        nomon.innerHTML = "";
        counter.innerHTML = penize;
    }
};
box5.onclick = () => {
    if (penize < 500) {
        nomon.innerHTML = "nemas dodstatek penez";
    }
    if (penize >= 500) {
        document.body.style.backgroundImage = "url(./res/img/ferous.jpg)";
        penize -= 500;
        localStorage.setItem("penize", penize);
        nomon.innerHTML = "";
        audio.play();
        counter.innerHTML = penize;
    }
};
box6.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/onlyfans_logo.png)";
    if (penize == 0) {
        nomon.innerHTML = "";
    }
};
