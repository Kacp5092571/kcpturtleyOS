let toggle = 1;
let toggleinfo = "On"
function toggleit(){
    if (toggle = 1){
        toggleinfo = "On";
    toggle = 0;
    }
    if (toggle = 0){
        toggleinfo = "Off";
        toggle = 1;
    }
    document.getElementById("toggleinfo").innerHTML = toggleinfo;
}