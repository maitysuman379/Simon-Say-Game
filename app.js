let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow","red","purple","green"];


let h2 = document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameFlash(randbtn);
    // console.log(randbtn)
}

function btnPress(){
    let btn = this;
    userFlash(btn);
}

let allbtn = document.querySelectorAll('.btn');
for(btn of allbtn){
    btn.addEventListener('click',btnPress);
}