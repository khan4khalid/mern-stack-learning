let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"];
let started=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelup();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },600);

}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },600);

}

function levelup(){
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(){
    // console.log("curr level", level);
    let idx=level-1;;
    if(userSeq[idx]===gameSeq[idx]){
        console.log("same value");
    }else{
        console.log("wrong value");
    }
}

function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}

let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}