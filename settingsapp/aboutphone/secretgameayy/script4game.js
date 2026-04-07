let count = 1
let plug = 0
let side = 1
function tryplug(){
    if (count < 3) {
        count = count + 1
        if(count === 1){
            side = 1
document.getElementById("dacable").src = "side1.png"
    } 
    if (count === 2){
        side = 2
        document.getElementById("dacable").src = "side2.png"
    }
    }else {
      plug = 1
      document.getElementById("dacable").src = "side1.png"
      document.getElementById("the text").innerHTML = "1% ⚡️"
    }

}