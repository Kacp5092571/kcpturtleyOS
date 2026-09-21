let hp=10
let hpshow="-"
function ealfunc(){
    hp=hp+10
hpshow = hpshow+" - "
}

function thingss(){
setInterval(function thing() {
        hp = hp + 1;
        hpshow = hpshow - " - "
document.getElementById("hpdis").innerHTML = hpshow;    
}, 1000)
}

