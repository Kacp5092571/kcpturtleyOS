let toggledis = "On";
let toggvalue = 1;
function toggleswitch(){
 if (toggvalue === 1){
 toggvalue = 0;
 toggledis = "Off";
 }
 if (toggvalue === 0){
    toggvalue = 1;
    toggledis = "On";
 }
 document.getElementById("toggshowyh").innerHTML = toggledis;
}