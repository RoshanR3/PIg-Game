const score1=document.getElementById('score--0');
const score2=document.getElementById('score--1');
const diceel=document.querySelector('.dice');
const currentscore1=document.querySelector('#current--0');
const currentscore2=document.querySelector('#current--1');
const player1el=document.querySelector(".player--0")
const player2el=document.querySelector(".player--1")


const newbtn=document.querySelector(".btn--new");
const holdbtn=document.querySelector(".btn--hold")
const rollbtn=document.querySelector(".btn--roll");
score1.textContent=0;
score2.textContent=0;
diceel.classList.add('hidden');
let scores=[0,0];
var currentscore=0;
var activenumber=0;
let dicec=true;
var switchc=function(){
    document.querySelector(`#current--${activenumber}`).textContent=0;
    currentscore=0;
    activenumber=activenumber===0?1:0;
    player1el.classList.toggle('player--active');
    player2el.classList.toggle('player--active');
};
rollbtn.addEventListener('click',function(){
    if(dicec){
    var dice=Math.floor(Math.random()*6)+1;
    diceel.classList.remove('hidden');
    diceel.src=`images/dice-${dice}.png`;
    if(dice!==1){
        currentscore+=dice;
        document.querySelector(`#current--${activenumber}`).textContent=currentscore;
    }
    else{
        switchc();
    }
}
});
holdbtn.addEventListener('click',function(){
    if(dicec){
    scores[activenumber]+=currentscore;
    console.log(scores[activenumber])
    document.getElementById(`score--${activenumber}`).textContent=scores[activenumber];
    if(scores[activenumber]>=20){
        dicec=false;
        diceel.classList.add('hidden');
        document.querySelector(`.player--${activenumber}`).classList.add('player--winner');
        document.querySelector(`.player--${activenumber}`).classList.remove('player--active');
    }
    else{
        switchc();
    }
}
})
newbtn.addEventListener('click',function(){
    score1.textContent=0;
score2.textContent=0;
diceel.classList.add('hidden');
let scores=[0,0];
var currentscore=0;
var activenumber=0;
})