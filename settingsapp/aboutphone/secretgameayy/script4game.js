let moving = 0;
let count = 0;
function move(){
    let thingmoved = 20;
    moving = 1
    while (moving===1){
        setInterval(function frmove() {
    document.getElementById("carr").style.right = `${thingmoved}px`;
        count = count+1;
        }, 1000)
if (count===40){
alert('CRASSHHHHH');
} 
}
}   

function stop(){
    moving = 0;
}