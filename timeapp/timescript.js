let secss = 0
let letting = 0
function timersetup(){
   if (letting === 0){
        let month = "March"
    let year = "2026";
    let space = " "
    let specialevent = "St Patrick's day happened recently";
    const monthyear = month + space + year;
        document.getElementById("time1").innerHTML = monthyear;
    document.getElementById("specialthing").innerHTML = specialevent;
setInterval(function thing() {
        secss = secss + 1;
document.getElementById("seconds").innerHTML = secss;    
}, 1000)
   } 
letting = 1
    }
