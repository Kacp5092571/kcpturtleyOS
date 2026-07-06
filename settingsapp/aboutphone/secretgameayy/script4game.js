let moving = 10
let distancee = 0
let paddle = 1
let side = "right"
let sidecount = 0
let deggs = 60
let deggsback = 210
let degdis = 0
let speedboost = 0
const countries = ["poland", "warsaw", "gdansk", "mazury", "bialystok"]
let random = Math.floor(Math.random() * 180)
let random2 = Math.floor(Math.random() * 360)

function paddles(){
distancee = distancee + paddle
sidecount = sidecount + 1
degdis = degdis + 60
document.getElementById("disshow").innerHTML = distancee
document.getElementById("degshow").innerHTML = degdis
document.getElementById("salilboat").style.transform =`rotate${deggs}deg`
if (distancee===random){
    alert('SPEED BOOSTER found! Press OK to continue.')
    speedboost = 1
    document.getElementById("spbstxt").innerHTML = "Speed booster"
}
if (distancee===random2){
    alert('SPEED BOOSTER found! Press OK to continue.')
    speedboost = 1
    document.getElementById("spbstxt").innerHTML = "Speed booster"
}
if (distancee === 400){
document.getElementById("mainbody").style.backgroundColor = "skyblue"
}
if (distancee===2000){
    document.getElementById("mainbody").style.backgroundColor = "darkblue"
}
const myTimeout = setTimeout(paddlepart2(), 1000)
}

function paddlepart2(){
    distancee = distancee + paddle
}

function usespeedboost(){
    if(speedboost === 1){
         distancee = distancee + paddle * 70
         document.getElementById("disshow").innerHTML = distancee
         document.getElementById("spbstxt").innerHTML = "none"
    }else{
        alert('nope')
    }
}

function cheatcodes(){
    let codes = prompt("Cheat codes?")
    if (codes==="distanceplus"){
distancee = distancee + 500
    }

    if (codes==="paddleop"){
        paddle = 20
    }
    document.getElementById("disshow").innerHTML = distancee;
}

function switching(){
    sidecount = 0;
    degdis = 0;
    document.getElementById("salilboat").style.transform =`rotate${deggsback}deg`
    if (side==="right"){
side = "left"        
    }

    if (side==="left"){
    side="right"
    }
}