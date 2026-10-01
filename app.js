let userseq = [];
let gameseq = [];

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2")

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
   if(started == false) {
    started = true;
    levelUp();
   }
})

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3 + 1);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    btnFlash(randBtn);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 150);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.lenght-1);
}