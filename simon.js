let gameSeq = [];
let userSeq =[];
let h2 = document.querySelector("h2");
let arr= ["red","yellow","green","purple"];

let started =false;
let level = 0;

document.addEventListener("keypress" , function(){
    if(started == false){
        started = true;
        console.log("game started");
        levelup();
    }
})

 function levelup(){
  userSeq =[];
    level++;
    h2.innerText = `level ${level}`;
    let randcol = arr[Math.floor(Math.random()*4)];
    let randbtn = document.querySelector(`.${randcol}`);
    btnFlash(randbtn);
    gameSeq.push(randcol);
    console.log(gameSeq);
 }
 function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   }, 150);

  
 }
 function userFlash(btn){
   btn.classList.add("col");
   setTimeout(function(){
    btn.classList.remove("col");
   }, 150);
  
 }
 function checkAns(idx){
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
    setTimeout(levelup,1000);
    }
  }else{
    h2.innerText = `Game Over! Your score was ${level}. Press any key to restart.`;
   document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function (){
      document.querySelector("body").style.backgroundColor = "white";},150
    );
    reset();
  }
 }


 function btnpress(){
   let btn = this;
   userFlash(btn);
   let usercolor = btn.getAttribute("id");
   userSeq.push(usercolor);
   checkAns(userSeq.length-1);
 }
 let allbtns = document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click",btnpress);
 }

 function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
 }