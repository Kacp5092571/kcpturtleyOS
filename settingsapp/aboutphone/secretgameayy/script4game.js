let moving = 10
let distancee = 0
let paddle = 2
let speedboost = 0
const countries = ["poland", "warsaw", "gdansk", "mazury", "bialystok"]
let random = Math.floor(Math.random() * 180)
let random2 = Math.floor(Math.random() * 360)

function paddles(){
distancee = distancee + paddle
document.getElementById("disshow").innerHTML = distancee
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