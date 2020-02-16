
const kosandra = document.querySelector("#kosandra");
const sanava = document.querySelector("#sanavabich");
const vavilon = document.querySelector("#vavilon");
const gotlove = document.querySelector("#gotlove");
const wheniwin = document.querySelector("#wheniwin");
const captain = document.querySelector("#captain");

const player = document.querySelector("#player");
const text = document.querySelector("#maintext");

const reset = document.querySelector("#reset");
const warning = document.querySelector(".warning");

const kosandraSrc = "https://www.youtube.com/embed/x1ZtIVuHph0?autoplay=1&muted=1";
const sanavabichSrc = "https://www.youtube.com/embed/OKQ85j46p0g?autoplay=1&muted=1";
const wheniwinSrc = "https://www.youtube.com/embed/8JnZY-elPFk?autoplay=1&muted=1";
const vavilonSrc ="https://www.youtube.com/embed/MEsi4LUYtrI?autoplay=1&muted=1";
const gotloveSrc = "https://www.youtube.com/embed/nidQCt_HEsY?autoplay=1&muted=1";
const captainSrc = "https://www.youtube.com/embed/i0Oe1KQBwQg?autoplay=1&muted=1";

kosandra.addEventListener("click", () => {
    text.style.display ="none";
    player.src = kosandraSrc;
    player.style.display = "block";
});

sanava.addEventListener("click", () => {
    text.style.display ="none";
    player.src = sanavabichSrc;
    player.style.display = "block";
});

wheniwin.addEventListener("click", () => {
    text.style.display ="none";
    player.src = wheniwinSrc;
    player.style.display = "block";
});

vavilon.addEventListener("click", () => {
    text.style.display ="none";
    player.src = vavilonSrc;
    player.style.display = "block";
});

gotlove.addEventListener("click", () => {
    text.style.display ="none";
    player.src = gotloveSrc;
    player.style.display = "block";
});

captain.addEventListener("click", () => {
    text.style.display ="none";
    player.src = captainSrc;
    player.style.display = "block";
});

reset.addEventListener("click", () => {
    player.style.display ="none";
    text.style.display = "block";
    player.src = "#";
});


// kosandra.addEventListener("mouseover", () => {
//     warning.style.visibility = "visible";
// });