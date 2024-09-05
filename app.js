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

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);

}

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

let allbtn = document.querySelectorAll('.btn');

for(btn of allbtn){
    btn.addEventListener('click',btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,500);
        }
    }
    else{
        let go = `<span style="color:red;">Game Over!</span>`;
        h2.innerHTML = `${go} your score was  <b>${level}</b> <br> press any key to start`;
        let body = document.querySelector('body');
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "white";
        },150);
        reset();
    }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}