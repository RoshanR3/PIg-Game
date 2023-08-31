const newbtn=document.querySelector('.btn--new');
const rollbtn=document.querySelector('.btn--roll');
const holdbtn=document.querySelector('.btn--hold');
const diceel=document.querySelector(".dice");

const score1=document.querySelector("#current--0");
const score2=document.querySelector("#current--1");
const tscore1=document.getElementById('score--0');
const tscore2=document.getElementById('score--1');

const player1=document.querySelector(".player--0");
const player2=document.querySelector(".player--1");
tscore1.textContent=0;
tscore2.textContent=0;

diceel.classList.add('hidden');
var scores,totalscore,currentscore,activeno,dicec;
const init=function(){
    scores=[0,0]
    totalscore=0;
    currentscore=0;
    activeno=0;
    dicec=true;
    tscore1.textContent=0;
    tscore2.textContent=0;
    score2.textContent=0;
    score1.textContent=0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
}
init();
const switchc=function(){
    document.querySelector(`#current--${activeno}`).textContent=0;
        currentscore=0;
        activeno=activeno===0?1:0;
        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");
}
rollbtn.addEventListener('click',function(){
    if(dicec)
    var randomno=Math.floor(Math.random()*6)+1;
    diceel.classList.remove('hidden');
    diceel.src=`images/dice-${randomno}.png`;
    if(randomno!=1){
        currentscore+=randomno;
        document.querySelector(`#current--${activeno}`).textContent=currentscore;
    }
    else{
        switchc();
        }
})
holdbtn.addEventListener("click",function(){
    if(dicec)
    scores[activeno]+=currentscore;
    document.querySelector(`#score--${activeno}`).textContent=scores[activeno];
    if(scores[activeno]>=20){
        diceel.classList.add('hidden');
        document.querySelector(`.player--${activeno}`).classList.add('player--winner');
        document.querySelector(`.player--${activeno}`).classList.remove('player--active');
    }
    else{
        switchc();
    }
})
newbtn.addEventListener("click",init);