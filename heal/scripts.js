let hp=10
let hpshow="-"
healfunc(){
    hp=hp+10
hpshow = hpshow+" - "
}

setInterval(function thing() {
        hp = hp + 1;
        hpshow = hpshow - " - "
document.getElementById("hpdis").innerHTML = hpshow;    
}, 1000)
   } 
    }

