let moving = 0;
let count = 0;
alert("It's not like you needed this anyways, right?")
function move(){
    let thingmoved = 20;
    moving = 1
    while (moving===1){
        document.getElementById("carr").style.right = `${thingmoved}px`;
        count = count+1;

}
if (count===40){
alert('CRASSHHHHH');
}    
}   

function stop(){
    moving = 0;
}