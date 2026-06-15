let moving = 10
let distance = 0
let paddle = 2
let speedboost = 0
const countries = ["poland", "warsaw", "gdansk", "mazury", "bialystok"]

function paddles(){
distance = distance + paddle
document.getElementById("paddle").innerHTML = distance
if (distance===200){
    alert('SPEED BOOSTER found! Press OK to continue.')
    speedboost = 1
    document.getElementById("spbstxt").innerHTML = "Speed booster"
}
if (distance === 1000){
document.getElementById("mainbody").style.backgroundColor = "skyblue"
}
if (distance===2000){
    document.getElementById("mainbody").style.backgroundColor = "darkblue"
}
}

function usespeedboost(){
    if(speedboost === 1){
         distance = distance + paddle * 70
         alert('zooooooooom')
         document.getElementById("spbstxt").innerHTML = "none"
    }else{
        alert('nope')
    }
}