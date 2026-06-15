let moving = 10
let distanceee = 0
let paddle = 2
let speedboost = 0
const countries = ["poland", "warsaw", "gdansk", "mazury", "bialystok"]

function paddles(){
distanceee = distanceee + paddle
document.getElementById("disshow").innerHTML = distanceee
if (distancee===200){
    alert('SPEED BOOSTER found! Press OK to continue.')
    speedboost = 1
    document.getElementById("spbstxt").innerHTML = "Speed booster"
}
if (distancee === 1000){
document.getElementById("mainbody").style.backgroundColor = "skyblue"
}
if (distancee===2000){
    document.getElementById("mainbody").style.backgroundColor = "darkblue"
}
}

function usespeedboost(){
    if(speedboost === 1){
         distancee = distancee + paddle * 70
         alert('zooooooooom')
         document.getElementById("spbstxt").innerHTML = "none"
    }else{
        alert('nope')
    }
}